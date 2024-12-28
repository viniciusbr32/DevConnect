import { api } from "@/api/api";
import { setItem } from "@/lib/storage";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginData {
	email: string;
	password: string;
}

interface LoginResponse {
	id: string;
	name: string;
	email: string;
	token: string;
}

export function useLoginUser() {
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: async (userData: LoginData): Promise<LoginResponse> => {
			try {
				const response = await api.post("/session", userData);
				setItem("authToken", response.data.token);
				return response.data;
			} catch (err: unknown) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data.error);
				}
				throw new Error("erro desconhecido");
			}
		},
		onSuccess() {
			navigate("/dashboard");
		},
		onError: (error: Error) => {
			console.log(error);
		},
	});
	return mutation;
}
