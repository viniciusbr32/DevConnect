"use client";

import { useState } from "react";
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

type Usuario = {
	id: number;
	nome: string;
	cargo: string;
	avatar: string;
	aceito: boolean;
	dataCandidatura: string;
};

interface ModalProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GerenciamentoCandidaturas({
	open,
	setOpen,
}: ModalProps) {
	const [usuarios, setUsuarios] = useState<Usuario[]>([
		{
			id: 1,
			nome: "Alice Silva",
			cargo: "Designer UX",
			avatar: "/placeholder.svg?height=40&width=40",
			aceito: true,
			dataCandidatura: "25 jan 2025",
		},
		{
			id: 2,
			nome: "Bob Santos",
			cargo: "Desenvolvedor Frontend",
			avatar: "/placeholder.svg?height=40&width=40",
			aceito: false,
			dataCandidatura: "26 jan 2025",
		},
		// ... mais usuários
	]);

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
											3 membros necessários
										</span>
									</div>
									<div className="flex items-center px-3 py-1 rounded-full bg-zinc-800">
										<Clock className="w-4 h-4 mr-2 text-zinc-400" />
										<span className="text-sm text-zinc-300">
											5 dias restantes
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
										{usuarios
											.filter((u) => u.aceito)
											.map((usuario) => (
												<div
													key={usuario.id}
													className="flex items-center justify-between p-4 mb-3 border rounded-lg bg-zinc-800/50 border-zinc-700"
												>
													<div className="flex items-center space-x-4">
														<Avatar>
															<AvatarImage src={usuario.avatar} />
															<AvatarFallback>
																{usuario.nome.charAt(0)}
															</AvatarFallback>
														</Avatar>
														<div>
															<h4 className="font-medium text-zinc-100">
																{usuario.nome}
															</h4>
															<p className="text-sm text-zinc-400">
																{usuario.cargo}
															</p>
														</div>
													</div>
													<Button
														variant="ghost"
														size="sm"
														className="hover:bg-red-500/10 hover:text-red-500"
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
										{usuarios
											.filter((u) => !u.aceito)
											.map((usuario) => (
												<div
													key={usuario.id}
													className="flex items-center justify-between p-4 mb-3 border rounded-lg bg-zinc-800/50 border-zinc-700"
												>
													<div className="flex items-center space-x-4">
														<Avatar>
															<AvatarImage src={usuario.avatar} />
															<AvatarFallback>
																{usuario.nome.charAt(0)}
															</AvatarFallback>
														</Avatar>
														<div>
															<h4 className="font-medium text-zinc-100">
																{usuario.nome}
															</h4>
															<div className="flex items-center space-x-2">
																<span className="text-sm text-zinc-400">
																	{usuario.cargo}
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
														<span className="text-sm text-zinc-500">
															{usuario.dataCandidatura}
														</span>
														<Button
															variant="ghost"
															size="sm"
															className="hover:bg-emerald-500/10 hover:text-emerald-500"
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
