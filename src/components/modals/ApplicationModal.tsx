import { X } from "lucide-react";
import { useAuth } from "@/contexts/authContext";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface ApplicationModalProps {
	isOpen: boolean;
	onClose: () => void;
	projectTitle: string;
	onSubmit: (data: ApplicationData) => void;
	projectId: string;
}

export interface ApplicationData {
	userId: string;
	projectId: string;
}

const USER_PREVIEW = {
	title: "Suas Informações",
	description: "Estas informações serão enviadas junto com sua candidatura",
};

export function ApplicationModal({
	isOpen,
	onClose,
	projectTitle,
	onSubmit,
	projectId,
}: ApplicationModalProps) {
	const { user } = useAuth();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!user) return;
		onSubmit({
			userId: user.id,
			projectId,
		});
		onClose();
	};

	return (
		<>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
					<div className="relative w-full max-w-md p-6 rounded-lg bg-zinc-800">
						<Button
							onClick={onClose}
							className="absolute right-4 top-4 text-zinc-400 hover:text-white"
						>
							<X className="w-5 h-5" />
						</Button>

						<div className="mb-6 ">
							<h2 className="mb-4 text-xl font-semibold text-white text-wrap ">
								Candidatar-se para: {projectTitle}
							</h2>

							{/* Informações do Usuário */}
							<div className="p-4 rounded-lg bg-zinc-700/30">
								<h3 className="mb-3 text-sm font-medium text-zinc-400">
									{USER_PREVIEW.title}
								</h3>
								<div className="flex items-center gap-4 mb-4">
									<img
										src={`http://localhost:3000/files/${user?.avatar}`}
										alt={user?.name}
										className="w-12 h-12 rounded-full"
									/>
									<div>
										<h3 className="font-medium text-white">{user?.name}</h3>
										<p className="text-sm text-zinc-400">{user?.email}</p>
									</div>
								</div>

								{/* Skills do usuário */}
								<div>
									<h4 className="mb-2 text-sm font-medium text-zinc-400">
										Suas skills:
									</h4>
									<div className="flex flex-wrap gap-2">
										{user?.skills.map((skill) => (
											<Badge key={skill.name}>{skill.name}</Badge>
										))}
									</div>
								</div>
							</div>
						</div>

						<div className="flex gap-3">
							<Button variant="secondary" onClick={onClose} type="button">
								Cancelar
							</Button>
							<Button type="submit" onClick={handleSubmit}>
								Enviar Candidatura
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
