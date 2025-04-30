import Features from "@/components/Sections/Features";
import Gallery from "@/components/Home/Gallery";
import Hero from "@/components/Home/Hero";

import { featuresProps } from "@/components/Home/featuresProps";

export default function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <Features {...featuresProps} />
    </div>
  );
}
