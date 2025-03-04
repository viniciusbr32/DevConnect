import { Dashboard } from "@/dashboard/dashboard";
import { Layout } from "@/landing-page/componentes/layout";
import { Home } from "@/landing-page/home";
import { ProjectDetails } from "@/landing-page/pages/projectDetails";
import { SignIn } from "@/landing-page/pages/signIn";
import { SignUp } from "@/landing-page/pages/signUp";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { AuthProvider } from "@/contexts/authContext";
import { CreateProject } from "@/dashboard/pages/createProject";
import { ProjectManagement } from "@/dashboard/pages/projectManagement";
import { Applications } from "@/dashboard/pages/applications";

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<AuthProvider>
				<Layout />
			</AuthProvider>
		),
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/project/:id",
				element: <ProjectDetails />,
			},
		],
	},
	{
		path: "/signin",
		element: <SignIn />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/dashboard",
		element: (
			<AuthProvider>
				<PrivateRoute />
			</AuthProvider>
		),
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: "/dashboard/novo-projeto",
				element: <CreateProject />,
			},
			{
				path: "/dashboard/candidaturas",
				element: <Applications />,
			},
			{
				path: "/dashboard/project/:id/gerenciar",
				element: <ProjectManagement />,
			},
		],
	},
]);
