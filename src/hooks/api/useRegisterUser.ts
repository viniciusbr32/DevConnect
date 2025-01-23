import { api } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface RegisterData {
	name: string;
	email: string;
	password: string;
	role: string;
	skills: string[];
}

interface RegisterResponse {
	message: string;
}

export function useRegisterUser() {
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: async (userData: RegisterData): Promise<RegisterResponse> => {
			try {
				const response = await api.post("/users", userData);
				return response.data;
			} catch (err: unknown) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data.error);
				}
				throw new Error("erro desconhecido");
			}
		},
		onSuccess() {
			navigate("/signin");
		},
		onError: (error: Error) => {
			console.log(error);
		},
	});
	return mutation;
}
