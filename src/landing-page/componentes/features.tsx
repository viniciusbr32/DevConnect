import { FeatureCard } from './featureCard';

export function Features() {
  return (
    <div className="py-20 bg-zinc-900" id="como-funciona">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white">Como Funciona</h2>
          <p className="mt-4 text-xl text-zinc-400">Três passos simples para começar sua jornada de colaboração</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard />
        </div>
      </div>
    </div>
  );
}
