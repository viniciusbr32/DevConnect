import { featuredProjects } from '@/constantes/featuredProjects';
import { Link, useParams } from 'react-router-dom';
import { NotProject } from '../componentes/notProject';
import { Button } from '@/components/ui/button';
import { TeamMemberCard } from '../componentes/teamMemberCard';
import { ArrowLeft, Calendar, Code2, Github, Globe, MessageSquare, Rocket, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ProjectRequirement } from '../componentes/projectRequirement';

export function ProjectDetails() {
  const { id } = useParams();

  const project = featuredProjects.find((project) => project.id === id);

  return (
    <>
      {!project && <NotProject />}
      {project && (
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center mb-8 text-emerald-500 hover:text-emerald-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para projetos
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Coluna Principal */}
            <div className="space-y-6 lg:col-span-2">
              <div className="overflow-hidden border bg-zinc-800 rounded-xl border-zinc-700">
                <img src={project.imageUrl} alt={project.title} className="object-cover w-full h-96" />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-white">{project.title}</h1>
                    <div className="flex items-center space-x-4">
                      {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a href="#" className="text-zinc-400 hover:text-emerald-500" title="Github">
                        <Github className="w-6 h-6" />
                      </a>
                      {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a href="#" className="text-zinc-400 hover:text-emerald-500" title="Website">
                        <Globe className="w-6 h-6" />
                      </a>
                    </div>
                  </div>

                  <p className="mb-6 text-lg text-zinc-400">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
                    <div className="p-4 rounded-lg bg-zinc-900/50">
                      <div className="flex items-center mb-2 text-zinc-400">
                        <Users className="w-5 h-5 mr-2 text-emerald-500" />
                        <span className="font-medium">Tamanho da Equipe</span>
                      </div>
                      <p className="text-white">{project.teamSize} desenvolvedores necessários</p>
                    </div>

                    <div className="p-4 rounded-lg bg-zinc-900/50">
                      <div className="flex items-center mb-2 text-zinc-400">
                        <Calendar className="w-5 h-5 mr-2 text-emerald-500" />
                        <span className="font-medium">Status</span>
                      </div>
                      <p className="text-white">Publicado {project.postedDate}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-white">Requisitos</h2>
                    <div className="space-y-4">
                      <ProjectRequirement
                        icon={<Code2 className="w-5 h-5 text-emerald-500" />}
                        title="Experiência Necessária"
                        description="Mínimo de 2 anos de experiência com as tecnologias principais do projeto"
                      />
                      <ProjectRequirement
                        icon={<MessageSquare className="w-5 h-5 text-emerald-500" />}
                        title="Comunicação"
                        description="Disponibilidade para reuniões semanais e comunicação ativa no Discord"
                      />
                      <ProjectRequirement
                        icon={<Rocket className="w-5 h-5 text-emerald-500" />}
                        title="Comprometimento"
                        description="Dedicação de pelo menos 10 horas semanais ao projeto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border bg-zinc-800 rounded-xl border-zinc-700">
                <h2 className="mb-6 text-xl font-semibold text-white">Equipe Atual</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
                  <TeamMemberCard
                    name="Maria Silva"
                    role="Tech Lead"
                    avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
                    tech={['React', 'Node.js']}
                  />
                  {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
                  <TeamMemberCard
                    name="João Santos"
                    role="Frontend Developer"
                    avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150&q=80"
                    tech={['React', 'TypeScript']}
                  />
                </div>
              </div>
            </div>

            {/* Coluna Lateral */}
            <div className="space-y-6">
              <div className="p-6 border bg-zinc-800 rounded-xl border-zinc-700">
                <h2 className="mb-4 text-xl font-semibold text-white">Candidatar-se</h2>
                <p className="mb-6 text-zinc-400">
                  Interessado em participar deste projeto? Candidate-se agora e faça parte desta equipe incrível!
                </p>
                <Button variant="secondary" className="w-full text-white bg-emerald-600">
                  Candidatar-se ao Projeto
                </Button>
              </div>

              <div className="p-6 border bg-zinc-800 rounded-xl border-zinc-700">
                <h2 className="mb-4 text-xl font-semibold text-white">Líder do Projeto</h2>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
                    alt="Maria Silva"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-white">Maria Silva</h3>
                    <p className="text-sm text-zinc-400">Tech Lead</p>
                  </div>
                </div>
                <Button variant="secondary" className="w-full mt-4 text-white bg-emerald-600">
                  Enviar Mensagem
                </Button>
              </div>

              <div className="p-6 border bg-zinc-800 rounded-xl border-zinc-700">
                <h2 className="mb-4 text-xl font-semibold text-white">Estatísticas</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Candidaturas</span>
                    <span className="font-medium text-white">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Vagas Restantes</span>
                    <span className="font-medium text-white">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Visualizações</span>
                    <span className="font-medium text-white">245</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
