import { Info, Target, Eye } from "lucide-react";


const Mision = () => {
    return (
        <section className="py-32">
            <div className="container">
                <div className="border border-border">
                    <div className="group grid gap-4 overflow-hidden px-6 transition-colors duration-500 ease-out hover:bg-muted/40 lg:grid-cols-2 xl:px-28">
                        <div className="flex flex-col justify-between gap-4 pt-8 md:pt-16 lg:pb-16">
                            <div>
                                <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
                                    <Info className="h-6 w-6 text-primary" />
                                    Sobre Nosotros
                                </h1>
                                <p className="mt-4 text-justify">
                                    Es una Sociedad por Acciones Simplificada; creada el 22 de Marzo
                                    de 2.006, mediante documento privado, inscrito en el libro IX con
                                    el No. 01045348 de la Cámara de Comercio de Bogotá. <br />
                                    NIT. 900 076 133-2. Estamos registrados y clasificados en el Registro Único de
                                    Proponentes (RUP) de la Cámara de Comercio de Bogotá.
                                </p>
                            </div>
                        </div>
                        <div className="relative isolate py-16">
                            <div className="relative isolate h-full border border-border bg-background p-2">
                                <div className="h-full overflow-hidden">
                                    <img
                                        src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                                        alt="placeholder"
                                        className="aspect-[14/9] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-t border-border">
                        <div className="grid lg:grid-cols-2">
                            <div className="group flex flex-col justify-between gap-12 border-border bg-background px-6 py-8 transition-colors duration-500 ease-out hover:bg-muted/40 md:py-16 lg:pb-16 xl:gap-16 xl:border-l xl:pl-8">
                                <div>
                                    <h2 className="text-2xl font-semibold text-center flex items-center justify-center gap-2">
                                        <Target className="h-6 w-6 text-primary" />
                                        Misión
                                    </h2>
                                    <p className="mt-4 text-justify">
                                        <strong>NEMA INGENIERIA S.A.S</strong>, es una empresa orientada a prestar
                                        servicios de ingeniería para dar soluciones a las necesidades de
                                        nuestros clientes del sector de acueducto, alcantarillado, la
                                        ejecución de obras de infraestructura y la fabricación de
                                        accesorios en acero para el transporte de fluidos, cumpliendo
                                        con altos estándares de calidad aplicables.
                                    </p>
                                </div>
                            </div>
                            <div className="group flex flex-col justify-between gap-12 border-t border-border bg-background px-6 py-8 transition-colors duration-500 ease-out hover:bg-muted/40 md:py-16 lg:border-t-0 lg:border-l lg:pb-16 xl:gap-16 xl:border-r xl:pl-8">
                                <div>
                                    <h2 className="text-2xl font-semibold text-center flex items-center justify-center gap-2">
                                        <Eye className="h-6 w-6 text-primary" />
                                        Visión
                                    </h2>
                                    <p className="mt-4 text-justify">
                                        Para el año <strong>2031, NEMA INGENIERIA S.A.S</strong> se proyecta como una
                                        empresa reconocida como <strong>líder</strong> en el sector de la <strong>construcción,
                                        rehabilitación y mantenimiento de redes hidráulicas</strong> que
                                        transportan fluidos a presión o a flujo libre y la Fabricación
                                        de Accesorios en acero para tuberías, en cumplimiento de las
                                        especificaciones técnicas de ingeniería, en asociación
                                        estratégica con proveedores, contratistas, colaboradores y
                                        partes interesadas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mision;