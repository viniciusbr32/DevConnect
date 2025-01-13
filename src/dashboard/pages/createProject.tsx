import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { DashboardLayout } from "../componentes/dashboardLayout";
import { TECH_OPTIONS } from "@/constantes/techOptions";
import { useState } from "react";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { PROJECT_LEVELS, type ProjectLevel } from "@/constantes/projectLevels";
import { useForm } from "react-hook-form";
import { Errors } from "@/landing-page/componentes/errors";
import { useCreateProject } from "@/hooks/api/useCreateProject";
import { useAuth } from "@/contexts/authContext";
import { useToast } from "@/hooks/use-toast";
import { Loading } from "@/components/loading";

interface ProjectTypes {
	title: string;
	description: string;
	deadline: string;
	teamSize: number;
	web_site: string;
	url_github: string;
}

export function CreateProject() {
	const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
	const [showTechDropdown, setShowTechDropdown] = useState(false);
	const [projectLevel, setProjectLevel] = useState<ProjectLevel>("BEGINNER");
	const { toast } = useToast();

	const { user } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ProjectTypes>();

	const handleTechSelect = (tech: string) => {
		if (!selectedTechs.includes(tech)) {
			setSelectedTechs([...selectedTechs, tech]);
		}
		setShowTechDropdown(false);
	};

	const handleRemoveTech = (techToRemove: string) => {
		setSelectedTechs(selectedTechs.filter((tech) => tech !== techToRemove));
	};

	const mutation = useCreateProject();

	const onSubmit = (data: ProjectTypes) => {
		if (!user?.id) return;

		const teamSizeNumber = Number(data.teamSize);

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
							Informações Básicas
						</h2>

						<div className="space-y-4 ">
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
							{mutation.error && <Errors message={mutation.error.message} />}

							<div className="space-y-2">
								<Label
									htmlFor="techs"
									className="block text-sm font-medium text-zinc-300"
								>
									Tecnologias Necessárias
								</Label>
								<div className="relative">
									<button
										type="button"
										onClick={() => setShowTechDropdown(!showTechDropdown)}
										className="w-full px-3 py-2 text-left text-white border rounded-md bg-zinc-700 border-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
									>
										Selecionar tecnologias
									</button>

									{showTechDropdown && (
										<div className="absolute z-10 w-full mt-1 overflow-auto border rounded-md shadow-lg bg-zinc-700 border-zinc-600 max-h-60">
											{TECH_OPTIONS.map((tech) => (
												<button
													key={tech}
													type="button"
													onClick={() => handleTechSelect(tech)}
													className="w-full px-4 py-2 text-left text-white hover:bg-zinc-600 focus:outline-none"
												>
													{tech}
												</button>
											))}
										</div>
									)}
									{/* Lista de tecnologias selecionadas */}
									<div className="flex flex-wrap gap-2 mt-2">
										{selectedTechs.map((tech) => (
											<span
												key={tech}
												className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-400"
											>
												{tech}
												<button
													type="button"
													onClick={() => handleRemoveTech(tech)}
													className="hover:text-emerald-300"
												>
													<X className="w-3 h-3" />
												</button>
											</span>
										))}
									</div>
								</div>

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
											message: "maximo 5 Desenvolvedores",
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
