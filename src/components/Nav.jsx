/**
 * Functional component representing the main navigation bar.
 * Contains links to Home, Buildings, and Admin pages, and responsive hamburger menu.
 *
 * @component
 */
import { Link } from 'react-router-dom';
import Hamburguesa from './Menu.jsx';
import logo from '../../res/logoInvertido.png';

function Navegation() {
    return (
        // Fixed header at the top with primary background color
        <header className="w-full bg-primary p-4 sticky top-0 z-50">
            <nav className="nav-container">

                {/* Logo and Title - LEFT */}
                <Link to="/" className="nav-logo-group group">
                    <img src={logo} alt="BrickBravio Logo" style={{ height: '3.5rem', width: 'auto', display: 'block' }} />
                    <span className="nav-brand-title">
                        BrickBravio
                    </span>
                </Link>

                {/* Buttons - RIGHT */}
                <div className="desktop-only">
                    {/* Link to Home page */}
                    <Link
                        to="/inicio"
                        className="nav-link"
                    >
                        Home
                    </Link>

                    {/* Link to Buildings page */}
                    <Link
                        to="/edificios"
                        className="nav-link"
                    >
                        Buildings
                    </Link>

                    {/* Link to Admin page */}
                    <Link
                        to="/admin"
                        className="nav-link"
                    >
                        Admin
                    </Link>
                </div>

                {/* Hamburger menu component for mobile navigation */}
                <div className="mobile-only text-secondary">
                    <Hamburguesa />
                </div>
            </nav>
        </header>
    )
}

export default Navegation;
