import { useUserDetails } from "@/hooks/api/getUserDetails";
import { useLoginUser } from "@/hooks/api/useLoginUser";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserLogin {
	email: string;
	password: string;
}

interface UserDetails {
	name: string;
	email: string;
	id: string;
}

interface LoginResponse {
	id: string;
	name: string;
	email: string;
	token: string;
}

interface AuthContextData {
	user: UserDetails | null;
	login: (user: UserLogin) => Promise<LoginResponse>;
	signOut: () => void;
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<UserDetails | null>(null);

	const navigate = useNavigate();

	const token = localStorage.getItem("authToken") as string;
	const { data } = useUserDetails(token);
	const { mutateAsync: userLogin } = useLoginUser();

	useEffect(() => {
		if (data) {
			setUser(data);
		}
	}, [data]);

	const login = async (user: UserLogin): Promise<LoginResponse> => {
		const response = await userLogin(user);
		setUser({
			id: response.id,
			name: response.name,
			email: response.email,
		});
		localStorage.setItem("authToken", response.token);
		return response;
	};

	const signOut = () => {
		setUser(null);
		localStorage.removeItem("authToken");
		navigate("/");
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				signOut,
				isAuthenticated: !!user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
