import { Loading } from "@/components/loading";
import { type Skills, useUserDetails } from "@/hooks/api/getUserDetails";
import { type LoginResponse, useLoginUser } from "@/hooks/api/useLoginUser";
import { getItem, removeItem, setItem } from "@/lib/storage";
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
	skills: Skills[];
}

interface AuthContextData {
	user: UserDetails | null;
	login: (user: UserLogin) => Promise<LoginResponse>;
	signOut: () => void;
	isAuthenticated: boolean;
	loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<UserDetails | null>(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const token = getItem("authToken") as string;

	const { data, error, isLoading } = useUserDetails(token);
	const { mutateAsync: userLogin } = useLoginUser();

	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (data) {
			setUser(data);
		}
		if (error) {
			setUser(null);
			removeItem("authToken");
		}

		setLoading(false);
	}, [data, error, isLoading]);

	const login = async (user: UserLogin): Promise<LoginResponse> => {
		const response = await userLogin(user);
		setItem("authToken", response.token);
		return response;
	};

	const signOut = () => {
		setUser(null);
		removeItem("authToken");
		navigate("/signin");
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				signOut,
				isAuthenticated: !!user,
				loading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
