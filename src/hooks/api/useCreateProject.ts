import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface Project {
	title: string;
	deadline: string;
	description: string;
	level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
	technologies: string[];
	user_id: string;
	web_site: string;
	url_github: string;
	required_member: number;
}

export function useCreateProject() {
	const mutation = useMutation({
		mutationFn: async (projectData: Project) => {
			try {
				const token = localStorage.getItem("authToken");
				const response = await api.post("/project", projectData, {
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
