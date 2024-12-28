import { Users, Rocket, MessageSquare, Star } from "lucide-react";
import { StatCard } from "./statCard";

export function StatsGrid() {
	const stats = [
		{
			icon: <Rocket className="w-6 h-6 text-emerald-500" />,
			title: "Projetos Ativos",
			value: "3",
			trend: "+2 este mês",
			trendUp: true,
		},
		{
			icon: <Users className="w-6 h-6 text-emerald-500" />,
			title: "Candidaturas",
			value: "8",
			trend: "5 pendentes",
			trendUp: true,
		},
		{
			icon: <MessageSquare className="w-6 h-6 text-emerald-500" />,
			title: "Mensagens",
			value: "12",
			trend: "3 não lidas",
			trendUp: false,
		},
		{
			icon: <Star className="w-6 h-6 text-emerald-500" />,
			title: "Projetos Concluídos",
			value: "5",
			trend: "2 este ano",
			trendUp: true,
		},
	];

	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{stats.map((stat, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<StatCard key={index} {...stat} />
			))}
		</div>
	);
}
