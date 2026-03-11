import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import StatsAndServices from '@/components/StatsAndServices';
import VideoSection from '@/components/VideoSection';
import CTAAndFooter from '@/components/CTAAndFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <BentoGrid />
      <StatsAndServices />
      <VideoSection />
      <CTAAndFooter />
    </main>
  );
}
