import { MessageSquare, UserPlus, GitPullRequest } from "lucide-react";

export function ActivityFeed() {
	const activities = [
		{
			icon: <MessageSquare className="w-4 h-4 text-emerald-500" />,
			title: "Nova mensagem",
			description: "João comentou no projeto App Mobile",
			time: "Há 5 min",
		},
		{
			icon: <UserPlus className="w-4 h-4 text-emerald-500" />,
			title: "Novo membro",
			description: "Maria entrou no projeto E-commerce",
			time: "Há 2 horas",
		},
		{
			icon: <GitPullRequest className="w-4 h-4 text-emerald-500" />,
			title: "Pull Request",
			description: "PR #123 foi aprovado",
			time: "Há 1 dia",
		},
	];

	return (
		<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
			<h2 className="mb-6 text-lg font-semibold text-white">
				Atividade Recente
			</h2>

			<div className="space-y-6">
				{activities.map((activity, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} className="flex space-x-3">
						<div className="mt-0.5">{activity.icon}</div>
						<div>
							<p className="font-medium text-white">{activity.title}</p>
							<p className="text-sm text-zinc-400">{activity.description}</p>
							<span className="text-xs text-zinc-500">{activity.time}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
