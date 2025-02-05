import { Link, useParams } from "react-router-dom";
import { NotProject } from "../componentes/notProject";
import { Button } from "@/components/ui/button";
import { TeamMemberCard } from "../componentes/teamMemberCard";
import { ArrowLeft, Calendar, Github, Globe, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectRequirement } from "../componentes/projectRequirement";
import { useFetchProjectDetails } from "@/hooks/api/getProjectDetails";
import image from "../../assets/placeholder.svg";
import { formatPublishedDate } from "@/utils/formatedData";
import { ExternalLink } from "../componentes/externalLink";
import { InfoBlock } from "../componentes/infoBlock";
import { useEffect, useState } from "react";
import { ApplicationModal } from "@/components/modals/ApplicationModal";
import { useCandidateProject } from "@/hooks/api/useCandidateProject";
import { StatsProject } from "../componentes/statsProject";
import { useAuth } from "@/contexts/authContext";

interface CandidateData {
	userId: string;
	projectId: string;
}

export function ProjectDetails() {
	const { isAuthenticated } = useAuth();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const mutation = useCandidateProject();

	const { id } = useParams();

	if (!id) return;

	const { data } = useFetchProjectDetails(id);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	console.log(data?.banner);

	const handleApplicationSubmit = (data: CandidateData) => {
		mutation.mutate(data, {
			onSuccess: () => {
				setIsModalOpen(false);
			},
		});
	};

	return (
		<>
			{!data && <NotProject />}
			{data && (
				<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<Link
						to="/"
						className="inline-flex items-center mb-8 text-emerald-500 hover:text-emerald-400"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Voltar para projetos
					</Link>

					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						{/* Coluna Principal */}
						<div className="space-y-6 lg:col-span-2">
							<div className="overflow-hidden border bg-zinc-800 rounded-xl border-zinc-700">
								<img
									src={`http://localhost:3000/files/${data.banner}`}
									alt={data.title}
									className="object-cover w-full h-96"
								/>

								<div className="p-8">
									<div className="flex flex-wrap items-center justify-between mb-6">
										<h1 className="text-2xl font-bold text-white truncate">
											{data.title}
										</h1>

										<div className="flex items-center space-x-4">
											<ExternalLink
												url={data.url_github}
												title="Github"
												IconComponent={Github}
											/>
											<ExternalLink
												url={data.web_site}
												title="Github"
												IconComponent={Globe}
											/>
										</div>
									</div>

									<p className="mb-6 text-lg text-zinc-400">
										{data.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-8">
										{data.technologies.map((tech) => (
											<Badge key={tech.id}>{tech.name}</Badge>
										))}
									</div>

									<div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
										<InfoBlock
											icon={Users}
											label="Tamanho da equipe"
											value={`  ${data.requiredMember} desenvolvedores necessários`}
										/>

										<InfoBlock
											icon={Calendar}
											label="Status"
											value={formatPublishedDate(data.createdAt)}
										/>
									</div>

									<div className="space-y-6">
										<h2 className="text-xl font-semibold text-white">
											Requisitos
										</h2>
										<div className="space-y-4">
											<ProjectRequirement level={data.level} />
										</div>
									</div>
								</div>
							</div>

							<div className="p-8 border bg-zinc-800 rounded-xl border-zinc-700">
								<h2 className="mb-6 text-xl font-semibold text-white">
									Equipe Atual
								</h2>
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
									{data.applications.map((member) => (
										<TeamMemberCard
											key={member.user.name}
											name={member.user.name}
											responsibility={member.user.role}
											avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
											tech={member.user.skills.map((tech) => tech.name)}
										/>
									))}
								</div>
							</div>
						</div>

						{/* Coluna Lateral */}
						<div className="space-y-6">
							<div className="p-6 border bg-zinc-800 rounded-xl border-zinc-700">
								<h2 className="mb-4 text-xl font-semibold text-white">
									Candidatar-se
								</h2>
								<p className="mb-6 text-zinc-400">
									Interessado em participar deste projeto? Candidate-se agora e
									faça parte desta equipe incrível!
								</p>
								<Button
									variant="secondary"
									className="w-full text-white bg-emerald-600"
									onClick={() => setIsModalOpen(true)}
								>
									Candidatar-se ao Projeto
								</Button>
							</div>

							<div className="p-6 border bg-zinc-800 rounded-xl border-zinc-700">
								<h2 className="mb-4 text-xl font-semibold text-white">
									Líder do Projeto
								</h2>
								<div className="flex items-center space-x-4">
									<img
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
										alt="Maria Silva"
										className="w-12 h-12 rounded-full"
									/>
									<div>
										<h3 className="font-medium text-white">
											{data.createdBy.name}
										</h3>
										<p className="text-sm text-zinc-400">
											{data.createdBy.role}
										</p>
									</div>
								</div>
							</div>

							<StatsProject
								candidates={data._count.applications}
								remainingPositions={data.remainingSpots}
							/>
						</div>
					</div>

					{!isAuthenticated && <p>Faça o login</p>}
					{isAuthenticated && (
						<ApplicationModal
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
							projectTitle={data.title}
							onSubmit={handleApplicationSubmit}
							projectId={id}
						/>
					)}
				</div>
			)}
		</>
	);
}
