import { Outlet } from "react-router-dom";

import { Header } from "./header";
import { Footer } from "./footer";

export function Layout() {
	return (
		<div className="flex flex-col min-h-screen bg-zinc-900">
			<Header />
			<main className="flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
