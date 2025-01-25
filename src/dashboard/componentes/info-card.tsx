interface InfoCardProps {
	icon: React.ElementType;
	label: string;
	value: string | number;
}

export function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
	return (
		<div className="p-4 rounded-lg bg-zinc-700/50">
			<div className="flex items-center gap-2 mb-2 text-zinc-400">
				<Icon className="w-4 h-4" />
				<span>{label}</span>
			</div>
			<p className="text-white">{value}</p>
		</div>
	);
}
