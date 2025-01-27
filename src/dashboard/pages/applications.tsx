import { useAuth } from "@/contexts/authContext";
import { ApplicationCard } from "../componentes/applicationCard";
import { DashboardLayout } from "../componentes/dashboardLayout";
import { useFetchCandidates } from "@/hooks/api/getCandidatesUser";

export function Applications() {
	const { user } = useAuth();

	if (!user) return;
	const id = user.id;

	const { data } = useFetchCandidates(id);

	return (
		<DashboardLayout>
			<div className="p-6">
				<h1 className="mb-8 text-2xl font-bold text-white">
					Minhas Candidaturas
				</h1>

				<div className="space-y-4">
					{data?.map((application, index) => (
						<ApplicationCard
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							appliedDate={application.appliedAt}
							projectTitle={application.project.title}
							projectOwner={application.project.createdBy.name}
							status={application.status}
							tech={application.project.technologies.map((tech) => tech.name)}
						/>
					))}
				</div>
			</div>
		</DashboardLayout>
	);
}
