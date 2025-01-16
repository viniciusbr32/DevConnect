import { stats } from "@/constantes/stats";

export function Stats() {
	return (
		<section className="py-16 bg-emerald-600">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="block gap-8 space-y-3 text-center sm:items-center sm:flex justify-evenly">
					{stats.map((stat) => (
						<div key={stat.value}>
							<div className="mb-2 text-4xl font-bold text-white">
								{stat.value}
							</div>
							<div className="text-emerald-100">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
