import { highlights } from '@/constantes/highlights';

export function Highlights() {
  return (
    <div className="grid max-w-3xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
      {highlights.map((item) => (
        <div key={item.text} className="flex items-center justify-center gap-3 p-4 border rounded-lg bg-zinc-800/50 border-zinc-700/50">
          <div className="w-5 h-5 text-emerald-500">
            <item.icon />
          </div>
          <span className="text-zinc-300">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
