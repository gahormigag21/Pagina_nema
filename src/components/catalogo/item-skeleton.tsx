import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function ProyectoSkeleton() {
    return (
        <Card className="h-full flex flex-col py-0">
            {/* Skeleton para la imagen */}
            <div className="relative w-full h-48 bg-gray-200 animate-pulse rounded-t-lg" />

            {/* Skeleton para el título */}
            <CardHeader>
                <div className="h-6 bg-gray-200 rounded-md w-3/4 animate-pulse" />
            </CardHeader>

            {/* Skeleton para la descripción y etiquetas */}
            <CardContent className="flex-grow">
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded-md w-4/6 animate-pulse" />
                </div>

                {/* Skeleton para las etiquetas */}
                <div className="flex gap-2 mt-4">
                    <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse" />
                    <div className="h-5 w-20 bg-gray-200 rounded-full animate-pulse" />
                </div>
            </CardContent>

            {/* Skeleton para el botón */}
            <div className="p-6 pt-0 mt-auto">
                <div className="h-9 bg-gray-200 rounded-md w-full animate-pulse" />
            </div>
        </Card>
    )
}
