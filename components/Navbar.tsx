import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto">
      <div className="text-2xl font-display font-medium tracking-tight">Docthea</div>
      <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
        <Link href="#" className="text-slate-900 font-medium">Home</Link>
        <Link href="#" className="hover:text-slate-900 transition-colors">About</Link>
        <Link href="#" className="hover:text-slate-900 transition-colors">Care service</Link>
      </div>
      <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
        Consult now
      </button>
    </nav>
  );
}
