export interface Proyecto {
    id: number
    nombre: string
    descripcion: string
    descripcionLarga: string
    categoria: string
    estado: string
    imagen: string
    imagenes: string[]
}

const proyectos: Proyecto[] = [
    {
        id: 1,
        nombre: "UNIÓN TEMPORAL MURCON",
        descripcion: "Construcción de las cámaras de Red matriz dentro del tramo de la Calle 170 a la Calle 193 con AK 9",
        descripcionLarga: `Contratos de Obra pública para la construcción y/o mejoramiento y/o mantenimiento y/o rehabilitación y/o reconstrucción de la malla vial arterial, intermedia con maquinaria especializada en la ciudad de Bogotá D.C.`,
        categoria: "Red Matriz",
        estado: "En progreso",
        imagen: "/images/projects/murcon/1.jpeg?height=200&width=300",
        imagenes: [
            "/images/projects/murcon/1.jpeg?height=600&width=800",
            "/images/projects/murcon/2.jpeg?height=600&width=800",
            "/images/projects/murcon/3.jpeg?height=600&width=800",
            "/images/projects/murcon/4.jpeg?height=600&width=800",
            "/images/projects/murcon/5.jpeg?height=600&width=800",
            "/images/projects/murcon/6.jpeg?height=600&width=800",
            "/images/projects/murcon/7.jpeg?height=600&width=800",
            "/images/projects/murcon/8.jpeg?height=600&width=800",
            "/images/projects/murcon/9.jpeg?height=600&width=800",
            "/images/projects/murcon/10.jpeg?height=600&width=800",
            "/images/projects/murcon/11.jpeg?height=600&width=800",
            "/images/projects/murcon/12.jpeg?height=600&width=800",
        ],
    },
    {
        id: 2,
        nombre: "Aplicación Móvil de Delivery",
        descripcion: "App para pedidos y entregas de comida a domicilio",
        descripcionLarga: `Nuestra aplicación móvil de delivery es una plataforma integral que conecta restaurantes locales con clientes hambrientos, ofreciendo una experiencia de pedido y entrega sin complicaciones.
  
  La aplicación está diseñada pensando tanto en los clientes como en los restaurantes y repartidores, proporcionando interfaces específicas para cada tipo de usuario.
  
  Características para clientes:
  - Exploración de restaurantes cercanos con geolocalización
  - Menús detallados con fotos, descripciones y precios
  - Sistema de búsqueda y filtros (tipo de cocina, precio, valoración)
  - Seguimiento en tiempo real de pedidos
  - Múltiples métodos de pago integrados
  - Programa de fidelización con puntos y descuentos
  - Historial de pedidos y opción de repetir favoritos
  
  Características para restaurantes:
  - Panel de administración para gestionar menús
  - Sistema de notificaciones para nuevos pedidos
  - Estadísticas de ventas y productos populares
  - Gestión de horarios y disponibilidad
  
  Características para repartidores:
  - Aplicación dedicada con navegación GPS
  - Sistema de asignación inteligente de pedidos
  - Seguimiento de ganancias y estadísticas
  
  Tecnologías utilizadas:
  - React Native para desarrollo multiplataforma
  - Firebase para backend y notificaciones push
  - Google Maps API para geolocalización y rutas
  - Stripe para procesamiento de pagos
  - Análisis de datos para recomendaciones personalizadas`,
        categoria: "Móvil",
        estado: "En progreso",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Pantalla+Principal",
            "/placeholder.svg?height=600&width=800&text=Detalle+Restaurante",
            "/placeholder.svg?height=600&width=800&text=Proceso+de+Pago",
            "/placeholder.svg?height=600&width=800&text=Seguimiento+Pedido",
        ],
    },
    {
        id: 3,
        nombre: "Dashboard Analítico",
        descripcion: "Panel de control para visualización de datos empresariales",
        descripcionLarga: `Este dashboard analítico es una herramienta avanzada de visualización de datos diseñada para transformar datos empresariales complejos en insights accionables a través de gráficos interactivos y reportes personalizables.
  
  La plataforma permite a los usuarios conectarse a múltiples fuentes de datos, crear visualizaciones personalizadas y compartir informes con equipos, todo desde una interfaz intuitiva y moderna.
  
  Características principales:
  - Conexión a múltiples fuentes de datos (SQL, NoSQL, APIs, Excel)
  - Más de 20 tipos de visualizaciones interactivas
  - Paneles personalizables con sistema de arrastrar y soltar
  - Filtros dinámicos y análisis drill-down
  - Programación de informes automatizados
  - Alertas basadas en umbrales personalizables
  - Colaboración en tiempo real con comentarios
  - Control de acceso basado en roles
  - Exportación en múltiples formatos (PDF, Excel, CSV)
  - Modo oscuro y temas personalizables
  
  Tecnologías utilizadas:
  - Frontend: Vue.js con Vuetify
  - Backend: Python con FastAPI
  - Visualizaciones: D3.js y ECharts
  - Procesamiento de datos: Pandas y NumPy
  - Autenticación: OAuth 2.0
  - Almacenamiento: PostgreSQL y Redis
  - Despliegue: Kubernetes en Google Cloud`,
        categoria: "Web",
        estado: "Completado",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Panel+Principal",
            "/placeholder.svg?height=600&width=800&text=Gráficos+Interactivos",
            "/placeholder.svg?height=600&width=800&text=Reportes+Personalizados",
            "/placeholder.svg?height=600&width=800&text=Configuración+Alertas",
        ],
    },
    {
        id: 4,
        nombre: "Plataforma E-learning",
        descripcion: "Sistema de aprendizaje en línea con cursos interactivos",
        descripcionLarga: `Nuestra plataforma de e-learning es un sistema educativo completo diseñado para ofrecer experiencias de aprendizaje interactivas y personalizadas a estudiantes de todos los niveles.
  
  La plataforma combina contenido multimedia, evaluaciones adaptativas y herramientas de colaboración para crear un entorno de aprendizaje efectivo y atractivo.
  
  Características principales:
  - Biblioteca de cursos organizados por categorías y niveles
  - Sistema de creación de contenido para instructores
  - Soporte para diversos formatos (video, audio, texto, PDF)
  - Evaluaciones interactivas con retroalimentación inmediata
  - Seguimiento de progreso y análisis de aprendizaje
  - Foros de discusión y salas de chat en vivo
  - Sistema de gamificación con insignias y tablas de clasificación
  - Certificaciones digitales verificables
  - Aplicación móvil para aprendizaje offline
  - Integración con videoconferencias para clases en vivo
  
  Funcionalidades para instructores:
  - Herramientas de creación de cursos con plantillas
  - Estadísticas detalladas de participación estudiantil
  - Sistema de calificación automatizado
  - Programación de webinars y sesiones en vivo
  
  Tecnologías utilizadas:
  - Frontend: React con Redux
  - Backend: Django REST Framework
  - Base de datos: PostgreSQL
  - Almacenamiento de contenido: AWS S3
  - Streaming de video: HLS con AWS CloudFront
  - Análisis de aprendizaje: TensorFlow para recomendaciones
  - Autenticación: Auth0 con SSO`,
        categoria: "Web",
        estado: "Planificación",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Catálogo+Cursos",
            "/placeholder.svg?height=600&width=800&text=Lección+Interactiva",
            "/placeholder.svg?height=600&width=800&text=Panel+Estudiante",
            "/placeholder.svg?height=600&width=800&text=Creación+Contenido",
        ],
    },
    {
        id: 5,
        nombre: "Sistema CRM",
        descripcion: "Gestión de relaciones con clientes para empresas medianas",
        descripcionLarga: `Este sistema CRM (Customer Relationship Management) es una solución integral diseñada específicamente para empresas medianas que buscan optimizar sus procesos de ventas, marketing y servicio al cliente.
  
  La plataforma centraliza toda la información de clientes y prospectos, automatiza tareas repetitivas y proporciona análisis detallados para mejorar la toma de decisiones.
  
  Módulos principales:
  - Gestión de contactos y empresas con historial completo
  - Pipeline de ventas personalizable con etapas y probabilidades
  - Automatización de marketing con campañas multicanal
  - Gestión de tickets de soporte con SLAs configurables
  - Centro de llamadas integrado con grabación y transcripción
  - Calendario y programación de actividades con recordatorios
  - Generación de presupuestos y contratos con firma electrónica
  - Informes y dashboards personalizables
  - Integración con email para seguimiento de comunicaciones
  
  Características avanzadas:
  - Puntuación de leads basada en comportamiento
  - Segmentación avanzada de clientes
  - Automatización de flujos de trabajo con reglas personalizables
  - Previsiones de ventas basadas en datos históricos
  - Integración con redes sociales para monitoreo de menciones
  - API completa para integraciones personalizadas
  
  Tecnologías utilizadas:
  - Frontend: Angular con NgRx
  - Backend: Java Spring Boot
  - Base de datos: MySQL con replicación
  - Búsqueda: Elasticsearch
  - Análisis predictivo: Python con scikit-learn
  - Despliegue: Contenedores Docker en Azure`,
        categoria: "Web",
        estado: "En progreso",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Dashboard+CRM",
            "/placeholder.svg?height=600&width=800&text=Pipeline+Ventas",
            "/placeholder.svg?height=600&width=800&text=Perfil+Cliente",
            "/placeholder.svg?height=600&width=800&text=Reportes+Analíticos",
        ],
    },
    {
        id: 6,
        nombre: "App de Fitness",
        descripcion: "Aplicación para seguimiento de rutinas de ejercicio y nutrición",
        descripcionLarga: `Nuestra aplicación de fitness es una solución completa para el bienestar que combina seguimiento de ejercicios, planificación nutricional y análisis de progreso en una experiencia móvil intuitiva y motivadora.
  
  Diseñada tanto para principiantes como para atletas avanzados, la aplicación ofrece planes personalizados basados en objetivos individuales y preferencias del usuario.
  
  Características de entrenamiento:
  - Biblioteca con más de 500 ejercicios con videos instructivos
  - Planes de entrenamiento personalizados por nivel y objetivo
  - Seguimiento de series, repeticiones y pesos con gráficos de progreso
  - Temporizador integrado para descansos y entrenamientos HIIT
  - Rutinas de entrenamiento sin equipo para ejercicio en casa
  - Integración con dispositivos wearables (Apple Watch, Fitbit, etc.)
  - Reconocimiento de ejercicios mediante IA con la cámara
  
  Características de nutrición:
  - Calculadora de calorías y macronutrientes personalizada
  - Escáner de códigos de barras para alimentos
  - Base de datos con más de 1 millón de alimentos
  - Planificador de comidas semanal con recetas saludables
  - Seguimiento de ingesta de agua y recordatorios
  
  Características adicionales:
  - Comunidad social para compartir logros y motivarse
  - Desafíos mensuales con recompensas
  - Análisis de sueño y recuperación
  - Métricas corporales con seguimiento visual
  - Modo entrenador para profesionales del fitness
  
  Tecnologías utilizadas:
  - React Native para desarrollo multiplataforma
  - Firebase para backend y sincronización en tiempo real
  - TensorFlow Lite para reconocimiento de ejercicios
  - HealthKit y Google Fit para integración con datos de salud
  - Stripe para suscripciones premium`,
        categoria: "Móvil",
        estado: "Completado",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Pantalla+Principal",
            "/placeholder.svg?height=600&width=800&text=Ejercicio+Detallado",
            "/placeholder.svg?height=600&width=800&text=Seguimiento+Nutricional",
            "/placeholder.svg?height=600&width=800&text=Análisis+Progreso",
        ],
    },
    {
        id: 7,
        nombre: "Plataforma IoT",
        descripcion: "Sistema para conectar y gestionar dispositivos inteligentes",
        descripcionLarga: `Esta plataforma IoT (Internet of Things) es una solución empresarial escalable diseñada para conectar, monitorear y gestionar miles de dispositivos inteligentes desde una interfaz centralizada y segura.
  
  La plataforma proporciona todas las herramientas necesarias para implementar soluciones IoT completas, desde la integración de dispositivos hasta el análisis avanzado de datos y la automatización de procesos.
  
  Capacidades principales:
  - Gestión de dispositivos con aprovisionamiento automatizado
  - Soporte para múltiples protocolos (MQTT, HTTP, CoAP, LoRaWAN)
  - Procesamiento de datos en tiempo real con reglas configurables
  - Almacenamiento de series temporales optimizado
  - Visualización de datos con dashboards personalizables
  - Gestión de alertas y notificaciones multicanal
  - Control remoto de dispositivos con comandos seguros
  - Actualizaciones OTA (Over-The-Air) para firmware
  - Geolocalización y seguimiento de activos
  - Análisis predictivo para mantenimiento preventivo
  
  Características de seguridad:
  - Autenticación de dispositivos con certificados X.509
  - Comunicación cifrada de extremo a extremo
  - Políticas de acceso granulares basadas en roles
  - Auditoría completa de actividades
  - Detección de anomalías basada en IA
  
  Casos de uso:
  - Smart Cities (iluminación, gestión de residuos, aparcamiento)
  - Industria 4.0 (monitoreo de maquinaria, automatización)
  - Agricultura inteligente (riego, monitoreo de cultivos)
  - Gestión de edificios (HVAC, seguridad, iluminación)
  - Logística y cadena de suministro (seguimiento de activos)
  
  Tecnologías utilizadas:
  - Backend: Microservicios en Go y Node.js
  - Procesamiento de datos: Apache Kafka y Flink
  - Base de datos: TimescaleDB y MongoDB
  - Frontend: React con Grafana para visualizaciones
  - Infraestructura: Kubernetes en múltiples nubes
  - Edge computing: Docker en dispositivos de borde`,
        categoria: "IoT",
        estado: "En progreso",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Dashboard+Dispositivos",
            "/placeholder.svg?height=600&width=800&text=Análisis+Datos+IoT",
            "/placeholder.svg?height=600&width=800&text=Mapa+Dispositivos",
            "/placeholder.svg?height=600&width=800&text=Configuración+Reglas",
        ],
    },
    {
        id: 8,
        nombre: "Portal de Noticias",
        descripcion: "Sitio web de noticias con sistema de gestión de contenidos",
        descripcionLarga: `Este portal de noticias es una plataforma digital completa que combina un sistema de gestión de contenidos (CMS) potente con una experiencia de usuario moderna y atractiva para la publicación y consumo de noticias.
  
  Diseñado para organizaciones mediáticas de todos los tamaños, el portal ofrece herramientas avanzadas para la creación, publicación y monetización de contenido informativo.
  
  Características para lectores:
  - Diseño responsivo optimizado para todos los dispositivos
  - Carga rápida con técnicas avanzadas de optimización
  - Personalización de feed de noticias según intereses
  - Modo oscuro y opciones de accesibilidad
  - Notificaciones push para noticias importantes
  - Comentarios y discusiones moderadas
  - Opciones para guardar artículos y leer más tarde
  - Integración con redes sociales para compartir
  
  Características para editores:
  - Editor WYSIWYG con herramientas avanzadas de formato
  - Sistema de flujo de trabajo editorial con roles
  - Programación de publicaciones
  - SEO integrado con recomendaciones automáticas
  - Análisis de rendimiento de contenido en tiempo real
  - Herramientas para contenido multimedia (galerías, videos)
  - Sistema de etiquetado y categorización flexible
  - Gestión de newsletters y suscripciones
  
  Opciones de monetización:
  - Integración con múltiples redes publicitarias
  - Muro de pago flexible con diferentes modelos
  - Contenido patrocinado y branded content
  - Marketplace de eventos y productos
  
  Tecnologías utilizadas:
  - Frontend: Next.js con SSR para SEO óptimo
  - Backend: Headless CMS con Strapi
  - Base de datos: PostgreSQL
  - Búsqueda: Algolia para búsqueda rápida
  - CDN: Cloudflare para distribución global
  - Análisis: Google Analytics y Chartbeat
  - Infraestructura: Vercel y AWS`,
        categoria: "Web",
        estado: "Completado",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Portada+Principal",
            "/placeholder.svg?height=600&width=800&text=Artículo+Detallado",
            "/placeholder.svg?height=600&width=800&text=Panel+Editor",
            "/placeholder.svg?height=600&width=800&text=Análisis+Audiencia",
        ],
    },
    {
        id: 9,
        nombre: "Aplicación de Finanzas Personales",
        descripcion: "Herramienta para gestión de presupuestos y gastos personales",
        descripcionLarga: `Esta aplicación de finanzas personales es una herramienta integral diseñada para ayudar a los usuarios a tomar el control de su vida financiera a través del seguimiento de gastos, presupuestos personalizados y análisis financiero intuitivo.
  
  La aplicación simplifica la gestión financiera personal con automatización inteligente y visualizaciones claras que ayudan a los usuarios a entender y mejorar sus hábitos financieros.
  
  Características principales:
  - Sincronización segura con cuentas bancarias y tarjetas de crédito
  - Categorización automática de transacciones con IA
  - Creación de presupuestos personalizados por categoría
  - Seguimiento de facturas recurrentes con recordatorios
  - Detección de gastos inusuales y suscripciones olvidadas
  - Visualización de tendencias de gastos con gráficos interactivos
  - Planificación de objetivos financieros con seguimiento
  - Simulador de escenarios para decisiones financieras
  - Informes mensuales y anuales detallados
  - Consejos personalizados para ahorrar dinero
  
  Características avanzadas:
  - Seguimiento de inversiones y patrimonio neto
  - Planificación para la jubilación con proyecciones
  - Gestión de deudas con estrategias de pago
  - Exportación de datos para declaración de impuestos
  - Modo familiar para finanzas compartidas
  - Análisis predictivo de flujo de caja
  
  Seguridad:
  - Cifrado de extremo a extremo
  - Autenticación biométrica
  - Conexiones bancarias de solo lectura
  - Cumplimiento con regulaciones financieras
  
  Tecnologías utilizadas:
  - Flutter para desarrollo multiplataforma
  - Node.js para backend
  - MongoDB para almacenamiento de datos
  - Plaid para conexiones bancarias seguras
  - TensorFlow para categorización inteligente
  - AWS para infraestructura segura y escalable`,
        categoria: "Móvil",
        estado: "Planificación",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Dashboard+Financiero",
            "/placeholder.svg?height=600&width=800&text=Análisis+Gastos",
            "/placeholder.svg?height=600&width=800&text=Presupuestos",
            "/placeholder.svg?height=600&width=800&text=Objetivos+Ahorro",
        ],
    },
    {
        id: 10,
        nombre: "Sistema de Reservas",
        descripcion: "Plataforma para gestión de reservas de servicios",
        descripcionLarga: `Este sistema de reservas es una plataforma versátil diseñada para gestionar citas, reservas y programación de recursos para diversos tipos de negocios, desde restaurantes y hoteles hasta clínicas médicas y salones de belleza.
  
  La solución ofrece una experiencia fluida tanto para los clientes que realizan reservas como para los negocios que gestionan su disponibilidad y recursos.
  
  Funcionalidades para clientes:
  - Interfaz intuitiva para búsqueda y reserva de servicios
  - Visualización de disponibilidad en tiempo real
  - Múltiples vistas de calendario (diaria, semanal, mensual)
  - Perfiles de usuario con historial de reservas
  - Recordatorios automáticos por email y SMS
  - Opciones de cancelación y reprogramación
  - Sistema de valoraciones y reseñas post-servicio
  - Pago anticipado y depósitos para reservas
  
  Funcionalidades para negocios:
  - Panel de administración completo para gestión de reservas
  - Configuración flexible de disponibilidad y recursos
  - Gestión de personal y asignación de servicios
  - Políticas personalizables de cancelación y no-shows
  - Informes detallados de ocupación y rendimiento
  - Integración con POS y sistemas de gestión
  - Herramientas de marketing como promociones y descuentos
  - Gestión de listas de espera automáticas
  
  Características avanzadas:
  - Reservas recurrentes para servicios periódicos
  - Reservas grupales y gestión de eventos
  - Personalización completa de campos de reserva
  - Integración con Google Calendar y otros calendarios
  - Optimización automática de recursos y tiempos
  - Aplicación móvil dedicada para gestión en movimiento
  
  Tecnologías utilizadas:
  - Frontend: Vue.js con Vuetify
  - Backend: Laravel PHP Framework
  - Base de datos: MySQL
  - Notificaciones: Twilio para SMS, SendGrid para email
  - Pagos: Stripe y PayPal
  - Calendarios: API de Google Calendar
  - Despliegue: AWS con balanceo de carga`,
        categoria: "Web",
        estado: "Completado",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Calendario+Reservas",
            "/placeholder.svg?height=600&width=800&text=Proceso+Reserva",
            "/placeholder.svg?height=600&width=800&text=Panel+Administración",
            "/placeholder.svg?height=600&width=800&text=Reportes+Ocupación",
        ],
    },
    {
        id: 11,
        nombre: "Juego Educativo",
        descripcion: "Juego interactivo para aprendizaje de matemáticas",
        descripcionLarga: `Este juego educativo es una experiencia interactiva diseñada para hacer que el aprendizaje de las matemáticas sea divertido y atractivo para estudiantes de primaria, combinando mecánicas de juego envolventes con contenido educativo alineado con los estándares curriculares.
  
  El juego utiliza narrativas cautivadoras, personajes memorables y sistemas de progresión para motivar a los estudiantes a practicar y dominar conceptos matemáticos fundamentales.
  
  Características educativas:
  - Cobertura completa del currículo matemático de primaria
  - Adaptación dinámica de dificultad según el desempeño
  - Explicaciones claras de conceptos con ejemplos visuales
  - Múltiples enfoques para resolver problemas
  - Retroalimentación inmediata y constructiva
  - Seguimiento detallado del progreso por habilidad
  - Informes para padres y profesores
  - Modo práctica para reforzar áreas específicas
  
  Características de juego:
  - Mundo abierto explorable con diferentes temáticas
  - Sistema de misiones y desafíos progresivos
  - Personalización de avatares y bases de operaciones
  - Coleccionables y recompensas por logros
  - Minijuegos especializados para diferentes conceptos
  - Modo multijugador cooperativo y competitivo
  - Eventos especiales y desafíos temporales
  - Narrativa continua con nuevos capítulos periódicos
  
  Contenido matemático:
  - Aritmética básica (suma, resta, multiplicación, división)
  - Fracciones y decimales
  - Geometría y medición
  - Álgebra temprana
  - Resolución de problemas
  - Pensamiento lógico y patrones
  
  Tecnologías utilizadas:
  - Unity para desarrollo multiplataforma
  - C# para lógica de juego
  - Firebase para almacenamiento de datos y progreso
  - Algoritmos de aprendizaje adaptativo
  - Modelado 3D con Blender
  - Animaciones con Spine
  - Efectos visuales con Shader Graph`,
        categoria: "Juego",
        estado: "En progreso",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Mundo+Juego",
            "/placeholder.svg?height=600&width=800&text=Desafío+Matemático",
            "/placeholder.svg?height=600&width=800&text=Personalización+Avatar",
            "/placeholder.svg?height=600&width=800&text=Mapa+Progreso",
        ],
    },
    {
        id: 12,
        nombre: "Red Social Especializada",
        descripcion: "Plataforma social para profesionales del sector creativo",
        descripcionLarga: `Esta red social especializada es una plataforma exclusiva diseñada para conectar profesionales del sector creativo, incluyendo diseñadores, ilustradores, fotógrafos, cineastas, escritores y otros artistas digitales.
  
  A diferencia de las redes sociales generalistas, esta plataforma está optimizada para mostrar portfolios creativos, facilitar colaboraciones profesionales y crear oportunidades de negocio dentro de la industria creativa.
  
  Características principales:
  - Perfiles profesionales con portfolios personalizables
  - Feed inteligente con contenido relevante para cada especialidad
  - Sistema de descubrimiento basado en estilos y técnicas
  - Herramientas de colaboración para proyectos creativos
  - Marketplace para servicios creativos y venta de obras
  - Comunidades temáticas moderadas por expertos
  - Eventos virtuales y workshops en directo
  - Sistema de mentoría y feedback entre pares
  - Ofertas de trabajo y oportunidades profesionales
  - Análisis de tendencias en la industria creativa
  
  Herramientas para creativos:
  - Integración con software de diseño popular (Adobe, Figma)
  - Visualización de alta calidad para trabajos creativos
  - Protección de propiedad intelectual con marcas de agua
  - Licenciamiento flexible para trabajos compartidos
  - Herramientas de crítica constructiva y anotaciones
  - Estadísticas detalladas de engagement y alcance
  
  Monetización para usuarios:
  - Suscripciones de seguidores para contenido exclusivo
  - Venta directa de obras digitales y físicas
  - Servicios de freelance con sistema de propuestas
  - Cursos y tutoriales premium
  - Licenciamiento de trabajos creativos
  
  Tecnologías utilizadas:
  - Frontend: React con Styled Components
  - Backend: GraphQL con Apollo Server
  - Base de datos: PostgreSQL y Neo4j para relaciones
  - Almacenamiento: AWS S3 para archivos de alta resolución
  - Streaming: WebRTC para eventos en vivo
  - Búsqueda: Elasticsearch con reconocimiento visual
  - IA: Recomendaciones personalizadas con TensorFlow`,
        categoria: "Web",
        estado: "Planificación",
        imagen: "/placeholder.svg?height=200&width=300",
        imagenes: [
            "/placeholder.svg?height=600&width=800&text=Feed+Creativo",
            "/placeholder.svg?height=600&width=800&text=Perfil+Portfolio",
            "/placeholder.svg?height=600&width=800&text=Colaboración+Proyecto",
            "/placeholder.svg?height=600&width=800&text=Marketplace+Creativo",
        ],
    },
]

export default proyectos;