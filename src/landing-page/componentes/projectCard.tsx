import { Badge } from "@/components/ui/badge";
import { useFetchProject } from "@/hooks/api/getAllProjects";
import { Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

import image from "../../assets/placeholder.svg";
import { formatPublishedDate } from "@/utils/formatedData";

export function ProjectCard() {
	const { data } = useFetchProject();

	if (!data) return;
	return (
		<>
			{data.map((project) => (
				<Link key={project.id} to={`/project/${project.id}`}>
					<div className="truncate transition-all border rounded-lg bg-zinc-800 border-zinc-700 hover:border-emerald-500/50">
						<img
							src={image}
							alt={project.title}
							className="object-cover w-full h-48 rounded-t-lg"
						/>
						<div className="p-6 ">
							<h3 className="mb-2 text-xl font-semibold text-white">
								{project.title}
							</h3>
							<p className="mb-4 text-zinc-400 line-clamp-2 ">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.technologies.map((tech) => (
									<Badge
										className="text-zinc-300 bg-emerald-500 hover:bg-emerald-700"
										key={tech.id}
									>
										{tech.name}
									</Badge>
								))}
							</div>
							<div className="flex items-center justify-between text-sm text-zinc-400">
								<div className="flex items-center space-x-2">
									<Users size={16} className="text-emerald-500" />
									<span>{project.requiredMember} devs necessários</span>
								</div>
								<div className="flex items-center space-x-2">
									<Calendar size={16} className="text-emerald-500" />
									<span>{formatPublishedDate(project.createdAt)}</span>
								</div>
							</div>
						</div>
					</div>
				</Link>
			))}
		</>
	);
}
