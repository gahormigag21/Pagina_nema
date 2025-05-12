import Catalogo from "@/components/Sections/catalago";
import proyectos from "@/data/proyectos";

const categoriasUnicas = [...new Set(proyectos.map((p) => p.categoria))];

export default function PaginaProyectos() {
  return (
    <Catalogo
      items={proyectos}
      titulo="Catálgo de Proyectos"
      categorias={['Construccion', 'Limpieza', 'Red Matriz']}
      mostrarFiltros
      linkBase="/projects"
      itemsPorPagina={6}
    />
  );
}
