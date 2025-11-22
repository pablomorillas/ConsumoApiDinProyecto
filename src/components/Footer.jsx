// Componente funcional que representa el pie de página
// Muestra los derechos reservados y enlaces a redes sociales
export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-grey-5)] text-secondary p-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Texto con derechos reservados y año actual */}
        <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>

        {/* Enlaces a redes sociales con efecto hover */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
