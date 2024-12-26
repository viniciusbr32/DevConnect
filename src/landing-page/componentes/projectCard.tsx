import { Badge } from '@/components/ui/badge';
import { featuredProjects } from '@/constantes/featuredProjects';
import { Users, Calendar } from 'lucide-react';

import { Link } from 'react-router-dom';

export function ProjectCard() {
  return (
    <>
      {featuredProjects.map((project) => (
        <Link key={project.id} to={`/project/${project.id}`}>
          <div className="transition-all border rounded-lg bg-zinc-800 border-zinc-700 hover:border-emerald-500/50">
            <img src={project.imageUrl} alt={project.title} className="object-cover w-full h-48 rounded-t-lg" />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mb-4 text-zinc-400 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge className="text-zinc-300 bg-emerald-500 hover:bg-emerald-700" key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-zinc-400">
                <div className="flex items-center space-x-2">
                  <Users size={16} className="text-emerald-500" />
                  <span>{project.teamSize} devs necessários</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-emerald-500" />
                  <span>{project.postedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
