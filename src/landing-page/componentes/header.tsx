import { DropMenuUser } from "@/components/dropMenuUser";
import { NavLink } from "@/components/navLink";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/authContext";
import { Code2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
	const [isDropdownOpen, setIsDropDownOpen] = useState(false);

	const { user } = useAuth();

	return (
		<header className="border-b bg-zinc-900 border-zinc-800">
			<nav className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="">
					<Link to="/" className="flex items-center gap-2">
						<Code2 className="w-8 h-8 text-emerald-500" />
						<span className="text-xl font-bold text-white">DevConnect</span>
					</Link>
				</div>
				<div className="items-center hidden gap-6 sm:flex">
					<NavLink href="#projetos">Projetos</NavLink>
					<NavLink href="#como-funciona">Como Funciona</NavLink>
					{user && (
						<DropMenuUser
							name={user.name}
							avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
							isDropdownOpen={isDropdownOpen}
							setIsOpen={setIsDropDownOpen}
						/>
					)}

					{!user && (
						<Button
							size="lg"
							className="py-2 text-white transition-colors rounded-md bg-emerald-600 hover:bg-emerald-700"
							asChild
						>
							<Link to="/signin">Entrar</Link>
						</Button>
					)}
				</div>
			</nav>
		</header>
	);
}
