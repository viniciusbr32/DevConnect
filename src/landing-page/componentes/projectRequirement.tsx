import { Requirements } from "@/constantes/requirements";

interface ProjectRequirementProps {
	level: string;
}

export function ProjectRequirement({ level }: ProjectRequirementProps) {
	return (
		<>
			{Requirements.filter((req) => req.levelMin === level).map(
				({ title, description, icon: Icon }, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className="flex items-start p-4 space-x-4 rounded-lg bg-zinc-900/50"
					>
						<div className="w-5 h-5 mt-1 text-emerald-500">
							<Icon />
						</div>
						<div>
							<h3 className="mb-1 font-medium text-white">{title}</h3>
							<p className="text-zinc-400">{description}</p>
						</div>
					</div>
				),
			)}
		</>
	);
}
