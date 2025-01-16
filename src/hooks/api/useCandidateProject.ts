import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "../use-toast";

interface Candidate {
	userId: string;
	projectId: string;
}

export function useCandidateProject() {
	const mutation = useMutation({
		mutationFn: async (candidateData: Candidate) => {
			try {
				const token = localStorage.getItem("authToken");
				const response = await api.post("/candidate", candidateData, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				return response.data;
			} catch (error: unknown) {
				if (axios.isAxiosError(error)) {
					throw new Error(error.response?.data.error);
				}
				throw new Error("erro desconhecido");
			}
		},
		onSuccess: () => {
			toast({
				variant: "sucess",
				description: "Candidatura Enviada com sucesso",
				duration: 500,
			});
		},
		onError: (error: Error) => {
			toast({
				description: error.message,
				duration: 800,
				variant: "destructive",
			});
		},
	});
	return mutation;
}
