import { Card, CardContent } from "@/components/ui/card";

const Mision = () => {
    return (
        <>
            <section className="space-y-4">

                <Card>
                    <CardContent>
                        <h1 className="text-3xl font-bold text-center">Sobre Nosotros</h1>
                        <br></br>
                        <p className="text-justify">
                            Es una Sociedad por Acciones Simplificada; creada el 22 de Marzo
                            de 2.006, mediante documento privado, inscrito en el libro IX con
                            el No. 01045348 de la Cámara de Comercio de Bogotá. <br></br>
                            NIT. 900 076 133-2.
                            Estamos registrados y clasificados en el Registro Único de
                            Proponentes (RUP) de la Cámara de Comercio de Bogotá.
                        </p>
                    </CardContent>
                </Card>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">

                    <Card>
                        <CardContent>
                            <h2 className="text-2xl font-semibold text-center">Misión</h2>
                            <br></br>
                            <p>
                                NEMA INGENIERIA S.A.S, es una empresa orientada a prestar
                                servicios de ingeniería para dar soluciones a las necesidades de
                                nuestros clientes del sector de acueducto, alcantarillado, la
                                ejecución de obras de infraestructura y la fabricación de
                                accesorios en acero para el transporte de fluidos, cumpliendo
                                con altos estándares de calidad aplicables.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Espacio para imagen</span>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center md:order-2">
                    <span className="text-gray-500">Espacio para imagen</span>
                </div>
                <div className="space-y-4 md:order-1">

                    <Card>
                        <CardContent>
                            <h2 className="text-2xl font-semibold text-center">Visión</h2>
                            <br></br>
                            <p>
                                Para el año 2031, NEMA INGENIERIA S.A.S se proyecta como una
                                empresa reconocida como líder en el sector de la construcción,
                                rehabilitación y mantenimiento de redes hidráulicas que
                                transportan fluidos a presión o a flujo libre y la Fabricación
                                de Accesorios en acero para tuberías, en cumplimiento de las
                                especificaciones técnicas de ingeniería, en asociación
                                estratégica con proveedores, contratistas, colaboradores y
                                partes interesadas.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>

    );
};

export default Mision;