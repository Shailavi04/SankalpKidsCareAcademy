import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Welcome from "@/components/Welcome";
import Facilities from "@/components/Facilities";
import Principal from "@/components/Principal";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <Stats />
      <Welcome />
      <Facilities />
      <Principal />
      <Testimonials />
      <News/>
      <CTA />
    </main>
  );
} 