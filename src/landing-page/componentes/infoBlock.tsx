import type { LucideIcon } from "lucide-react";

interface InfoBlockProps {
	label: string;
	value: string;
	icon: LucideIcon;
}

export function InfoBlock({ icon: Icon, label, value }: InfoBlockProps) {
	return (
		<div className="p-4 rounded-lg bg-zinc-900/50">
			<div className="flex items-center mb-2 text-zinc-400">
				<Icon className="w-5 h-5 mr-2 text-emerald-500" />
				<span className="font-medium">{label}</span>
			</div>
			<p className="text-white">{value}</p>
		</div>
	);
}
