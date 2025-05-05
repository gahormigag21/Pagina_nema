import Faq from "@/components/Sections/Faq";
import Politicas from "@/components/about/Politicas"; // Import the Politicas component
import Mision from "@/components/about/Mision"; // Import the Politicas component
import Valores from "@/components/about/Valores";


function About() {
    return (
        <div className="bg-linear-to-t/oklch from-secondary/50 from-50% to-primary/30">
            <div className="container mx-auto px-4 py-8 space-y-12 ">
            
                <Mision />
                <Politicas />
                <Valores />
                <Faq heading="Preguntas Frecuentes" />
            </div>
        </div>
    );
}

export default About;