import { testimonials } from '@/constantes/testimonials';

export function TestimonialsCard() {
  return (
    <>
      {testimonials.map((testimonial) => (
        <div className="p-6 border bg-zinc-800 rounded-xl border-zinc-700" key={testimonial.author}>
          <p className="mb-6 text-zinc-300">{testimonial.content}</p>
          <div className="flex items-center gap-4">
            <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-medium text-white">{testimonial.author}</h4>
              <p className="text-sm text-zinc-400">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
