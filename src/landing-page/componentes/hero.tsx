import { Button } from '@/components/ui/button';
import { Highlights } from './highlightsList';

export function Hero() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full bg-emerald-500/10">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-medium text-emerald-400">De Dev para Dev</span>
          </div>

          <h1 className="mb-8 text-4xl font-bold md:text-6xl lg:text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600">
              Conectando Mentes
            </span>
            <br />
          </h1>

          <p className="max-w-3xl mx-auto mb-12 text-xl md:text-2xl text-zinc-400">
            Uma comunidade vibrante onde desenvolvedores se unem para criar, colaborar e evoluir juntos em projetos extraordinários.
          </p>

          <div className="flex flex-col justify-center gap-4 mb-16 sm:flex-row">
            <Button variant="secondary">Iniciar Jornada</Button>
            <Button variant="default">Explorar Projetos</Button>
          </div>
          <Highlights />
        </div>
      </div>
    </div>
  );
}
