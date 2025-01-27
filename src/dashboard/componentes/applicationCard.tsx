import { Badge } from "@/components/ui/badge";
import { FormatedDate } from "@/utils/formatedData";
import { Calendar, User } from "lucide-react";

interface Application {
	projectTitle: string;
	status: "PENDING" | "ACCEPTED" | "REJECTED";
	appliedDate: string;
	projectOwner: string;
	tech: string[];
}

export function ApplicationCard({
	appliedDate,
	projectOwner,
	projectTitle,
	status,
	tech,
}: Application) {
	const statusStyles = {
		PENDING: "bg-yellow-500/10 text-yellow-500",
		ACCEPTED: "bg-emerald-500/10 text-emerald-500",
		REJECTED: "bg-red-500/10 text-red-500",
	};

	const statusText = {
		PENDING: "Pendente",
		ACCEPTED: "Aceito",
		REJECTED: "Recusado",
	};

	return (
		<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-lg font-semibold text-white">{projectTitle}</h3>
				<span
					className={`px-3 py-1 rounded-full text-sm ${statusStyles[status]}`}
				>
					{statusText[status]}
				</span>
			</div>

			<div className="flex items-center gap-4 mb-4 text-sm text-zinc-400">
				<div className="flex items-center gap-1">
					<User className="w-4 h-4" />
					{projectOwner}
				</div>
				<div className="flex items-center gap-1">
					<Calendar className="w-4 h-4" />
					{FormatedDate(appliedDate)}
				</div>
			</div>

			<div className="flex flex-wrap gap-2">
				{tech.map((tech) => (
					<Badge key={tech}>{tech}</Badge>
				))}
			</div>
		</div>
	);
}
