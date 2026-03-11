import Image from 'next/image';
import { Flame } from 'lucide-react';

export default function Hero() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mt-4">
      <div className="bg-[#fdf2f0] rounded-[3rem] p-8 md:p-16 lg:p-20 flex flex-col md:flex-row items-center relative overflow-hidden min-h-[600px]">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative z-10 md:w-1/2 flex flex-col items-start gap-6">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-800 shadow-sm">
            <Flame className="w-4 h-4 text-orange-500" />
            #1 best medical center
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-slate-900 leading-[1.1] tracking-tight">
            The Best Medical<br />and Treatment<br />Center for You
          </h1>
          
          <p className="text-slate-600 text-lg max-w-md leading-relaxed">
            Connect with our professional doctors who are ready to help you manage your health with expertise and dedication.
          </p>
          
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors mt-4">
            Book appointment
          </button>
        </div>
        
        <div className="relative z-10 md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-[3/4]">
            <Image 
              src="https://picsum.photos/seed/doctor1/800/1000" 
              alt="Professional Doctor" 
              fill 
              className="object-cover rounded-[3rem] object-top shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
