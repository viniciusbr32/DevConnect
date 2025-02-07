import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardLayout } from "../componentes/dashboardLayout";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { PROJECT_LEVELS, type ProjectLevel } from "@/constantes/projectLevels";
import { useForm } from "react-hook-form";
import { Errors } from "@/landing-page/componentes/errors";
import { useCreateProject } from "@/hooks/api/useCreateProject";
import { useAuth } from "@/contexts/authContext";
import { useToast } from "@/hooks/use-toast";
import { Loading } from "@/components/loading";
import { TechSelector } from "@/components/techSelector";
import { UploadImg } from "../componentes/uploadImg";

interface ProjectTypes {
	title: string;
	description: string;
	deadline: string;
	teamSize: number;
	web_site: string;
	url_github: string;
	file: File;
}

export function CreateProject() {
	const [projectLevel, setProjectLevel] = useState<ProjectLevel>("BEGINNER");
	const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
	const [coverImage, setCoverImage] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			if (file.size > 5 * 1024 * 1024) {
				// 5MB limit
				toast({
					description: "A imagem deve ter no máximo 5MB",
					variant: "destructive",
					duration: 1000,
				});
				return;
			}

			if (!file.type.startsWith("image/")) {
				toast({
					description: "Por favor, selecione apenas arquivos de imagem",
					variant: "destructive",
					duration: 1000,
				});
				return;
			}

			setCoverImage(file);

			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
		}
	};

	const removeImage = () => {
		setCoverImage(null);
		setImagePreview(null);
	};

	const { toast } = useToast();
	const { user } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ProjectTypes>();

	const mutation = useCreateProject();

	const onSubmit = (data: ProjectTypes) => {
		if (!user?.id) return;

		const teamSizeNumber = Number(data.teamSize);

		if (coverImage === null) return;

		mutation.mutate(
			{
				title: data.title,
				deadline: data.deadline,
				description: data.description,
				level: projectLevel,
				technologies: selectedTechs,
				user_id: user.id,
				web_site: data.web_site,
				url_github: data.url_github,
				required_member: teamSizeNumber,
				file: coverImage,
			},
			{
				onSuccess: () => {
					setSelectedTechs([]);
					setProjectLevel("BEGINNER");
					reset();
					toast({
						description: "Projeto criado com sucesso",
						variant: "sucess",
					});
				},
			},
		);
	};

	return (
		<DashboardLayout>
			<div className="max-w-4xl p-6 mx-auto">
				<h1 className="mb-8 text-2xl font-bold text-white">
					Criar Novo Projeto
				</h1>

				<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
					<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
						<h2 className="mb-4 text-lg font-semibold text-white">
							Imagem do Projeto
						</h2>
						<UploadImg
							handleImageUpload={handleImageUpload}
							imagePreview={imagePreview}
							removeImage={removeImage}
							{...register("file", {
								validate: () => {
									const file = coverImage;
									if (file?.type !== "image/png" && "image/jpeg") {
										return "Apenas arquivos PNG ou JPEG são permitidos";
									}
									return true;
								},
							})}
						/>

						{errors.file && <Errors message={errors.file.message} />}
						<h2 className="my-4 text-lg font-semibold text-white">
							Informações Básicas
						</h2>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label
									htmlFor="title-project"
									className="text-sm font-medium text-zinc-300"
								>
									Titulo do Projeto
								</Label>
								<Input
									{...register("title", {
										required: "O campo é obrigatorio",
										minLength: {
											value: 5,
											message: "O campo requer um mínimo de 5 caracteres.",
										},
									})}
									placeholder="Ex: App de Gestão Financeira"
									id="title-project"
									className="text-white"
								/>
								{errors.title && <Errors message={errors.title.message} />}
							</div>

							<div className="space-y-2">
								<Label
									className="block text-sm font-medium text-zinc-300"
									htmlFor="description"
								>
									Descrição
								</Label>
								<textarea
									{...register("description", {
										required: "O campo é obrigatorio",
										minLength: {
											value: 20,
											message:
												"O campo descrição requer pelo menos 20 caracteres.",
										},
									})}
									id="description"
									className="w-full px-3 py-2 text-white border rounded-md bg-zinc-700 border-zinc-600 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
									rows={4}
									placeholder="Descreva seu projeto em detalhes..."
								/>
								{errors.description && (
									<Errors message={errors.description.message} />
								)}
							</div>

							<div className="space-y-2">
								<Label
									htmlFor="deadline"
									className="block text-sm font-medium text-zinc-300"
								>
									Prazo do Projeto
								</Label>
								<input
									{...register("deadline", {
										required: "O campo é obrigatorio",
									})}
									type="date"
									id="deadline"
									className="w-full px-3 py-2 text-white border rounded-md bg-zinc-700 border-zinc-600 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
									min={new Date().toISOString().split("T")[0]}
								/>
							</div>

							{errors.deadline && <Errors message={errors.deadline.message} />}

							<TechSelector
								selectedTechs={selectedTechs}
								setSelectedTechs={setSelectedTechs}
								label="Tecnologias necessarias"
							/>

							<div className="space-y-2">
								<label
									htmlFor="projectLevel"
									className="block text-sm font-medium text-zinc-300"
								>
									Nível do Projeto
								</label>
								<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
									{PROJECT_LEVELS.map((level) => (
										<button
											key={level.value}
											type="button"
											onClick={() => setProjectLevel(level.value)}
											className={`p-4 rounded-lg border ${
												projectLevel === level.value
													? "border-emerald-500 bg-emerald-500/10"
													: "border-zinc-700 hover:border-zinc-600"
											} text-left transition-colors`}
										>
											<h3 className="mb-1 font-medium text-white">
												{level.label}
											</h3>
											<p className="text-sm text-zinc-400">
												{level.description}
											</p>
										</button>
									))}
								</div>
							</div>

							<div className="space-y-2">
								<Label
									htmlFor="team-size"
									className="block text-sm font-medium text-zinc-300"
								>
									Tamanho da equipe
								</Label>
								<Input
									{...register("teamSize", {
										required: "O campo é obrigatorio",
										max: {
											value: 5,
											message: "máximo 5 Desenvolvedores",
										},
									})}
									type="number"
									placeholder="Número de desenvolvedores necessários"
									className="text-white"
									id="team-size"
								/>
								{errors.teamSize && (
									<Errors message={errors.teamSize.message} />
								)}
							</div>
						</div>
					</div>

					<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
						<h2 className="mb-4 text-lg font-semibold text-white">
							Links do Projeto
						</h2>

						<div className="space-y-4">
							<div>
								<Input
									{...register("url_github", {
										required: "O campo é obrigatorio",
									})}
									className="text-white"
									placeholder="https://github.com/seu-usuario/seu-projeto"
								/>
								{errors.url_github && (
									<Errors message={errors.url_github.message} />
								)}
							</div>

							<div>
								<Input
									placeholder="https://seu-projeto.com"
									className="text-white"
									{...register("web_site", {
										required: "O campo é obrigatorio",
									})}
								/>
								{errors.web_site && (
									<Errors message={errors.web_site.message} />
								)}
							</div>
						</div>
					</div>

					<div className="w-full">
						<Button
							type="submit"
							className="w-full bg-emerald-500 hover:bg-emerald-600"
						>
							{mutation.isPending ? <Loading /> : "Criar Projeto"}
						</Button>
					</div>
				</form>
			</div>
		</DashboardLayout>
	);
}
