import { FormatDifarenceDays, FormatedDate } from "@/utils/formatedData";
import { Calendar, Users } from "lucide-react";
import { InfoCard } from "../info-card";

interface ProjectOverviewProps {
	title: string;
	requiredMember: number;
	createdAt: string;
	deadline: string;
	status: string;
}

export function ProjectOverview({
	requiredMember,
	title,
	createdAt,
	deadline,
	status,
}: ProjectOverviewProps) {
	return (
		<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
			<div className="flex items-start justify-between mb-6">
				<div>
					<h1 className="text-2xl font-bold text-white">{title}</h1>
					<p className="mt-1 text-zinc-400">
						Projeto criado em {FormatedDate(createdAt)}
					</p>
				</div>
				<span
					className={`px-3 py-1 text-sm rounded-full ${
						status === "ONGOING"
							? "bg-emerald-500/10 text-emerald-500" // Em andamento
							: "bg-blue-500/10 text-blue-500" // Concluído
					}`}
				>
					{status === "ONGOING" ? "Em andamento" : "Concluído"}
				</span>
			</div>

			<div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-4">
				<InfoCard
					icon={Calendar}
					label="Prazo"
					value={FormatedDate(createdAt)}
				/>

				<InfoCard
					icon={Users}
					label="equipe necessaria"
					value={`${requiredMember} membros`}
				/>
			</div>

			<div className="space-y-4">
				<div className="flex justify-between text-sm">
					<span className="text-emerald-500">
						{FormatDifarenceDays(deadline)} dias restantes
					</span>
				</div>
			</div>
		</div>
	);
}
