import {
	type LucideIcon,
	GitMerge,
	Users,
	CheckCircle,
	Book,
	Lightbulb,
	Layers,
	TrendingUp,
	Activity,
	ServerCog,
} from "lucide-react";

interface Requirement {
	title: string;
	description: string;
	icon: LucideIcon;
	levelMin: string;
}

export const Requirements: Requirement[] = [
	// Nível Beginner
	{
		title: "Experiência com Versionamento",
		description:
			"Familiaridade com Git para controle de versão e trabalho em equipe",
		icon: GitMerge,
		levelMin: "BEGINNER",
	},
	{
		title: "Trabalho em Equipe",
		description:
			"Colaboração com outros desenvolvedores para atingir metas comuns",
		icon: Users,
		levelMin: "BEGINNER",
	},
	{
		title: "Conhecimento em APIs REST",
		description:
			"Desenvolvimento e consumo de APIs RESTful para comunicação de dados",
		icon: ServerCog,
		levelMin: "BEGINNER",
	},

	// Nível Intermediate
	{
		title: "Conhecimento em Testes Automatizados",
		description: "Capacidade de escrever testes unitários e de integração",
		icon: CheckCircle,
		levelMin: "INTERMEDIATE",
	},
	{
		title: "Documentação de Código",
		description: "Capacidade de criar e manter documentação técnica detalhada",
		icon: Book,
		levelMin: "INTERMEDIATE",
	},
	{
		title: "Proatividade",
		description:
			"Sugerir melhorias contínuas no código e processos de desenvolvimento",
		icon: Lightbulb,
		levelMin: "INTERMEDIATE",
	},

	// Nível Advanced
	{
		title: "Arquitetura de Microserviços",
		description:
			"Experiência em projetar e implementar sistemas baseados em microserviços",
		icon: Layers,
		levelMin: "ADVANCED",
	},
	{
		title: "Escalabilidade e Performance",
		description:
			"Capacidade de otimizar sistemas para alta performance e escalabilidade",
		icon: TrendingUp,
		levelMin: "ADVANCED",
	},
	{
		title: "Automação de Deploy",
		description:
			"Configuração de pipelines CI/CD para automação de integração contínua e deploy",
		icon: Activity,
		levelMin: "ADVANCED",
	},
];
