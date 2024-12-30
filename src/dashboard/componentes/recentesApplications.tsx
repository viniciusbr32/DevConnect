import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RecentApplications() {
	const applications = [
		{
			project: "Sistema IoT",
			company: "Tech Solutions",
			status: "Em Análise",
			date: "Há 2 dias",
			avatar:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32&q=80",
		},
		{
			project: "App Mobile",
			company: "Startup XYZ",
			status: "Aprovado",
			date: "Há 1 semana",
			avatar:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32&q=80",
		},
	];

	return (
		<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-lg font-semibold text-white">
					Candidaturas Recentes
				</h2>
				<Button className="text-zinc-400 hover:text-white">
					<MoreHorizontal className="w-5 h-5" />
				</Button>
			</div>

			<div className="space-y-4">
				{applications.map((app, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className="flex items-center justify-between p-4 rounded-lg bg-zinc-700/50"
					>
						<div className="flex items-center space-x-4">
							<img
								src={app.avatar}
								alt={app.company}
								className="w-8 h-8 rounded-full"
							/>
							<div>
								<h3 className="font-medium text-white">{app.project}</h3>
								<p className="text-sm text-zinc-400">{app.company}</p>
							</div>
						</div>
						<div className="text-right">
							<span className="text-sm font-medium text-emerald-500">
								{app.status}
							</span>
							<p className="text-sm text-zinc-400">{app.date}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
