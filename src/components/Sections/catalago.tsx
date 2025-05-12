"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { ProyectoSkeleton } from "@/components/catalogo/item-skeleton";

type Item = {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  status: string | null; // El estado puede ser null
  imagen?: string;
};

type Props = {
  items: Item[] | undefined;
  titulo?: string;
  mostrarFiltros?: boolean;
  linkBase?: string;
  categorias: string[]; // 🔥 requerido para poder filtrar
  itemsPorPagina?: number;
};

export default function Catalogo({
  items = [],
  titulo = "Catálogo",
  mostrarFiltros = true,
  linkBase = "/items",
  categorias,
  itemsPorPagina = 6,
}: Props) {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("all");
  const [paginaActual, setPaginaActual] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 250);
    return () => clearTimeout(timer);
  }, [busqueda, categoriaSeleccionada, estadoSeleccionado, paginaActual]);

  const itemsFiltrados = items.filter((item) => {
    const coincideBusqueda =
      item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaSeleccionada === "all" ||
      item.categoria === categoriaSeleccionada;

    const coincideEstado =
      estadoSeleccionado === "all" ||
      item.status?.toLowerCase() === estadoSeleccionado.toLowerCase();

    return coincideBusqueda && coincideCategoria && coincideEstado;
  });

  const indexUltimo = paginaActual * itemsPorPagina;
  const indexPrimero = indexUltimo - itemsPorPagina;
  const itemsActuales = itemsFiltrados.slice(indexPrimero, indexUltimo);
  const totalPaginas = Math.ceil(itemsFiltrados.length / itemsPorPagina);

  const irAPagina = (numero: number) => setPaginaActual(numero);
  // Verificar si existe al menos un estado para mostrar el filtro
  const tieneEstado = items.some((item) => item.status !== null);

  return (
    <div className="container mx-auto py-8 px-4">
      {titulo && (
        <h1 className="text-3xl font-bold mb-8 text-center">{titulo}</h1>
      )}

      {mostrarFiltros && (
        <div className="grid gap-4 mb-8 md:grid-cols-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar..."
              className="pl-8"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <Select
            value={categoriaSeleccionada}
            onValueChange={setCategoriaSeleccionada}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las categorías</SelectItem>
              {categorias.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {tieneEstado && (
            <Select
              value={estadoSeleccionado}
              onValueChange={setEstadoSeleccionado}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="completado">Completado</SelectItem>
                <SelectItem value="en progreso">En progreso</SelectItem>
                <SelectItem value="pendiente">Pendiente</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array.from({ length: itemsPorPagina }).map((_, index) => (
            <ProyectoSkeleton key={index} />
          ))
        ) : itemsActuales.length > 0 ? (
          itemsActuales.map((item) => (
            <Card key={item.id} className="h-full flex flex-col py-0">
              <div className="relative w-full h-60">
                <Image
                  src={item.imagen || "/placeholder.svg"}
                  alt={item.nombre}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <CardHeader>
                <CardTitle>{item.nombre}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{item.descripcion}</p>
                <div className="flex gap-2 mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {item.categoria}
                  </span>
                  {/* Mostrar el estado solo si tiene uno */}
                  {item.status && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                      {item.status}
                    </span>
                  )}
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`${linkBase}/${item.id}`}>
                    <Eye className="mr-2 h-4 w-4" /> Ver más
                  </Link>
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-muted-foreground">
              No se encontraron elementos con los filtros seleccionados.
            </p>
          </div>
        )}
      </div>

      {!isLoading && itemsFiltrados.length > itemsPorPagina && (
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

            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(
              (numero) => (
                <Button
                  key={numero}
                  variant={paginaActual === numero ? "default" : "outline"}
                  size="icon"
                  onClick={() => irAPagina(numero)}
                >
                  {numero}
                </Button>
              )
            )}

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
  );
}
