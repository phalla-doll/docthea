import Image from 'next/image';
import { ArrowUpRight, Heart, Brain, Activity } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Card 1: Latest visited doctor */}
        <div className="bg-white rounded-[2rem] p-6 flex flex-col justify-between shadow-sm border border-slate-100">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-display font-medium text-slate-900 leading-tight">Latest visited<br/>doctor</h3>
            <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-slate-600" />
            </button>
          </div>
          <div className="mt-8">
            <div className="flex -space-x-3 mb-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-slate-200">
                  <Image src={`https://picsum.photos/seed/doc${i}/100/100`} alt="Doctor" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500">More than 4k doctors at your service</p>
          </div>
        </div>

        {/* Card 2: Our speciality doctors */}
        <div className="bg-[#ffe8e5] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <span className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700 mb-4 relative z-10">Docthea</span>
          <h3 className="text-xl font-display font-medium text-slate-900 mb-6 relative z-10">Our speciality<br/>doctors</h3>
          <div className="flex gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center"><Activity className="w-5 h-5 text-rose-500" /></div>
            <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center"><Heart className="w-5 h-5 text-rose-500" /></div>
            <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center"><Brain className="w-5 h-5 text-rose-500" /></div>
          </div>
        </div>

        {/* Card 3: Connect with professional */}
        <div className="bg-[#f8f9fa] rounded-[2rem] p-8 flex flex-col justify-center items-start border border-slate-100">
          <h3 className="text-2xl font-display font-medium text-slate-900 mb-6 leading-tight">Connect with<br/>our professional<br/>doctors</h3>
          <button className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
            Connect now
          </button>
        </div>

        {/* Card 4: Relaxing yoga */}
        <div className="bg-slate-200 rounded-[2rem] relative overflow-hidden group min-h-[250px]">
          <Image src="https://picsum.photos/seed/yoga/600/800" alt="Relaxing yoga" fill className="object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 text-white transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-white text-lg font-display font-medium mb-3">Relaxing yoga</h3>
            <div className="flex gap-1.5">
              <div className="h-1 flex-1 bg-white rounded-full"></div>
              <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
              <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
