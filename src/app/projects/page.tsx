import Catalogo from "@/components/Sections/catalago";
import proyectos from "@/data/proyectos";

const categoriasUnicas = [...new Set(proyectos.map((p) => p.categoria))];
const estadosUnicos = [...new Set(proyectos.map((p) => p.status).filter(Boolean))];

export default function PaginaProyectos() {
  return (
    <Catalogo
      items={proyectos}
      titulo="Catálgo de Proyectos"
      categorias={categoriasUnicas} // Pass unique categorias
      estados={estadosUnicos} // Pass unique estados
      mostrarFiltros
      linkBase="/projects"
      itemsPorPagina={6}
    />
  );
}
