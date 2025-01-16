import { TECH_OPTIONS } from "@/constantes/techOptions";
import { Label } from "@radix-ui/react-label";
import { X } from "lucide-react";
import { useState } from "react";

interface TechSelectionProps {
	selectedTechs: string[];
	setSelectedTechs: React.Dispatch<React.SetStateAction<string[]>>;
	label?: string;
}

export function TechSelector({
	label,
	selectedTechs,
	setSelectedTechs,
}: TechSelectionProps) {
	const [showTechDropdown, setShowTechDropdown] = useState(false);

	const handleTechSelect = (tech: string) => {
		if (!selectedTechs.includes(tech)) {
			setSelectedTechs([...selectedTechs, tech]);
		}
		setShowTechDropdown(false);
	};

	const handleRemoveTech = (techToRemove: string) => {
		setSelectedTechs(selectedTechs.filter((tech) => tech !== techToRemove));
	};

	return (
		<div className="space-y-2">
			<Label
				htmlFor="techs"
				className="block text-sm font-medium text-zinc-300"
			>
				{label || "Tecnologias Necessárias"}
			</Label>
			<div className="relative">
				<button
					type="button"
					onClick={() => setShowTechDropdown(!showTechDropdown)}
					className="w-full px-3 py-2 text-left text-white border rounded-md bg-zinc-700 border-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
				>
					Selecionar tecnologias
				</button>

				{showTechDropdown && (
					<div className="absolute z-10 w-full mt-1 overflow-auto border rounded-md shadow-lg bg-zinc-700 border-zinc-600 max-h-60">
						{TECH_OPTIONS.map((tech) => (
							<button
								key={tech}
								type="button"
								onClick={() => handleTechSelect(tech)}
								className="w-full px-4 py-2 text-left text-white hover:bg-zinc-600 focus:outline-none"
							>
								{tech}
							</button>
						))}
					</div>
				)}
				<div className="flex flex-wrap gap-2 mt-2">
					{selectedTechs.map((tech) => (
						<span
							key={tech}
							className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-400"
						>
							{tech}
							<button
								type="button"
								onClick={() => handleRemoveTech(tech)}
								className="hover:text-emerald-300"
							>
								<X className="w-3 h-3" />
							</button>
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
