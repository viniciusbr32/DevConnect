import { TypeRoles } from "@/constantes/typeRoles";
import { Label } from "./ui/label";

interface RoleSelectionProps {
	selectedRole: string;
	setSelectedRole: React.Dispatch<React.SetStateAction<string>>;
	label?: string;
}

export function RoleSelector({
	selectedRole,
	setSelectedRole,
	label,
}: RoleSelectionProps) {
	return (
		<div>
			<Label className="block mb-2 text-sm font-medium text-zinc-300">
				{label}
			</Label>
			<select
				value={selectedRole}
				onChange={(e) => setSelectedRole(e.target.value)}
				className="w-full px-3 py-2 text-white border rounded-md bg-zinc-700 border-zinc-600 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
			>
				<option value="" disabled>
					Selecione seu cargo
				</option>
				{TypeRoles.cargos.map((role) => (
					<option key={role.name} value={role.name}>
						{role.name}
					</option>
				))}
			</select>
		</div>
	);
}
