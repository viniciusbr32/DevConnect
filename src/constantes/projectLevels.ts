export type ProjectLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export const PROJECT_LEVELS: {
	value: ProjectLevel;
	label: string;
	description: string;
}[] = [
	{
		value: "BEGINNER",
		label: "Iniciante",
		description: "Ideal para desenvolvedores iniciando na área",
	},
	{
		value: "INTERMEDIATE",
		label: "Intermediário",
		description: "Para desenvolvedores com experiência moderada",
	},
	{
		value: "ADVANCED",
		label: "Avançado",
		description: "Projetos complexos para desenvolvedores experientes",
	},
];
