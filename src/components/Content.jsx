// Componente funcional que sirve como layout principal para las páginas hijas
// Renderiza el contenido de las rutas anidadas mediante <Outlet />
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <main
      id="main-content"          // ID para accesibilidad y saltar al contenido principal
      role="main"                // Define el landmark principal para lectores de pantalla
      tabIndex="-1"              // Permite que el main sea foco programáticamente
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-start p-8 pt-6 gap-8"
    >
      {/* Renderiza el contenido de las rutas hijas */}
      <Outlet />
    </main>
  )
}

export default Content;
