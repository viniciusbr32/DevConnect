import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserX, UserCheck, Clock, Users } from "lucide-react";
import { FormatDifarenceDays } from "@/utils/formatedData";
import { useCandidateStatus } from "@/hooks/api/useCandidateStatus";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

import { updateApplicationCache } from "@/utils/updateApplicationChace";

interface Usuario {
	status: "ACCEPTED" | "REJECTED" | "PENDING";
	id: string;
	user: {
		id: string;
		name: string;
		role: string;
	};
}

interface ModalProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	acceptedApplication: Usuario[];
	candidatures: Usuario[];
	requiredMember: number;
	diferenceDays: string;
}

export default function GerenciamentoCandidaturas({
	open,
	setOpen,
	acceptedApplication,
	candidatures,
	diferenceDays,
	requiredMember,
}: ModalProps) {
	const { toast } = useToast();
	const mutation = useCandidateStatus();

	const queryClient = useQueryClient();

	const acceptOrRejectCandidate = (
		id: string,
		status: "ACCEPTED" | "REJECTED",
	) => {
		mutation.mutate(
			{
				id,
				status,
			},
			{
				onSuccess: () => {
					toast({
						description: `Candidatura ${status === "ACCEPTED" ? "Aceita" : "Rejeitada"} com sucesso`,
						variant: status === "ACCEPTED" ? "sucess" : "destructive",
						duration: 800,
					});
					updateApplicationCache(queryClient, id, status);
				},
			},
		);
	};

	return (
		<>
			{open && (
				<div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50">
					<Dialog open={open} onOpenChange={setOpen}>
						<DialogContent className="sm:max-w-[600px] bg-zinc-900 border-zinc-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							<DialogHeader>
								<DialogTitle className="text-xl font-semibold text-zinc-100">
									Gerenciamento de Time
								</DialogTitle>
							</DialogHeader>

							<div className="flex items-center justify-between mt-4 mb-6">
								<div className="flex items-center space-x-4">
									<div className="flex items-center px-3 py-1 rounded-full bg-zinc-800">
										<Users className="w-4 h-4 mr-2 text-zinc-400" />
										<span className="text-sm text-zinc-300">
											{requiredMember} membros necessários
										</span>
									</div>
									<div className="flex items-center px-3 py-1 rounded-full bg-zinc-800">
										<Clock className="w-4 h-4 mr-2 text-zinc-400" />
										<span className="text-sm text-zinc-300">
											{FormatDifarenceDays(diferenceDays)} dias restantes
										</span>
									</div>
								</div>
							</div>

							<Separator className="bg-zinc-800" />

							<ScrollArea className="mt-4 max-h-[60vh] pr-4">
								<div className="space-y-6">
									<div>
										<h3 className="mb-3 text-lg font-semibold text-zinc-100">
											Time Atual
										</h3>
										{acceptedApplication.map((usuario) => (
											<div
												key={usuario.user.id}
												className="flex items-center justify-between p-4 mb-3 border rounded-lg bg-zinc-800/50 border-zinc-700"
											>
												<div className="flex items-center space-x-4">
													<Avatar>
														<AvatarImage src="/placeholder.svg?height=40&width=40" />
														<AvatarFallback>
															{usuario.user.name.charAt(0)}
														</AvatarFallback>
													</Avatar>
													<div>
														<h4 className="font-medium capitalize text-zinc-100">
															{usuario.user.name}
														</h4>
														<p className="text-sm capitalize text-zinc-400">
															{usuario.user.role}
														</p>
													</div>
												</div>
												<Button
													variant="ghost"
													size="sm"
													className="hover:bg-red-500/10 hover:text-red-500"
													onClick={() =>
														acceptOrRejectCandidate(usuario.id, "REJECTED")
													}
												>
													<UserX className="w-5 h-5" />
												</Button>
											</div>
										))}
									</div>

									<Separator className="bg-zinc-800" />

									<div>
										<h3 className="mb-3 text-lg font-semibold text-zinc-100">
											Candidaturas
										</h3>
										{candidatures.map((usuario) => (
											<div
												key={usuario.user.id}
												className="flex items-center justify-between p-4 mb-3 border rounded-lg bg-zinc-800/50 border-zinc-700"
											>
												<div className="flex items-center space-x-4">
													<Avatar>
														<AvatarImage src="/placeholder.svg?height=40&width=40" />

														<AvatarFallback>
															{usuario.user.name.charAt(0)}
														</AvatarFallback>
													</Avatar>
													<div>
														<h4 className="font-medium capitalize text-zinc-100">
															{usuario.user.name}
														</h4>
														<div className="flex items-center space-x-2">
															<span className="text-sm text-zinc-400 Capitalize">
																{usuario.user.role}
															</span>
															<Badge
																variant="outline"
																className="text-emerald-500 border-emerald-500/20 bg-emerald-500/10"
															>
																Novo
															</Badge>
														</div>
													</div>
												</div>
												<div className="flex items-center space-x-2">
													<Button
														variant="destructive"
														size="sm"
														className="transition-all hover:bg-red-600"
														onClick={() =>
															acceptOrRejectCandidate(usuario.id, "REJECTED")
														}
													>
														<UserX className="w-5 h-5" />
													</Button>
													<Button
														size="sm"
														className="transition-all hover:bg-emerald-700 bg-emerald-500"
														onClick={() =>
															acceptOrRejectCandidate(usuario.id, "ACCEPTED")
														}
													>
														<UserCheck className="w-5 h-5" />
													</Button>
												</div>
											</div>
										))}
									</div>
								</div>
							</ScrollArea>
						</DialogContent>
					</Dialog>
				</div>
			)}
		</>
	);
}
