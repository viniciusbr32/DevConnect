interface FeaturedProjects {
	id: string;
	title: string;
	description: string;
	tech: string[];
	teamSize: number;
	postedDate: string;
	imageUrl: string;
}

export const featuredProjects: FeaturedProjects[] = [
	{
		id: "finance-app",
		title: "App de Gestão Financeira",
		description:
			"Desenvolvimento de uma aplicação web para controle de finanças pessoais com React e Node.js. O projeto visa criar uma interface intuitiva para usuários gerenciarem suas finanças, com recursos como categorização de gastos, relatórios detalhados e planejamento financeiro.",
		tech: ["React", "Node.js", "MongoDB"],
		teamSize: 3,
		postedDate: "Há 2 dias",
		imageUrl:
			"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: "education-platform",
		title: "Plataforma de Educação Online",
		description:
			"Criação de uma plataforma de cursos online com sistema de videoaulas e exercícios. A plataforma permitirá que instrutores criem e gerenciem cursos, enquanto os alunos podem acessar o conteúdo de forma organizada e interativa.",
		tech: ["Vue.js", "Python", "PostgreSQL"],
		teamSize: 4,
		postedDate: "Há 5 dias",
		imageUrl:
			"https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: "iot-agriculture",
		title: "Sistema de IoT para Agricultura",
		description:
			"Desenvolvimento de sistema para monitoramento de plantações usando sensores IoT. O projeto inclui uma dashboard para visualização de dados em tempo real e um sistema de alertas para condições críticas.",
		tech: ["React", "TypeScript", "AWS"],
		teamSize: 3,
		postedDate: "Há 1 semana",
		imageUrl:
			"https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
	},
];
