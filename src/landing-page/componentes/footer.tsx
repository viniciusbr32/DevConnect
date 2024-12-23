import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t bg-zinc-900 border-zinc-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-6 h-6 text-emerald-500" />
              <span className="text-lg font-bold text-white">DevConnect</span>
            </div>
            <p className="text-zinc-400">Conectando desenvolvedores e transformando ideias em realidade.</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Plataforma</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-emerald-500">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-emerald-500">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-emerald-500">
                  Para Empresas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-emerald-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-emerald-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-emerald-500">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-emerald-500">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-500">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-500">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center border-t border-zinc-800 text-zinc-400">
          <p>&copy; {new Date().getFullYear()} DevConnect. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
