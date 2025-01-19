import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/authContext";

interface DropMenuProps {
	name: string;
	avatarUrl: string;
	isDropdownOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DropMenuUser({
	avatarUrl,
	name,
	isDropdownOpen,
	setIsOpen,
}: DropMenuProps) {
	const { signOut } = useAuth();

	return (
		<div className="relative">
			<Button
				className="flex items-center space-x-3 focus:outline-none"
				onClick={() => setIsOpen(!isDropdownOpen)}
			>
				<img src={avatarUrl} alt={name} className="w-8 h-8 rounded-full" />
				<span className="text-white">{name}</span>
				<ChevronDown className="w-4 h-4 text-zinc-400" />
			</Button>

			{isDropdownOpen && (
				<div className="absolute right-0 z-50 w-48 p-2 mt-2 border rounded-md shadow-lg bg-zinc-800 border-zinc-700">
					<a
						href="/dashboard"
						className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 hover:rounded-sm"
					>
						Dashboard
					</a>
					<a
						href="/dashboard/configuracoes"
						className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 hover:rounded-sm"
					>
						Configurações
					</a>
					<button
						type="submit"
						onClick={signOut}
						className="block w-full px-4 py-2 text-sm text-left text-zinc-300 hover:bg-zinc-700 hover:rounded-sm"
					>
						Sair
					</button>
				</div>
			)}
		</div>
	);
}
