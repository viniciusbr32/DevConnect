import { Code2, Users, Rocket } from "lucide-react";

interface Highlights {
	icon: React.FC;
	text: string;
}

export const highlights: Highlights[] = [
	{
		icon: Code2,
		text: "Projetos Open Source",
	},
	{
		icon: Users,
		text: "Mentoria entre Devs",
	},
	{
		icon: Rocket,
		text: "Evolução Constante",
	},
];
