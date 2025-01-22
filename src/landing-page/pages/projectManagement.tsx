import { DashboardLayout } from "@/dashboard/componentes/dashboardLayout";
import { MilestoneTracker } from "@/dashboard/componentes/projectManagement/milestoneTracker";
import { ProjectOverview } from "@/dashboard/componentes/projectManagement/projectOverview";
import { useFetchProjectOverview } from "@/hooks/api/getProjectOverview";
import { useParams } from "react-router-dom";
import { TeamManagement } from "@/dashboard/componentes/projectManagement/teamManagement";

export function ProjectManagement() {
	const { id } = useParams();

	const { data } = useFetchProjectOverview(id as string);

	if (!data) return;

	return (
		<DashboardLayout>
			<div className="p-6 space-y-6">
				<ProjectOverview
					title={data?.title}
					requiredMember={data?.requiredMember}
					createdAt={data.createdAt}
					deadline={data.deadline}
				/>
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					<MilestoneTracker milestone={data.milestones} />

					<TeamManagement team={data.applications} />
				</div>
				{/* <TaskBoard /> */}
			</div>
		</DashboardLayout>
	);
}
