import Catalogo from "@/components/Sections/catalago";
import accesorios from "@/data/accesorios";

const categoriasUnicas = [...new Set(accesorios.map((p) => p.categoria))];

export default function PaginaProyectos() {
  return (
    <Catalogo
      items={accesorios}
      titulo="Catálgo de Accesorios"
      categorias={categoriasUnicas}
      mostrarFiltros
      linkBase="/accesories"
      itemsPorPagina={6}
    />
  );
}