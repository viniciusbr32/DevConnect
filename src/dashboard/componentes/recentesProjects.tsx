import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function RecentProjects() {
	const projects = [
		{
			title: "App de Gestão Financeira",
			status: "Em Andamento",
			progress: 65,
			tech: ["React", "Node.js"],
		},
		{
			title: "E-commerce Platform",
			status: "Planejamento",
			progress: 25,
			tech: ["Vue.js", "Python"],
		},
	];

	return (
		<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-lg font-semibold text-white">Projetos Recentes</h2>
				<Button className="text-zinc-400 hover:text-white">
					<MoreHorizontal className="w-5 h-5" />
				</Button>
			</div>

			<div className="space-y-4">
				{projects.map((project, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} className="p-4 rounded-lg bg-zinc-700/50">
						<div className="flex items-start justify-between mb-2">
							<div>
								<h3 className="font-medium text-white">{project.title}</h3>
								<p className="text-sm text-zinc-400">{project.status}</p>
							</div>
							<span className="text-sm font-medium text-emerald-500">
								{project.progress}%
							</span>
						</div>

						<div className="w-full h-2 mb-4 rounded-full bg-zinc-600">
							<div
								className="h-2 rounded-full bg-emerald-500"
								style={{ width: `${project.progress}%` }}
							/>
						</div>

						<div className="flex flex-wrap gap-2">
							{project.tech.map((tech, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<Badge key={index}>{tech}</Badge>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
