import { useEffect } from "react";
import { useAuth } from "@/contexts/authContext";
import { Outlet, useNavigate } from "react-router-dom";

export function PrivateRoute() {
	const navigate = useNavigate();
	const { user, loading } = useAuth();

	useEffect(() => {
		if (!loading && !user) {
			navigate("/");
		}
	}, [loading, user, navigate]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return null;
	}

	return <Outlet />;
}
