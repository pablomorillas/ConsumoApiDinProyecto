/**
 * Functional component representing the main navigation bar.
 * Contains links to Home, Buildings, and Admin pages, and responsive hamburger menu.
 *
 * @component
 */
import { Link } from 'react-router-dom'
import Hamburguesa from './Menu.jsx'

function Navegation() {
    return (
        // Fixed header at the top with shadow and primary background color
        <header className="w-full bg-primary p-4 shadow-md sticky top-0 z-50">
            <nav>
                <div className="flex items-center gap-6 desktop-only">

                    {/* Link to Home page */}
                    <Link
                        to="/inicio"
                        className="px-4 py-2 rounded-lg text-secondary font-semibold transition-colors duration-300 hover:bg-secondary hover:text-primary"
                    >
                        <button>
                            Home
                        </button>
                    </Link>

                    {/* Link to Buildings page */}
                    <Link
                        to="/edificios"
                        className="px-4 py-2 rounded-lg text-secondary font-semibold transition-colors duration-300 hover:bg-secondary hover:text-primary"
                    >
                        <button>
                            Buildings
                        </button>
                    </Link>

                    {/* Link to Admin page */}
                    <Link
                        to="/admin"
                        className="px-4 py-2 rounded-lg text-secondary font-semibold transition-colors duration-300 hover:bg-secondary hover:text-primary"
                    >
                        <button>
                            Admin
                        </button>
                    </Link>
                </div>

                {/* Hamburger menu component for mobile navigation */}
                <div className="mobile-only">
                    <Hamburguesa />
                </div>
            </nav>
        </header>
    )
}

export default Navegation;
