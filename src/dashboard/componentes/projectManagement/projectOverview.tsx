import { FormatedDate } from "@/utils/formatedData";
import { Calendar, Users, GitPullRequest, AlertCircle } from "lucide-react";

interface ProjectOverviewProps {
	title: string;
	requiredMember: number;
	createdAt: string;
	deadline: string;
}

export function ProjectOverview({
	requiredMember,
	title,
	createdAt,
	deadline,
}: ProjectOverviewProps) {
	return (
		<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
			<div className="flex items-start justify-between mb-6">
				<div>
					<h1 className="text-2xl font-bold text-white">{title}</h1>
					<p className="mt-1 capitalize text-zinc-400">
						Projeto criado em {FormatedDate(createdAt)}
					</p>
				</div>
				<span className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-500">
					Em Andamento
				</span>
			</div>

			<div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-4">
				<div className="p-4 rounded-lg bg-zinc-700/50">
					<div className="flex items-center gap-2 mb-2 text-zinc-400">
						<Calendar className="w-4 h-4" />
						<span>Prazo</span>
					</div>
					<p className="text-white">{FormatedDate(deadline)}</p>
				</div>

				<div className="p-4 rounded-lg bg-zinc-700/50">
					<div className="flex items-center gap-2 mb-2 text-zinc-400">
						<Users className="w-4 h-4" />
						<span>Equipe</span>
					</div>
					<p className="text-white">{requiredMember} membros</p>
				</div>

				<div className="p-4 rounded-lg bg-zinc-700/50">
					<div className="flex items-center gap-2 mb-2 text-zinc-400">
						<GitPullRequest className="w-4 h-4" />
						<span>Pull Requests</span>
					</div>
					<p className="text-white">8 abertos</p>
				</div>

				<div className="p-4 rounded-lg bg-zinc-700/50">
					<div className="flex items-center gap-2 mb-2 text-zinc-400">
						<AlertCircle className="w-4 h-4" />
						<span>Issues</span>
					</div>
					<p className="text-white">12 pendentes</p>
				</div>
			</div>

			<div className="space-y-4">
				<div className="flex justify-between text-sm">
					<span className="text-emerald-500">35 dias restantes</span>
				</div>
			</div>
		</div>
	);
}
