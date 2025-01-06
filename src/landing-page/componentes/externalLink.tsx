import type { LucideIcon } from "lucide-react";

interface ExternalLinkProps {
	url: string;
	title: string;
	IconComponent: LucideIcon;
}

export function ExternalLink({ url, title, IconComponent }: ExternalLinkProps) {
	const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
	return (
		<a
			href={formattedUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="text-zinc-400 hover:text-emerald-500"
			title={title}
		>
			<IconComponent className="w-6 h-6" />
		</a>
	);
}
