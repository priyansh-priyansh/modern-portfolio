import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Instructions from "@/components/Instructions";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { Metadata } from 'next'
import { siteMetadata } from './metadata'

export const metadata: Metadata = {
  title: siteMetadata.title,
  openGraph: {
    title: siteMetadata.title,
    // ... other OpenGraph properties
  },
  // ... other metadata
}

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Instructions />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}