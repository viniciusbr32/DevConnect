import { features } from '@/constantes/features';

export function FeatureCard() {
  return (
    <>
      {features.map((feature) => (
        <div
          className="p-8 transition-colors border bg-zinc-800 rounded-xl border-zinc-700 hover:border-emerald-500/50"
          key={feature.title}
        >
          <div className="w-8 h-8 mb-2 text-emerald-500">
            <feature.icon />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
          <p className="text-zinc-400">{feature.description}</p>
        </div>
      ))}
    </>
  );
}
