import Image from 'next/image';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mt-32 mb-24">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-slate-900 max-w-4xl leading-tight mb-20">
        a video-based service <span className="text-slate-400">that you can watch anytime and anywhere to stay healthy and fit.</span>
      </h2>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
        {/* Circle 1 */}
        <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden group shadow-sm border border-slate-50">
          <Image src="https://picsum.photos/seed/vid1/400/400" alt="Video thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white">
              <Play className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
        
        {/* Circle 2 */}
        <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden group shadow-sm border border-slate-50">
          <Image src="https://picsum.photos/seed/vid2/500/500" alt="Video thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white">
              <Play className="w-6 h-6 fill-current" />
            </div>
          </div>
        </div>

        {/* Small circles cluster */}
        <div className="flex flex-col gap-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden group shadow-sm border border-slate-50">
            <Image src="https://picsum.photos/seed/vid3/300/300" alt="Video thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          </div>
          <div className="flex gap-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden group shadow-sm border border-slate-50">
              <Image src="https://picsum.photos/seed/vid4/200/200" alt="Video thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="relative w-24 h-24 rounded-full overflow-hidden group shadow-sm border border-slate-50">
              <Image src="https://picsum.photos/seed/vid5/200/200" alt="Video thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
        
        {/* Circle 4 */}
        <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden group shadow-sm border border-slate-50">
          <Image src="https://picsum.photos/seed/vid6/600/600" alt="Video thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white">
              <Play className="w-6 h-6 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
