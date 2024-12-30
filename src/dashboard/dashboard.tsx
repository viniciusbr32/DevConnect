import { DashboardLayout } from "./componentes/dashboardLayout";
import { RecentApplications } from "./componentes/recentesApplications";
import { RecentProjects } from "./componentes/recentesProjects";
import { StatsGrid } from "./componentes/statGrid";
export function Dashboard() {
	return (
		<DashboardLayout>
			<div className="p-6 space-y-6">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold text-white">Dashboard</h1>
					<span className="text-zinc-400">Bem-vindo de volta!</span>
				</div>
				<StatsGrid />

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<RecentProjects />
					<RecentApplications />
				</div>
			</div>
		</DashboardLayout>
	);
}
