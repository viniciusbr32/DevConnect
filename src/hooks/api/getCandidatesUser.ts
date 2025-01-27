import { api } from "@/api/api";
import { getItem } from "@/lib/storage";
import { useQuery } from "@tanstack/react-query";

interface Technology {
	id: string;
	name: string;
}

interface CreatedBy {
	name: string;
}

interface Project {
	technologies: Technology[];
	title: string;
	createdBy: CreatedBy;
}

type Status = "ACCEPTED" | "PENDING" | "REJECTED";

interface CandidateUser {
	appliedAt: string;
	status: Status;
	project: Project;
}

async function fetchCandidateUser(id: string): Promise<CandidateUser[]> {
	const token = getItem("authToken");
	const response = await api.get(`/candidates/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
}

export const useFetchCandidates = (id: string) => {
	return useQuery<CandidateUser[], Error>({
		queryKey: ["get-candidates"],
		queryFn: () => fetchCandidateUser(id),
		retry: false,
	});
};
