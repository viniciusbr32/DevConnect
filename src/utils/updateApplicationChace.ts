import type { Project } from "@/hooks/api/getProjectOverview";
import type { QueryClient } from "@tanstack/react-query";

export const updateApplicationCache = (
	queryClient: QueryClient,
	id: string,
	status: string,
) => {
	const cached = queryClient.getQueryData<Project>(["get-projectOverview"]);

	if (!cached) return;

	queryClient.setQueryData(["get-projectOverview"], (data: Project) => {
		return {
			...data,
			applications: data.applications.map((application) =>
				application.id === id
					? { ...application, status: status }
					: application,
			),
		};
	});
};
