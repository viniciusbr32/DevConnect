import { ProjectCard } from "./projectCard";

export function Project() {
	return (
		<div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8" id="projetos">
			<div className="mb-12 text-center">
				<h2 className="text-3xl font-bold text-white">Projetos em Destaque</h2>
				<p className="mt-4 text-xl text-zinc-400">
					Explore os projetos mais recentes e encontre sua próxima colaboração
				</p>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<ProjectCard />
			</div>
		</div>
	);
}
