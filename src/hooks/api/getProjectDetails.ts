import { api } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

interface Technology {
	id: string;
	name: string;
}

interface CreatedBy {
	name: string;
	role: string;
	avatar: string;
}

interface Skills {
	name: string;
}

interface Application {
	user: {
		name: string;
		skills: Skills[];
		role: string;
		avatar: string;
	};
}

interface Project {
	applications: Application[];
	_count: {
		applications: number;
	};
	title: string;
	technologies: Technology[];
	description: string;
	requiredMember: number;
	createdBy: CreatedBy;
	createdAt: string;
	web_site: string;
	url_github: string;
	level: string;
	remainingSpots: number;
	banner: string;
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
