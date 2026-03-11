import Image from 'next/image';

export default function StatsAndServices() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* 99% Guaranteed */}
          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-6xl font-display font-medium tracking-tighter text-slate-900">99%</h2>
                <span className="border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-500">Guaranteed</span>
              </div>
              <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
                 <Image src="https://picsum.photos/seed/abstract1/400/500" alt="Abstract" fill className="object-cover opacity-60 mix-blend-overlay" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-display font-medium text-slate-900 mb-4 leading-tight">Our Doctor<br/>certified</h3>
              <p className="text-slate-500 leading-relaxed">Don&apos;t worry, our doctorates are guaranteed with certificates and degrees.</p>
            </div>
          </div>

          {/* Very fast and accurate */}
          <div className="bg-[#f8f9fa] rounded-[2rem] p-10 relative overflow-hidden border border-slate-100 min-h-[480px] flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-medium text-slate-900 mb-4 leading-tight max-w-[60%] sm:max-w-sm">Very fast and accurate service with us</h3>
              <p className="text-slate-500 mb-8 max-w-[60%] sm:max-w-sm">We are ready to serve you with pleasure and fast response</p>
            </div>
            
            <div className="space-y-4 max-w-[240px] relative z-10">
              <div className="bg-white rounded-full px-5 py-3.5 flex items-center gap-4 shadow-sm border border-slate-50">
                <span className="font-display font-medium text-slate-900">90%</span>
                <span className="text-sm text-slate-500">Satisfying treatment</span>
              </div>
              <div className="bg-white rounded-full px-5 py-3.5 flex items-center gap-4 shadow-sm border border-slate-50">
                <span className="font-display font-medium text-slate-900">90%</span>
                <span className="text-sm text-slate-500">Happy customer</span>
              </div>
              <div className="bg-white rounded-full px-5 py-3.5 flex items-center gap-4 shadow-sm border border-slate-50">
                <span className="font-display font-medium text-slate-900">100%</span>
                <span className="text-sm text-slate-500">Fast response</span>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[60%] md:w-[50%] h-[65%] max-h-[350px]">
               <Image src="https://picsum.photos/seed/doctor2/600/800" alt="Doctor" fill className="object-cover object-top rounded-tl-[3rem]" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Get all the benefits now */}
          <div className="bg-gradient-to-r from-blue-50 via-pink-50 to-orange-50 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-sm border border-white">
            <h3 className="text-2xl font-display font-medium text-slate-900 mb-6">Get all the benefits now</h3>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              Book now
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Connection with our Doctors */}
          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 flex flex-col items-center text-center h-[550px] justify-center relative overflow-hidden">
            {/* Circular nodes design */}
            <div className="relative w-72 h-72 mb-10">
              <div className="absolute inset-0 border border-slate-100 rounded-full"></div>
              <div className="absolute inset-10 border border-slate-100 rounded-full"></div>
              
              {/* Center image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
                <Image src="https://picsum.photos/seed/docmain/200/200" alt="Main Doctor" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              
              {/* Orbiting images */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image src="https://picsum.photos/seed/doca/100/100" alt="Doctor" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute bottom-1/4 -left-5 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image src="https://picsum.photos/seed/docb/100/100" alt="Doctor" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute top-1/4 -right-5 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image src="https://picsum.photos/seed/docc/100/100" alt="Doctor" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute bottom-0 right-10 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image src="https://picsum.photos/seed/docd/100/100" alt="Doctor" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            
            <h3 className="text-3xl font-display font-medium text-slate-900 mb-4">Connection with<br/>our Doctors</h3>
            <p className="text-slate-500 max-w-sm">Connect with our professional doctors who are ready to help you manage your health with expertise and dedication.</p>
          </div>

          {/* Realtime consultations */}
          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 flex flex-col items-center text-center flex-1">
            <h3 className="text-3xl font-display font-medium text-slate-900 mb-4">Realtime<br/>consultations</h3>
            <p className="text-slate-500 max-w-sm mb-16">Connect with our professional doctors who are ready to help you manage your health.</p>
            
            <div className="relative w-full max-w-md h-56">
              {/* Card 1 */}
              <div className="absolute top-0 right-0 w-[85%] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-left shadow-sm border border-white">
                <h4 className="font-display font-medium text-slate-900 mb-1">Booking your consultation</h4>
                <p className="text-xs text-slate-500 mb-6">More than 80% of our customers</p>
                <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-slate-800 transition-colors">Book now</button>
              </div>
              
              {/* Card 2 */}
              <div className="absolute bottom-0 left-0 w-[85%] bg-white rounded-2xl p-6 text-left shadow-xl shadow-slate-200/50 border border-slate-100 z-10">
                <h4 className="font-display font-medium text-slate-900 mb-5">Check schedule<br/>doctors</h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 relative">
                      <Image src="https://picsum.photos/seed/docamira/100/100" alt="Dr. Amira" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-sm font-medium text-slate-900">Dr. Amira</span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded-md">3 May 2024 • 8-11 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
