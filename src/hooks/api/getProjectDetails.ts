import { api } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

interface Technology {
	id: string;
	name: string;
}

interface CreatedBy {
	name: string;
}

interface Project {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	applications: any[]; // Pode ser especificado mais tarde com os detalhes das aplicações
	title: string;
	technologies: Technology[];
	description: string;
	requiredMember: number;
	createdBy: CreatedBy;
	createdAt: string;
	web_site: string;
	url_github: string;
	level: string;
}

async function fetchProjectDetails(id: string): Promise<Project> {
	const response = await api.get(`/project/${id}`);
	return response.data;
}

export const useFetchProjectDetails = (id: string) => {
	return useQuery<Project, Error>({
		queryKey: ["get-projectsDetails"],
		queryFn: () => fetchProjectDetails(id),
		retry: false,
		enabled: !!id,
	});
};
