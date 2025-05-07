"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import proyectos from "@/data/proyectos"
import { ProyectoSkeleton } from "@/components/Projects/proyecto-skeleton"

export default function CatalogoProyectos() {
    const [busqueda, setBusqueda] = useState("")
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all")
    const [estadoSeleccionado, setEstadoSeleccionado] = useState("all")
    const [paginaActual, setPaginaActual] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const proyectosPorPagina = 6

    // Simular carga de datos
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    // Volver a mostrar el skeleton cuando cambian los filtros
    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [busqueda, categoriaSeleccionada, estadoSeleccionado, paginaActual])

    // Filtrar proyectos según los criterios de búsqueda
    const proyectosFiltrados = proyectos.filter((proyecto) => {
        const coincideBusqueda =
            proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            proyecto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
        const coincideCategoria =
            categoriaSeleccionada === "" || categoriaSeleccionada === "all" || proyecto.categoria === categoriaSeleccionada
        const coincideEstado =
            estadoSeleccionado === "" || estadoSeleccionado === "all" || proyecto.estado === estadoSeleccionado

        return coincideBusqueda && coincideCategoria && coincideEstado
    })

    // Calcular índices para paginación
    const indexUltimoProyecto = paginaActual * proyectosPorPagina
    const indexPrimerProyecto = indexUltimoProyecto - proyectosPorPagina
    const proyectosActuales = proyectosFiltrados.slice(indexPrimerProyecto, indexUltimoProyecto)
    const totalPaginas = Math.ceil(proyectosFiltrados.length / proyectosPorPagina)

    // Cambiar de página
    const irAPagina = (numeroPagina:number) => {
        setPaginaActual(numeroPagina)
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Catálogo de Proyectos</h1>

            {/* Buscador y filtros */}
            <div className="grid gap-4 mb-8 md:grid-cols-3">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Buscar proyectos..."
                        className="pl-8"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>

                <Select value={categoriaSeleccionada} onValueChange={setCategoriaSeleccionada}>
                    <SelectTrigger>
                        <SelectValue placeholder="Filtrar por categoría" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todas las categorías</SelectItem>
                        <SelectItem value="Web">Web</SelectItem>
                        <SelectItem value="Móvil">Móvil</SelectItem>
                        <SelectItem value="IoT">IoT</SelectItem>
                        <SelectItem value="Juego">Juego</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={estadoSeleccionado} onValueChange={setEstadoSeleccionado}>
                    <SelectTrigger>
                        <SelectValue placeholder="Filtrar por estado" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos los estados</SelectItem>
                        <SelectItem value="Completado">Completado</SelectItem>
                        <SelectItem value="En progreso">En progreso</SelectItem>
                        <SelectItem value="Planificación">Planificación</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Tarjetas de proyectos o skeletons */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                    // Mostrar skeletons mientras carga
                    Array.from({ length: proyectosPorPagina }).map((_, index) => <ProyectoSkeleton key={index} />)
                ) : proyectosActuales.length > 0 ? (
                    // Mostrar proyectos cuando están cargados
                    proyectosActuales.map((proyecto) => (
                        <Card key={proyecto.id} className="h-full flex flex-col">
                            <div className="relative w-full h-48">
                                <Image
                                    src={proyecto.imagen || "/placeholder.svg"}
                                    alt={proyecto.nombre}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{proyecto.nombre}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{proyecto.descripcion}</p>
                                <div className="flex gap-2 mt-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                        {proyecto.categoria}
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                                        {proyecto.estado}
                                    </span>
                                </div>
                            </CardContent>
                            <div className="p-6 pt-0 mt-auto">
                                <Button variant="outline" className="w-full">
                                    <Eye className="mr-2 h-4 w-4" /> Ver más
                                </Button>
                            </div>
                        </Card>
                    ))
                ) : (
                    // Mostrar mensaje cuando no hay resultados
                    <div className="col-span-full text-center py-8">
                        <p className="text-muted-foreground">No se encontraron proyectos con los criterios seleccionados.</p>
                    </div>
                )}
            </div>

            {/* Paginación */}
            {!isLoading && proyectosFiltrados.length > proyectosPorPagina && (
                <div className="flex justify-center mt-8">
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => irAPagina(paginaActual - 1)}
                            disabled={paginaActual === 1}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((numero) => (
                            <Button
                                key={numero}
                                variant={paginaActual === numero ? "default" : "outline"}
                                size="icon"
                                onClick={() => irAPagina(numero)}
                            >
                                {numero}
                            </Button>
                        ))}

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => irAPagina(paginaActual + 1)}
                            disabled={paginaActual === totalPaginas}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
