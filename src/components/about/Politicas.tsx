import { Card, CardContent } from "@/components/ui/card";
import { Bold } from "lucide-react";

const Politicas = () => {
    return (
        <div className="space-y-8">
            <section className="space-y-4">


                <h1 className="text-3xl font-bold text-center">Politicas</h1>

            </section>

            <section className="grid grid-cols-1 gap-8 items-center">
                <div className="space-y-4">

                    <Card>
                        <CardContent>
                            <h2 className="text-2xl font-semibold text-center mb-4">Política de Calidad</h2>
                            <p className="text-justify">
                                <strong>NEMA INGENIERÍA SAS</strong>, en el marco de sus actividades relacionadas con la ejecución de proyectos de <strong>construcción, rehabilitación y mantenimiento</strong> de redes de acueducto, alcantarillado y obras de infraestructura vial, y fabricación de accesorios en acero para el transporte de fluidos a presión bajo las exigencias y regulaciones legales aplicables, se compromete a <strong>identificar y satisfacer las necesidades de sus clientes</strong> y partes interesadas, mediante el cumplimiento de sus requisitos y las especificaciones técnicas de los proyectos.
                            </p>
                            <p className="text-justify mt-4">
                                A través de la aplicación de las directrices del sistema de gestión de calidad, controla, hace seguimiento y mejora continuamente sus procesos, contando con la participación activa y competencia de su capital humano y con el apoyo de sus proveedores y contratistas calificados.
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </section>

            <section className="grid grid-cols-1 gap-8 items-center">
                <div className="space-y-4">

                    <Card>
                        <CardContent>
                            <h2 className="text-2xl font-semibold text-center mb-4">Política de Protección y Confidencialidad de la Información</h2>
                            <p className="text-justify">
                                <strong>NEMA INGENIERÍA S.A.S</strong>. se compromete a adoptar la Política de Protección y Confidencialidad de la Información, con el objetivo de salvaguardar la información de sus operaciones, proveedores, contratistas, clientes y trabajadores.
                            </p>
                            <p className="text-justify mt-4">Todos los datos serán tratados con la debida reserva, bajos los siguientes lineamientos:</p>
                            <br />
                            <ol className="list-decimal list-inside mt-4 ">
                                <strong className="text-justify">1. Confidencialidad</strong>
                                <div className="text-justify space-x-2">
                                    La información se utilizará únicamente para fines comerciales y contractuales, para mantener una comunicación eficiente, dar cumplimiento a las obligaciones contraídas con nuestros clientes, proveedores, contratistas y empleados.
                                </div>
                                <br />
                                <strong className="text-justify">2. Seguridad</strong>
                                <div className="text-justify">
                                    Los datos no serán divulgados y/o compartidos con otras personas naturales o jurídicas, sin la autorización previa y escrita del titular, y serán tratados con la debida reserva, para los efectos propios de la actividad comercial o de los negocios que desarrolla la empresa, y para verificar las condiciones de los clientes, contratistas, empleados o proveedores de la empresa.
                                </div>
                            </ol>
                            <p className="text-justify mt-4">
                                La información recibida, ya sea de personas jurídicas o naturales, se protegerá de igual forma que la información propia de la compañía.
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </section>
        </div>
    );
};

export default Politicas;