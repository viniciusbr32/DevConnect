import { api } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export interface Skills {
	name: string;
}

interface MeProps {
	name: string;
	id: string;
	email: string;
	skills: Skills[];
}

async function fetchUserDetails(token: string): Promise<MeProps> {
	const response = await api.get("/me", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
}

export const useUserDetails = (token: string) => {
	return useQuery<MeProps, Error>({
		queryKey: ["user-details"],
		queryFn: () => fetchUserDetails(token),
		enabled: !!token,
		retry: false,
	});
};
