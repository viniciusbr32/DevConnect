import type React from 'react';

interface ProjectRequirementProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ProjectRequirement({ icon, title, description }: ProjectRequirementProps) {
  return (
    <div className="flex items-start p-4 space-x-4 rounded-lg bg-zinc-900/50">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="mb-1 font-medium text-white">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
