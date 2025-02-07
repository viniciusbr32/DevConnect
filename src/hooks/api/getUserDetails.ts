import { api } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export interface Technology {
	id: string;
	name: string;
}

export interface Project {
	id: string;
	title: string;
	technologies: Technology[];
}

export interface SkillsUser {
	name: string;
}

export interface UserDetails {
	name: string;
	email: string;
	id: string;
	skills: SkillsUser[];
	projects: Project[];
	avatar: string;
}

async function fetchUserDetails(token: string): Promise<UserDetails> {
	const response = await api.get("/me", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
}

export const useUserDetails = (token: string) => {
	return useQuery<UserDetails, Error>({
		queryKey: ["user-details"],
		queryFn: () => fetchUserDetails(token),
		enabled: !!token,
		retry: false,
	});
};
