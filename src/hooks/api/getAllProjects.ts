import { api } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

interface Technologies {
	id: string;
	name: string;
}

interface ProjectRequest {
	level: string;
	title: string;
	description: string;
	requiredMember: number;
	technologies: Technologies[];
	id: string;
	createdAt: string;
	banner: string;
}

async function fetchProjects(): Promise<ProjectRequest[]> {
	const response = await api.get("/projects");
	return response.data;
}

export const useFetchProject = () => {
	return useQuery<ProjectRequest[], Error>({
		queryKey: ["get-projects"],
		queryFn: () => fetchProjects(),
		retry: false,
	});
};
