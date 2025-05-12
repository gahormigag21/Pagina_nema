// src/data/accesorios.ts

export type Accesorio = {
  id: number
  nombre: string
  descripcion: string
  descripcionLarga: string
  categoria: string
  status: null
  imagen?: string
}

const generarAccesorios = (): Accesorio[] => {
  let id = 1
  const accesorios: Accesorio[] = []

  const crearAccesorios = (
    nombre: string,
    categoria: string,
    dnRange: string[],
    descripcion: string,
    descripcionLarga: string
  ) => {
    dnRange.forEach((dn) => {
      accesorios.push({
        id: id++,
        nombre: `${nombre} DN ${dn}`,
        descripcion,
        descripcionLarga,
        categoria,
        status: null,
        imagen: "" // Agrega aquí la URL cuando esté disponible
      })
    })
  }

  crearAccesorios(
    "Codo 6° - 22½°",
    "CODOS",
    ['12"', '18"', '24"', '30"', '36"', '42"', '48"', '54"', '60"', '66"', '72"', '78"'],
    "Codo para desviaciones suaves",
    "Codo diseñado para cambios de dirección leves, ideal para trayectorias que requieren curvas de bajo ángulo sin comprometer el flujo hidráulico."
  )

  crearAccesorios(
    "Codo 22½° - 45°",
    "CODOS",
    ['12"', '18"', '24"', '30"', '36"', '42"', '48"', '54"', '60"', '66"', '72"', '78"'],
    "Codo para ángulos medios",
    "Codo intermedio que permite redireccionar tuberías en ángulos de 22½° a 45°, equilibrando espacio y eficiencia hidráulica."
  )

  crearAccesorios(
    "Codo 45° - 67½°",
    "CODOS",
    ['12"', '18"', '24"', '30"', '36"', '42"', '48"', '54"', '60"', '66"', '72"', '78"'],
    "Codo para cambios de dirección marcados",
    "Permite trayectorias más cerradas que los codos suaves, ideal para instalaciones con limitaciones espaciales moderadas."
  )

  crearAccesorios(
    "Codo 67½° - 90°",
    "CODOS",
    ['12"', '18"', '24"', '30"', '36"', '42"', '48"', '54"', '60"', '66"', '72"', '78"'],
    "Codo para curvas cerradas",
    "Diseñado para giros cerrados, este accesorio es útil cuando se requiere un cambio abrupto en la dirección de la tubería."
  )

  crearAccesorios(
    "Tee",
    "TEES",
    ['12"', '18"', '24"', '30"', '36"', '42"', '48"', '54"', '60"', '66"', '72"', '78"'],
    "Conector en T",
    "Permite dividir o unir el flujo en tres direcciones. Comúnmente usado para crear derivaciones perpendiculares."
  )

  crearAccesorios(
    "Yee",
    "YEES",
    ['12"', '18"', '24"', '30"', '36"', '42"', '48"', '54"', '60"', '66"', '72"', '78"'],
    "Conector en Y",
    "Ideal para divisiones suaves del flujo en dos direcciones, minimizando la pérdida de carga y turbulencia."
  )

  crearAccesorios(
    "Unión",
    "UNIONES",
    ['4"', '6"', '8"', '10"', '12"', '14"', '16"', '18"', '20"', '24"', '30"', '36"', '42"', '48"', '54"', '60"'],
    "Conector entre tramos",
    "Permite ensamblar dos secciones de tubería de forma segura y sencilla, ideal para mantenimiento y ampliaciones."
  )

  crearAccesorios(
    "Cruss",
    "CRUSS",
    ['12"', '18"', '24"', '30"', '36"', '42"', '48"', '54"', '60"', '66"', '72"', '78"'],
    "Conexión en cruz",
    "Pieza para conectar cuatro ramales en forma de cruz. Utilizado en redes complejas que requieren múltiples ramales."
  )

  crearAccesorios(
    "Niple",
    "NIPLES",
    ['2"', '4"', '6"', '8"', '10"', '12"', '14"', '16"', '18"', '20"', '24"', '30"', '36"', '42"', '48"', '54"', '60"', '66"', '72"', '78"'],
    "Tubo corto de conexión",
    "Sección corta de tubo utilizada para unir accesorios o alargar líneas existentes en instalaciones industriales o hidráulicas."
  )

  crearAccesorios(
    "Reducción / Ampliación",
    "REDUCCIONES / AMPLIACIONES",
    ['4"', '6"', '8"', '10"', '12"', '14"', '16"', '18"', '20"', '24"', '30"', '36"', '42"', '48"', '54"', '60"'],
    "Cambio de diámetro",
    "Permite la transición entre dos diámetros distintos de tubería, facilitando la adaptación a diferentes caudales o conexiones."
  )

  return accesorios
}

const accesorios = generarAccesorios()

export default accesorios
