import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
	name: string;
	responsibility: string;
	avatar: string;
	tech: string[];
}

export function TeamMemberCard({
	avatar,
	name,
	responsibility,
	tech,
}: TeamMemberCardProps) {
	return (
		<div className="flex items-start p-4 space-x-4 rounded-lg bg-zinc-900/50">
			<img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
			<div>
				<h3 className="font-medium text-white">{name}</h3>
				<p className="mb-2 text-sm text-zinc-400">{responsibility}</p>
				<div className="flex flex-wrap gap-2">
					{tech.map((t) => (
						<Badge key={t}>{t}</Badge>
					))}
				</div>
			</div>
		</div>
	);
}
