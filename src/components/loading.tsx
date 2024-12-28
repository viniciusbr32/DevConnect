import { Loader2 } from "lucide-react";

interface LoadingProps {
	size?: number;
	className?: string;
}

export function Loading({ size = 24, className = "" }: LoadingProps) {
	return (
		<div className="flex items-center justify-center">
			<Loader2
				size={size}
				className={`animate-spin text-primary ${className}`}
			/>
		</div>
	);
}
