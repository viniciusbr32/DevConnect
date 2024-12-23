import { TestimonialsCard } from './testimonialsCard';

export function Testimonial() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">O que dizem sobre nós</h2>
          <p className="text-xl text-zinc-400">Histórias de sucesso de quem já faz parte da nossa comunidade</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <TestimonialsCard />
        </div>
      </div>
    </section>
  );
}
