"use client";

import { useState, useEffect } from "react";
import { use } from "react"; // Import React.use
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import accesorios from "@/data/accesorios";

export default function AccesorioDetalle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // Unwrap params using React.use()
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Parse the ID safely
  const accesorioId = Number(id);
  const accesorio = !isNaN(accesorioId)
    ? accesorios.find((p) => p.id === accesorioId)
    : null;

  // Simular carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Si no existe el accesorio
  if (!accesorio && !isLoading) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">accesorio no encontrado</h1>
        <p className="mb-8">
          El accesorio que estás buscando no existe o ha sido eliminado.
        </p>
        <Button asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al catálogo
          </Link>
        </Button>
      </div>
    );
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
    );
  }

  // Si existe el accesorio, mostrar los detalles
  if (accesorio) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/accesories">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al catálogo
            </Link>
          </Button>
        </div>

        {/* Información del accesorio */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{accesorio.nombre}</h1>
          <div className="flex gap-2 mb-6">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              {accesorio.categoria}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
              {accesorio.status}
            </span>
          </div>
        </div>

        {/* Descripción larga */}
        <Card className="my-16">
          <CardContent className="py-6 px-9 flex flex-row flex-wrap-reverse items-center justify-between gap-8">
            <div className="w-full md:w-[45%]">
              {accesorio.descripcionLarga
                .split("\n\n")
                .map((parrafo, index) => (
                  <p key={index} className="">
                    {parrafo}
                  </p>
                ))}
            </div>
            <div className="relative w-full md:w-[50%] h-auto aspect-video cursor-pointer rounded-lg overflow-hidden border-2">
              <Image
                src={accesorio.imagen || "/placeholder.svg"}
                alt={`Miniatura`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
