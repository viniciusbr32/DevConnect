interface Testimonials {
	content: string;
	author: string;
	role: string;
	avatar: string;
	id: number;
}

export const testimonials: Testimonials[] = [
	{
		id: 1,
		content:
			"Através da plataforma, encontrei desenvolvedores talentosos que ajudaram a transformar minha ideia em realidade.",
		author: "Ana Silva",
		role: "Fundadora da TechStart",
		avatar:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
	},
	{
		id: 2,
		content:
			"A colaboração com outros devs me permitiu crescer profissionalmente e criar projetos incríveis.",
		author: "Carlos Santos",
		role: "Desenvolvedor Full Stack",
		avatar:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
	},
	{
		id: 3,
		content:
			"Uma plataforma incrível para encontrar projetos desafiadores e expandir meu portfólio.",
		author: "Marina Costa",
		role: "UX Designer",
		avatar:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
	},
];
