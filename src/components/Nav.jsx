// Componente funcional que representa la barra de navegación principal
// Contiene enlaces a las páginas Inicio, Edificios y Admin, y un menú hamburguesa
import { Link } from 'react-router-dom'
import Hamburguesa from './Menu.jsx'

function Navegation() {
    return (
        // Header fijo en la parte superior con sombra y color de fondo principal
        <header className="w-full bg-primary p-4 shadow-md sticky top-0 z-50">
            <nav>
                <div className="flex items-center gap-6">

                    {/* Enlace a la página de inicio */}
                    <Link
                        to="/inicio"
                        className="px-4 py-2 rounded-lg text-secondary font-semibold transition-colors duration-300 hover:bg-secondary hover:text-primary"
                    >
                        <button>
                            Inicio
                        </button>
                    </Link>

                    {/* Enlace a la página de edificios */}
                    <Link
                        to="/edificios"
                        className="px-4 py-2 rounded-lg text-secondary font-semibold transition-colors duration-300 hover:bg-secondary hover:text-primary"
                    >
                        <button>
                            Edificios
                        </button>
                    </Link>

                    {/* Enlace a la página de administración */}
                    <Link
                        to="/admin"
                        className="px-4 py-2 rounded-lg text-secondary font-semibold transition-colors duration-300 hover:bg-secondary hover:text-primary"
                    >
                        <button>
                            Admin
                        </button>
                    </Link>
                </div>

                {/* Componente del menú hamburguesa para navegación en móvil */}
                <Hamburguesa />
            </nav>
        </header>
    )
}

export default Navegation;
