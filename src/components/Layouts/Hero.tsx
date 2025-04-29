import React from "react";

const Hero: React.FC = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/Fondo.png')", // Replace with the correct path to the image
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Bienvenido a Nema Ingeniería
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                    Construyendo el futuro con innovación, calidad y compromiso.
                </p>
            </div>
        </div>
    );
};

export default Hero;
