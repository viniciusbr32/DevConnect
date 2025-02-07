import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import GerenciamentoCandidaturas from "../userManagementModal";
import { useState } from "react";

interface TeamProps {
	status: "ACCEPTED" | "REJECTED" | "PENDING";
	id: string;
	user: {
		name: string;
		id: string;
		role: string;
		avatar: string;
	};
}

interface TeamManagementProps {
	team: TeamProps[];
	requiredMember: number;
	diferenceDays: string;
}

export function TeamManagement({
	team,
	diferenceDays,
	requiredMember,
}: TeamManagementProps) {
	const [modalOpen, setModalOpen] = useState(false);

	const acceptedApplications = team
		.filter((application) => application.status === "ACCEPTED")
		.map((application) => application);

	const rejectedApplications = team
		.filter((application) => application.status === "PENDING")
		.map((application) => application);

	return (
		<>
			<div className="p-6 border rounded-lg bg-zinc-800 border-zinc-700">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-lg font-semibold text-white">
						Equipe do Projeto
					</h2>

					<Button
						variant="outline"
						className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
						onClick={() => setModalOpen(true)}
					>
						<Users className="w-4 h-4 mr-2" />
						Gerenciar Time
					</Button>
				</div>

				<div className="space-y-4">
					{acceptedApplications.map((member) => (
						<div
							className="flex items-center justify-between p-3 rounded-lg bg-zinc-700/50"
							key={member.user.id}
						>
							<div className="flex items-center space-x-3">
								<div className="relative">
									<img
										src={`http://localhost:3000/files/${member.user.avatar}`}
										alt={member.user.name}
										className="w-10 h-10 rounded-full"
									/>
								</div>
								<div>
									<h3 className="font-medium text-white">{member.user.name}</h3>
									<p className="text-sm text-zinc-400">{member.user.role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<GerenciamentoCandidaturas
				open={modalOpen}
				setOpen={() => setModalOpen(!modalOpen)}
				acceptedApplication={acceptedApplications}
				candidatures={rejectedApplications}
				diferenceDays={diferenceDays}
				requiredMember={requiredMember}
			/>
		</>
	);
}
