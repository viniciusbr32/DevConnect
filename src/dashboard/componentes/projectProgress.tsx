import { Calendar } from "lucide-react";

export function ProjectProgress() {
	const milestones = [
		{
			title: "Planejamento",
			date: "10 Mar 2024",
			completed: true,
		},
		{
			title: "Design do Sistema",
			date: "15 Mar 2024",
			completed: true,
		},
		{
			title: "Desenvolvimento Frontend",
			date: "25 Mar 2024",
			completed: false,
			current: true,
		},
		{
			title: "Desenvolvimento Backend",
			date: "10 Abr 2024",
			completed: false,
		},
		{
			title: "Testes e Deploy",
			date: "20 Abr 2024",
			completed: false,
		},
	];

	return (
		<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
			<h2 className="mb-6 text-lg font-semibold text-white">
				Progresso do Projeto
			</h2>

			<div className="relative">
				<div className="absolute top-0 w-px h-full left-4 bg-zinc-700" />

				<div className="space-y-6">
					{milestones.map((milestone, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={index} className="relative flex items-center">
							<div
								className={`absolute left-4 w-px h-full ${index === milestones.length - 1 ? "bg-transparent" : "bg-zinc-700"}`}
							/>
							<div
								className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 
                  ${
										milestone.completed
											? "bg-emerald-500 border-emerald-500"
											: milestone.current
												? "bg-zinc-800 border-emerald-500"
												: "bg-zinc-800 border-zinc-700"
									}`}
							>
								{milestone.completed && (
									// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
									<svg
										className="w-4 h-4 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								)}
							</div>

							<div className="flex-1 ml-4">
								<div className="flex items-center justify-between">
									<h3
										className={`font-medium ${milestone.completed ? "text-emerald-500" : "text-white"}`}
									>
										{milestone.title}
									</h3>
									<div className="flex items-center text-sm text-zinc-400">
										<Calendar className="w-4 h-4 mr-1" />
										{milestone.date}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
