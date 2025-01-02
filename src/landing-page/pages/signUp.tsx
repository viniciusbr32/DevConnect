import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Errors } from "../componentes/errors";

import { useRegisterUser } from "@/hooks/api/useRegisterUser";
import { emailRegex } from "@/utils/validators";
import { Loading } from "@/components/loading";

interface SignupRequest {
	name: string;
	email: string;
	password: string;
}

export function SignUp() {
	const mutation = useRegisterUser();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<SignupRequest>();

	const handleRegister = (data: SignupRequest) => {
		const { name, email, password } = data;
		mutation.mutate({ name, email, password });
	};

	return (
		<div className="flex items-center justify-center min-h-screen px-4 bg-zinc-900">
			<div className="w-full max-w-md p-8 border rounded-lg bg-zinc-800 border-zinc-700">
				<h2 className="mb-6 text-2xl font-bold text-center text-white">
					Criar uma conta
				</h2>

				<form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
					<div className="space-y-2">
						<Label htmlFor="name" className="text-gray-300">
							Nome Completo
						</Label>
						<Input
							{...register("name", {
								required: "O Nome é obrigatorio",
								minLength: {
									value: 5,
									message: "é necessario ter pelo menos 5 caracteres",
								},
							})}
							type="text"
							id="name"
							className="text-white"
						/>
						{errors.name && <Errors message={errors.name.message} />}
					</div>

					<div className="space-y-2">
						<Label htmlFor="email" className="text-gray-300">
							Email
						</Label>
						<Input
							{...register("email", {
								required: "O Email é obrigatorio",
								pattern: {
									value: emailRegex,
									message: "Digite um email válido",
								},
							})}
							type="email"
							id="email"
							className="text-white"
						/>
						{errors.email && <Errors message={errors.email.message} />}
					</div>

					<div className="space-y-2">
						<Label htmlFor="password" className="text-gray-300">
							Senha
						</Label>
						<Input
							{...register("password", {
								required: "É obrigatorio ter uma senha",
								minLength: {
									value: 5,
									message: "A senha deve ter no minimos 5 caracteres",
								},
							})}
							type="password"
							id="password"
							className="text-white"
						/>
						{errors.password && <Errors message={errors.password.message} />}
					</div>

					{mutation.isError && <Errors message={mutation.error?.message} />}

					<Button
						variant="default"
						type="submit"
						className="w-full bg-emerald-500 hover:bg-emerald-600"
						disabled={mutation.isPending}
					>
						{mutation.isPending ? <Loading /> : "Registrar"}
					</Button>
				</form>

				<div className="mt-6 text-center">
					<Link
						to="/signin"
						className="text-emerald-500 hover:text-emerald-400"
					>
						Já tem uma conta? Entre aqui
					</Link>
				</div>
			</div>
		</div>
	);
}
