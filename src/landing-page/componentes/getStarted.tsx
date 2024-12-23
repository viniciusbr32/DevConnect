import { Button } from '@/components/ui/button';
import { Code2 } from 'lucide-react';

export function GetStarted() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <Code2 className="w-12 h-12 mx-auto mb-6 text-white" />
        <h2 className="mb-4 text-3xl font-bold text-white">Pronto para começar sua jornada?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-xl text-emerald-100">
          Junte-se a milhares de desenvolvedores e comece a criar projetos incríveis hoje mesmo.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="secondary">Criar uma conta</Button>
          <Button variant="default">Saiba mais</Button>
        </div>
      </div>
    </section>
  );
}
