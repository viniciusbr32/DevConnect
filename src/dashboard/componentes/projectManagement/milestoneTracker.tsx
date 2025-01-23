import { Button } from "@/components/ui/button";
import type { Project } from "@/hooks/api/getProjectOverview";
import { useChangeStatusMilestone } from "@/hooks/api/useChangeStatusMilestone";
import { useToast } from "@/hooks/use-toast";
import { FormatedDate } from "@/utils/formatedData";
import { useQueryClient } from "@tanstack/react-query";
import { Calendar, Check } from "lucide-react";

interface Milestones {
	id: string;
	name: string;
	deadline: string;
	status: "PENDING" | "COMPLETED";
}

interface MilestonesProps {
	milestone: Milestones[];
}

export function MilestoneTracker({ milestone }: MilestonesProps) {
	const { toast } = useToast();
	const mutation = useChangeStatusMilestone();

	const queryClient = useQueryClient();

	const changeStatus = (milestoneId: string, status: string) => {
		const newStatus = status === "COMPLETED" ? "PENDING" : "COMPLETED";

		mutation.mutate(
			{
				milestoneId,
				status: newStatus,
			},
			{
				onSuccess: (_, variables) => {
					toast({
						description: "status Mudado com sucesso",
						duration: 800,
						variant: "sucess",
					});

					const cached = queryClient.getQueryData(["get-projectOverview"]);

					if (cached) {
						queryClient.setQueryData(
							["get-projectOverview"],
							(data: Project) => {
								return {
									...data,
									milestones: data.milestones.map((milestone) =>
										milestone.id === variables.milestoneId
											? { ...milestone, status: newStatus }
											: milestone,
									),
								};
							},
						);
					}
				},
				onError: (error) => {
					toast({
						description: error.message,
						duration: 800,
						variant: "destructive",
					});
				},
			},
		);
	};

	return (
		<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-lg font-semibold text-white">Marcos do Projeto</h2>
			</div>

			<div className="relative">
				<div className="absolute top-0 w-px h-full left-4 bg-zinc-700" />

				<div className="space-y-6">
					{milestone.map((milestone) => (
						<div key={milestone.id} className="relative flex items-center">
							<Button
								className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 transition-colors
                  ${
										milestone.status === "COMPLETED"
											? "bg-emerald-500 border-emerald-500"
											: milestone.status === "PENDING"
												? "bg-zinc-800 border-zinc-700"
												: "bg-zinc-800 border-emerald-500"
									}`}
								onClick={() => changeStatus(milestone.id, milestone.status)}
							>
								{milestone.status === "COMPLETED" && (
									<Check className="w-4 h-4 text-white" />
								)}
							</Button>

							<div className="flex-1 ml-4">
								<div className="flex items-center justify-between">
									<div>
										<h3
											className={`font-medium ${milestone.status === "COMPLETED" ? "text-emerald-500" : "text-white"}`}
										>
											{milestone.name}
										</h3>
										{milestone.status === "COMPLETED" && (
											<span className="text-xs text-emerald-500/70">
												Concluído
											</span>
										)}
									</div>
									<div className="flex items-center text-sm text-zinc-400">
										<Calendar className="w-4 h-4 mr-1" />
										{FormatedDate(milestone.deadline)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
