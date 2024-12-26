import { AlertCircle } from 'lucide-react';

interface ErrorProps {
  message: string | undefined;
}

export function Errors({ message }: ErrorProps) {
  return (
    <div className="flex items-center gap-2 mt-1 text-sm text-red-400">
      <AlertCircle className="w-4 h-4" />
      <span className="capitalize">{message}</span>
    </div>
  );
}
