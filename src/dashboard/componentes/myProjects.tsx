import { useNavigate } from "react-router-dom";
import { Trash2, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import type { Project } from "@/hooks/api/getUserDetails";

interface MyProjectProps {
	projects: Project[];
}

export function MyProjects({ projects }: MyProjectProps) {
	const navigate = useNavigate();

	const handleManageProject = (projectId: string) => {
		navigate(`/dashboard/project/${projectId}/gerenciar`);
	};

	const handleDeleteProject = (projectTitle: string) => {
		toast({
			description: `Deletar projeto ${projectTitle}`,
			variant: "destructive",
			duration: 800,
		});
	};

	return (
		<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
			<h2 className="mb-6 text-lg font-semibold text-white">Meus Projetos</h2>

			<div className="space-y-2 ">
				{projects.map((project) => (
					<div
						key={project.id}
						className="flex items-center justify-between p-4 rounded-lg bg-zinc-700/50"
					>
						<div>
							<h3 className="font-medium text-white">{project.title}</h3>
							<div className="flex gap-2">
								{project.technologies.map((tech) => (
									<p key={tech.id} className="mt-1 text-sm text-zinc-400">
										{tech.name}
									</p>
								))}
							</div>
						</div>

						<div className="flex gap-2">
							<Button
								variant="destructive"
								onClick={() => handleDeleteProject(project.title)}
							>
								<Trash2 className="w-4 h-4 text-white" />
							</Button>

							<Button onClick={() => handleManageProject(project.id)}>
								<Settings className="w-4 h-4 text-white" />
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
