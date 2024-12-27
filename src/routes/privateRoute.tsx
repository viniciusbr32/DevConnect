import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
	const isAutheticated = localStorage.getItem("authToken");

	if (!isAutheticated) {
		return <Navigate to="/signin" />;
	}

	return <Outlet />;
}
