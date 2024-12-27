import { useAuth } from "@/contexts/authContext";
export function Dashboard() {
	const { user } = useAuth();

	return <p>Bem vindo ao dashboard {user?.name}</p>;
}
