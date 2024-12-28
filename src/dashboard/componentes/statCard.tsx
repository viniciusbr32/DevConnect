import type React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
	icon: React.ReactNode;
	title: string;
	value: string;
	trend: string;
	trendUp: boolean;
}

export function StatCard({
	icon,
	title,
	value,
	trend,
	trendUp,
}: StatCardProps) {
	return (
		<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
			<div className="flex items-start justify-between">
				<div className="p-2 rounded-lg bg-zinc-700/50">{icon}</div>
				<span
					className={`flex items-center text-sm ${trendUp ? "text-emerald-500" : "text-red-500"}`}
				>
					{trendUp ? (
						<ArrowUp className="w-4 h-4 mr-1" />
					) : (
						<ArrowDown className="w-4 h-4 mr-1" />
					)}
					{trend}
				</span>
			</div>
			<div className="mt-4">
				<h3 className="text-3xl font-bold text-white">{value}</h3>
				<p className="mt-1 text-sm text-zinc-400">{title}</p>
			</div>
		</div>
	);
}
