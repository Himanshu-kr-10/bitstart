import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import RecentLaunch from '@/components/RecentLaunch';
import ProjectTable from '@/components/ProjectTable';
import { BouncyCardsFeatures } from '@/components/Steps';
import { FeatureGrid } from '@/components/FeatureGrid';

export default function Home() {
  return (
    <main className="flex items-center relative h-auto flex-col w-screen overflow-hidden">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[2%] h-[600px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[2%] h-[600px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] "></div>
      <Hero />
      <RecentLaunch />
      <Projects />
      <ProjectTable />
      <FeatureGrid />
      <BouncyCardsFeatures />
    </main>
  );
}
