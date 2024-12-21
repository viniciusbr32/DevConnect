import { NavLink } from '@/components/navLink';
import { Button } from '@/components/ui/button';
import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b bg-zinc-900 border-zinc-800">
      <nav className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-emerald-500" />
          <span className="text-xl font-bold text-white">DevConnect</span>
        </div>
        <div className="items-center hidden gap-6 sm:flex">
          <NavLink href="#projetos">Projetos</NavLink>
          <NavLink href="#como-funciona">Como Funciona</NavLink>
          <Button size="lg" className="py-2 text-white transition-colors rounded-md bg-emerald-600 hover:bg-emerald-700">
            Entrar
          </Button>
        </div>
      </nav>
    </header>
  );
}
