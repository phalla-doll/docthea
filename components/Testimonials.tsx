import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    quote: "The care I received was absolutely phenomenal. The doctors took the time to listen to my concerns and provided a treatment plan that actually worked.",
    doctor: "Dr. Amira",
    image: "https://picsum.photos/seed/patient1/100/100"
  },
  {
    id: 2,
    name: "Michael Chen",
    quote: "Booking an appointment was seamless, and the real-time consultation feature saved me so much time. Highly recommend their professional services.",
    doctor: "Dr. Smith",
    image: "https://picsum.photos/seed/patient2/100/100"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    quote: "I've never felt more comfortable at a medical center. The staff is incredibly friendly, and the facilities are top-notch. Thank you Docthea!",
    doctor: "Dr. Patel",
    image: "https://picsum.photos/seed/patient3/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mt-24 mb-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-medium text-slate-900 mb-4">
          What our patients say
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Read about the experiences of our satisfied patients and the care they received from our dedicated doctors.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8">&quot;{t.quote}&quot;</p>
            </div>
            
            <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden relative bg-slate-100">
                <Image src={t.image} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900">{t.name}</h4>
                <p className="text-sm text-slate-500">Treated by {t.doctor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
