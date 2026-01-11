import { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * Functional component for a hamburger menu.
 * Toggles a dropdown menu when clicked.
 *
 * @component
 */
export default function Hamburguesa() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="relative">
                {/* Hamburger button */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Open menu"
                    className="p-2 rounded-md text-white bg-white/10 hover:bg-white/20"
                >
                    ☰
                </button>

                {/* State-controlled menu */}
                <nav
                    className={
                        (open ? "block" : "hidden") +
                        " absolute right-0 mt-2 w-44 bg-[var(--color-primary)]/95 rounded shadow-lg p-3 flex flex-col gap-2"
                    }
                >
                    <NavLink
                        className="px-3 py-2 rounded text-white font-semibold transition-colors duration-200 hover:bg-white/10"
                        to="/" onClick={() => setOpen(false)}>
                        <button>Inicio</button>
                    </NavLink>
                    <NavLink
                        className="px-3 py-2 rounded text-white font-semibold transition-colors duration-200 hover:bg-white/10"
                        to="/edificios" onClick={() => setOpen(false)}><button>Edificios</button>
                    </NavLink>
                    <NavLink
                        to="/admin"
                        className="px-3 py-2 rounded text-white font-semibold transition-colors duration-200 hover:bg-white/10"
                        onClick={() => setOpen(false)}><button>Admin</button>
                    </NavLink>
                </nav>
            </div>
        </>
    );
}