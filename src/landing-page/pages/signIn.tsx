import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Errors } from "../componentes/errors";
import { useLoginUser } from "@/hooks/api/useLoginUser";
import { emailRegex } from "@/utils/validators";
import { Loading } from "@/components/loading";
import { useToast } from "@/hooks/use-toast";

interface LoginRequest {
	email: string;
	password: string;
}

export function SignIn() {
	const { toast } = useToast();
	const mutation = useLoginUser();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<LoginRequest>();

	const handleLoginUser = async (data: LoginRequest) => {
		mutation.mutate(data, {
			onSuccess: () => {
				toast({
					variant: "sucess",
					description: "Login Efetuado com sucesso",
					duration: 500,
				});
			},
		});
	};

	return (
		<div className="flex items-center justify-center min-h-screen px-4 bg-zinc-900">
			<div className="w-full max-w-md p-8 border rounded-lg bg-zinc-800 border-zinc-700">
				<h2 className="mb-6 text-2xl font-bold text-center text-white">
					Entrar na plataforma
				</h2>

				<form className="space-y-4" onSubmit={handleSubmit(handleLoginUser)}>
					<div className="space-y-2">
						<Label htmlFor="email" className="text-gray-300">
							Email
						</Label>
						<Input
							type="email"
							id="email"
							{...register("email", {
								required: "O Email é obrigatorio",
								pattern: {
									value: emailRegex,
									message: "Digite um email válido",
								},
							})}
							className="text-white"
						/>
						{errors.email && <Errors message={errors.email.message} />}
					</div>

					<div className="space-y-2">
						<Label htmlFor="password" className="text-gray-300">
							Senha
						</Label>
						<Input
							type="password"
							id="password"
							className="text-white"
							{...register("password", {
								required: "É obrigatorio ter uma senha",
								minLength: {
									value: 5,
									message: "A senha deve ter no minimos 5 caracteres",
								},
							})}
						/>
						{errors.password && <Errors message={errors.password.message} />}
					</div>

					{mutation.isError && <Errors message={mutation.error.message} />}

					<Button
						variant="default"
						type="submit"
						className="w-full bg-emerald-500 hover:bg-emerald-700"
					>
						{mutation.isPending ? <Loading /> : "Entrar"}
					</Button>
				</form>

				<div className="mt-6 text-center">
					<Link
						to="/signup"
						className="text-emerald-500 hover:text-emerald-400"
					>
						Ainda não tem uma conta? Cadastre-se
					</Link>
				</div>
			</div>
		</div>
	);
}
