import { NavLink } from "react-router-dom";
import {
	LayoutDashboard,
	FolderPlus,
	Users,
	MessageSquare,
	Settings,
} from "lucide-react";

export function Sidebar() {
	const menuItems = [
		{
			icon: <LayoutDashboard className="w-5 h-5" />,
			label: "Dashboard",
			path: "/dashboard",
		},
		{
			icon: <FolderPlus className="w-5 h-5" />,
			label: "Criar Projeto",
			path: "/dashboard/novo-projeto",
		},
		{
			icon: <Users className="w-5 h-5" />,
			label: "Candidaturas",
			path: "/dashboard/candidaturas",
		},
		{
			icon: <MessageSquare className="w-5 h-5" />,
			label: "Mensagens",
			path: "/dashboard/mensagens",
		},
		{
			icon: <Settings className="w-5 h-5" />,
			label: "Configurações",
			path: "/dashboard/configuracoes",
		},
	];

	return (
		<aside className="w-64 min-h-screen border-r bg-zinc-800 border-zinc-700">
			<nav className="p-4">
				<ul className="space-y-2">
					{menuItems.map((item, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li key={index}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
										isActive
											? "bg-emerald-500/10 text-emerald-500"
											: "text-zinc-400 hover:bg-zinc-700/50 hover:text-white"
									}`
								}
							>
								{item.icon}
								<span>{item.label}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
