import Features from "@/components/Sections/FeaturesTabs";
import FeatureCardsDiv from "@/components/Sections/FeatureCardsDiv";
import Gallery from "@/components/Home/Gallery";
import Hero from "@/components/Home/Hero";
import ContactPage from "@/components/Home/contacto";

import { featuresProps } from "@/data/certificados";
import { servicesProps } from "@/data/servicios";
import LogosClientes from "@/components/logos-07/logosClientes";




export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureCardsDiv {...servicesProps} />
      <Gallery />
      <Features {...featuresProps} />
      <ContactPage />
      <LogosClientes />

    </div>
  );
}
