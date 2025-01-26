import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "../use-toast";

interface CandidateStatus {
	id: string;
	status: string;
}

export function useCandidateStatus() {
	const mutation = useMutation({
		mutationFn: async (candidateStatusData: CandidateStatus) => {
			try {
				const token = localStorage.getItem("authToken");
				const response = await api.patch(
					"/candidate/status",
					candidateStatusData,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				return response.data;
			} catch (error: unknown) {
				if (axios.isAxiosError(error)) {
					throw new Error(error.response?.data.error);
				}
				throw new Error("erro desconhecido");
			}
		},
		onError: (error: Error) => {
			toast({
				description: error.message,
				duration: 1000,
				variant: "destructive",
			});
		},
	});
	return mutation;
}
