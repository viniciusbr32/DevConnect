import { Code2, Rocket, Users } from "lucide-react";

interface Feature {
	icon: React.FC;
	title: string;
	description: string;
}

export const features: Feature[] = [
	{
		icon: Code2,
		title: "Crie Projetos",
		description:
			"Compartilhe suas ideias e encontre desenvolvedores interessados em colaborar",
	},
	{
		icon: Users,
		title: "Forme Equipes",
		description:
			"Conecte-se com desenvolvedores talentosos e forme equipes dinâmicas",
	},
	{
		icon: Rocket,
		title: "Desenvolva",
		description: "Transforme ideias em projetos reais com colaboração efetiva",
	},
];
