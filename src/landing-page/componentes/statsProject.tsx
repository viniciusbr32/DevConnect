interface StatsProps {
	candidates: number;
	remainingPositions: number;
}

export function StatsProject({ candidates, remainingPositions }: StatsProps) {
	return (
		<div className="p-6 border bg-zinc-800 rounded-xl border-zinc-700">
			<h2 className="mb-4 text-xl font-semibold text-white">Estatísticas</h2>
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<span className="text-zinc-400">Candidaturas</span>
					<span className="font-medium text-white">{candidates}</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-zinc-400">Vagas Restantes</span>
					<span className="font-medium text-white">{remainingPositions}</span>
				</div>
			</div>
		</div>
	);
}
