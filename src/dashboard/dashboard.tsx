import { useAuth } from "@/contexts/authContext";
import { DashboardLayout } from "./componentes/dashboardLayout";
import { MyProjects } from "./componentes/myProjects";

import { StatsGrid } from "./componentes/statGrid";
export function Dashboard() {
	const { user, isAuthenticated } = useAuth();

	return (
		<DashboardLayout>
			<div className="p-6 space-y-6">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold text-white">Dashboard</h1>
					<span className="text-zinc-400">Bem-vindo de volta!</span>
				</div>
				<StatsGrid />
				{isAuthenticated &&
					user &&
					(user.projects.length > 0 ? (
						<MyProjects projects={user.projects} />
					) : (
						<p className="text-center text-white">Nenhum Projeto criado</p>
					))}
			</div>
		</DashboardLayout>
	);
}
