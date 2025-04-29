import Faq from "@/components/about/Faq";
import Politicas from "@/components/about/Politicas"; // Import the Politicas component
import Mision from "@/components/about/Mision"; // Import the Politicas component


function About() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-12">
            
            <Mision />

            <Politicas />

            <Faq heading="Preguntas Frecuentes" />

        </div>
    );
}

export default About;