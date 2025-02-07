import { api } from "@/api/api";
import { getItem } from "@/lib/storage";
import { useQuery } from "@tanstack/react-query";

interface User {
	name: string;
	id: string;
	role: string;
	avatar: string;
}

interface Application {
	user: User;
	status: "ACCEPTED" | "REJECTED" | "PENDING";
	id: string;
}

interface Milestone {
	id: string;
	name: string;
	deadline: string;
	status: "PENDING" | "COMPLETED";
}

export interface Project {
	createdAt: string;
	title: string;
	milestones: Milestone[];
	requiredMember: number;
	applications: Application[];
	deadline: string;
	status: string;
}

async function fetchProjectOverview(id: string): Promise<Project> {
	const token = getItem("authToken");
	const response = await api.get(`/project/overview/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
}

export const useFetchProjectOverview = (id: string) => {
	return useQuery<Project, Error>({
		queryKey: ["get-projectOverview"],
		queryFn: () => fetchProjectOverview(id),
		retry: false,
		enabled: !!id,
	});
};
