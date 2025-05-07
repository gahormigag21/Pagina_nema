export interface Proyecto {
    id: number
    nombre: string
    descripcion: string
    categoria: string
    estado: string
    imagen: string
}

export const proyectos: Proyecto[] = [
    {
        id: 1,
        nombre: "Sistema de Gestión de Inventario",
        descripcion: "Aplicación web para gestionar inventarios de pequeñas empresas",
        categoria: "Web",
        estado: "Completado",
        imagen: "/images/fondo.png?height=200&width=300",
    },
    {
        id: 2,
        nombre: "Aplicación Móvil de Delivery",
        descripcion: "App para pedidos y entregas de comida a domicilio",
        categoria: "Móvil",
        estado: "En progreso",
        imagen: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 3,
        nombre: "Dashboard Analítico",
        descripcion: "Panel de control para visualización de datos empresariales",
        categoria: "Web",
        estado: "Completado",
        imagen: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 4,
        nombre: "Plataforma E-learning",
        descripcion: "Sistema de aprendizaje en línea con cursos interactivos",
        categoria: "Web",
        estado: "Planificación",
        imagen: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 5,
        nombre: "Sistema CRM",
        descripcion: "Gestión de relaciones con clientes para empresas medianas",
        categoria: "Web",
        estado: "En progreso",
        imagen: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 6,
        nombre: "App de Fitness",
        descripcion: "Aplicación para seguimiento de rutinas de ejercicio y nutrición",
        categoria: "Móvil",
        estado: "Completado",
        imagen: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 7,
        nombre: "Plataforma IoT",
        descripcion: "Sistema para conectar y gestionar dispositivos inteligentes",
        categoria: "IoT",
        estado: "En progreso",
        imagen: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 8,
        nombre: "Portal de Noticias",
        descripcion: "Sitio web de noticias con sistema de gestión de contenidos",
        categoria: "Web",
        estado: "Completado",
        imagen: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 9,
        nombre: "Aplicación de Finanzas Personales",
        descripcion: "Herramienta para gestión de presupuestos y gastos personales",
        categoria: "Móvil",
        estado: "Planificación",
        imagen: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 10,
        nombre: "Sistema de Reservas",
        descripcion: "Plataforma para gestión de reservas de servicios",
        categoria: "Web",
        estado: "Completado",
        imagen: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 11,
        nombre: "Juego Educativo",
        descripcion: "Juego interactivo para aprendizaje de matemáticas",
        categoria: "Juego",
        estado: "En progreso",
        imagen: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 12,
        nombre: "Red Social Especializada",
        descripcion: "Plataforma social para profesionales del sector creativo",
        categoria: "Web",
        estado: "Planificación",
        imagen: "/placeholder.svg?height=200&width=300",
    },
]
