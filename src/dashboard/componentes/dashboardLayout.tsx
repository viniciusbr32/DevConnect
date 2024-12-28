import type React from "react";
import { DashboardHeader } from "./dashboardHeader";
import { Sidebar } from "./sidebar";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<div className="min-h-screen bg-zinc-900">
			<DashboardHeader />
			<div className="flex">
				<Sidebar />
				<main className="flex-1">{children}</main>
			</div>
		</div>
	);
}
