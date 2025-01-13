import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "./components/ui/toaster";

export const App = () => (
	<>
		<Toaster />
		<RouterProvider router={router} />
	</>
);
