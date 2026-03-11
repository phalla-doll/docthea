import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Youtube } from 'lucide-react';

export default function CTAAndFooter() {
  return (
    <footer className="px-4 md:px-8 max-w-7xl mx-auto mt-24 mb-12">
      {/* CTA Section */}
      <div className="bg-[#fdf2f0] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between mb-24 relative overflow-hidden">
        <div className="md:w-1/2 z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-slate-900 mb-8 leading-tight">
            What benefits do<br/>you get?
          </h2>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
            Consult now <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="md:w-1/2 mt-16 md:mt-0 relative h-72 w-full z-10 flex justify-end">
          {/* Floating cards */}
          <div className="absolute top-0 left-0 md:left-10 bg-[#ffe8e5] rounded-2xl p-5 shadow-sm transform -rotate-6 w-56 z-20 border border-white">
            <span className="text-[10px] font-medium text-slate-500 mb-3 block">Docthea</span>
            <h4 className="text-sm font-display font-medium text-slate-900 mb-3">Our speciality<br/>doctors</h4>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-white/60"></div>
              <div className="w-8 h-8 rounded-full bg-white/60"></div>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-10 md:right-32 bg-white rounded-2xl p-5 shadow-md transform rotate-3 w-56 z-30 border border-slate-50">
            <p className="text-sm font-medium text-slate-900">Connect with our professional doctors</p>
          </div>
          
          <div className="absolute top-4 right-0 md:right-10 w-48 h-60 rounded-2xl overflow-hidden transform rotate-6 shadow-sm border-4 border-white z-10">
            <Image src="https://picsum.photos/seed/yoga2/300/400" alt="Yoga" fill className="object-cover" referrerPolicy="no-referrer" />
            <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-slate-900" />
            </div>
            <div className="absolute bottom-3 left-3 text-white text-sm font-display font-medium">Relaxing yoga</div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div>
          <h4 className="font-display font-medium text-slate-900 mb-6">Createstudio</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Features</Link></li>
            <li><Link href="#" className="hover:text-slate-900 transition-colors">What can you create?</Link></li>
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Updates</Link></li>
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Tutorials</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-medium text-slate-900 mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Support</Link></li>
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Affiliates</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-medium text-slate-900 mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Terms</Link></li>
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Acceptable Use</Link></li>
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Cookie Policy</Link></li>
            <li><Link href="#" className="hover:text-slate-900 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-medium text-slate-900 mb-6">Get in touch</h4>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
              <Youtube className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-10">
        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-medium text-slate-900 tracking-tighter leading-none">Docthea</h2>
      </div>
    </footer>
  );
}
