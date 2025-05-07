"use client"

import { useState, useEffect } from "react"
import { use } from "react" // Import React.use
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import proyectos from "@/data/proyectos"

export default function ProyectoDetalle({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); // Unwrap params using React.use()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    // Parse the ID safely
    const projectId = Number(id);
    const proyecto = !isNaN(projectId) ? proyectos.find((p) => p.id === projectId) : null;

    // Simular carga
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    // Si no existe el proyecto
    if (!proyecto && !isLoading) {
        return (
            <div className="container mx-auto py-16 px-4 text-center">
                <h1 className="text-3xl font-bold mb-6">Proyecto no encontrado</h1>
                <p className="mb-8">El proyecto que estás buscando no existe o ha sido eliminado.</p>
                <Button asChild>
                    <Link href="/projects">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver al catálogo
                    </Link>
                </Button>
            </div>
        )
    }

    // Funciones para el carrusel
    const nextImage = () => {
        if (proyecto) {
            setCurrentImageIndex((prevIndex) => (prevIndex === proyecto.imagenes.length - 1 ? 0 : prevIndex + 1))
        }
    }

    const prevImage = () => {
        if (proyecto) {
            setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? proyecto.imagenes.length - 1 : prevIndex - 1))
        }
    }

    // Mostrar skeleton mientras carga
    if (isLoading) {
        return (
            <div className="container mx-auto py-8 px-4">
                <div className="mb-6">
                    <div className="h-10 w-40 bg-gray-200 rounded-md animate-pulse mb-8"></div>
                </div>

                

                {/* Skeleton del contenido */}
                <div className="space-y-4 mb-6">
                    <div className="h-8 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
                    <div className="flex gap-2">
                        <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                </div>
                {/* Skeleton del carrusel */}
                <div className="relative w-full h-[400px] bg-gray-200 rounded-lg animate-pulse mb-8"></div>
                
                <div className="space-y-3 mt-8">
                    <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
                </div>
            </div>
        )
    }

    // Si existe el proyecto, mostrar los detalles
    if (proyecto) {
        return (
            <div className="container mx-auto py-8 px-4">
                <div className="mb-6">
                    <Button variant="outline" asChild>
                        <Link href="/projects">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al catálogo
                        </Link>
                    </Button>
                </div>

                {/* Información del proyecto */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-4">{proyecto.nombre}</h1>
                    <div className="flex gap-2 mb-6">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                            {proyecto.categoria}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                            {proyecto.estado}
                        </span>
                    </div>
                </div>

                {/* Descripción larga */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="prose max-w-none">
                            {proyecto.descripcionLarga.split("\n\n").map((parrafo, index) => (
                                <p key={index} className="mb-4">
                                    {parrafo}
                                </p>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Carrusel de imágenes */}
                <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={proyecto.imagenes[currentImageIndex] || "/placeholder.svg"}
                        alt={`Imagen ${currentImageIndex + 1} de ${proyecto.nombre}`}
                        fill
                        className="object-cover"
                    />

                    {/* Controles del carrusel */}
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-background/80 backdrop-blur-sm"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-background/80 backdrop-blur-sm"
                            onClick={nextImage}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>

                    {/* Indicadores de imágenes */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {proyecto.imagenes.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full ${index === currentImageIndex ? "bg-primary" : "bg-primary/30"}`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                </div>
                {/* Miniaturas de imágenes */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Galería de imágenes</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {proyecto.imagenes.map((imagen, index) => (
                            <div
                                key={index}
                                className={`relative aspect-video cursor-pointer rounded-lg overflow-hidden border-2 ${index === currentImageIndex ? "border-primary" : "border-transparent"
                                    }`}
                                onClick={() => setCurrentImageIndex(index)}
                            >
                                <Image
                                    src={imagen || "/placeholder.svg"}
                                    alt={`Miniatura ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return null
}
