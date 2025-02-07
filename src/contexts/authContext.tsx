import { Loading } from "@/components/loading";
import {
	type Project,
	type SkillsUser,
	useUserDetails,
} from "@/hooks/api/getUserDetails";

import { toast } from "@/hooks/use-toast";
import { getItem, removeItem } from "@/lib/storage";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserDetails {
	name: string;
	email: string;
	id: string;
	skills: SkillsUser[];
	projects: Project[];
	avatar: string;
}

interface AuthContextData {
	user: UserDetails | null;
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

	const signOut = () => {
		setUser(null);
		removeItem("authToken");
		toast({
			description: "Deslogou com sucesso",
			duration: 500,
			variant: "sucess",
		});
		navigate("/");
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<AuthContext.Provider
			value={{
				user,
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
