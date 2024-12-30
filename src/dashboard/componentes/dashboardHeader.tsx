import { Bell, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/authContext";

export function DashboardHeader() {
	const { user, signOut } = useAuth();

	return (
		<header className="border-b bg-zinc-800 border-zinc-700">
			<div className="flex items-center justify-between h-16 px-6">
				<div className="flex items-center space-x-4">
					<span className="text-lg font-semibold text-white">Dashboard</span>
				</div>

				<div className="flex items-center space-x-4">
					<Button className="text-zinc-400 hover:text-white">
						<Bell className="w-5 h-5" />
					</Button>
					<Button className="text-zinc-400 hover:text-white">
						<Settings className="w-5 h-5" />
					</Button>

					<div className="flex items-center space-x-3">
						<img
							src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt={user?.name}
							className="w-8 h-8 rounded-full"
						/>
						<Button
							onClick={signOut}
							className="text-sm text-zinc-400 hover:text-white"
						>
							Sair
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}