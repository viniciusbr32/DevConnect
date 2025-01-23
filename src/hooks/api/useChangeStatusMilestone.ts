import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface StatusMilestone {
	milestoneId: string;
	status: string;
}

export function useChangeStatusMilestone() {
	const mutation = useMutation({
		mutationFn: async (milestoneData: StatusMilestone) => {
			try {
				const token = localStorage.getItem("authToken");
				const response = await api.post("/milestone", milestoneData, {
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
			console.log("Deu certo");
		},
		onError: (error: Error) => {
			console.log(error.message);
		},
	});
	return mutation;
}
