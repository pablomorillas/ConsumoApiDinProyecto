// Página que muestra un listado de edificios usando tarjetas (Card)
// Cada edificio se representa con el componente Edifice y es enlazable a su detalle
import Card from '../components/Card.jsx'
import Edifice from '../components/Edifice.jsx'
import { edificios } from '../data/edifices.js'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import { useState } from 'react'

function BuildingPage() {
    const [searchTerm, setSearchTerm] = useState('');
    return (

        <>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} placeholder="Buscar películas por nombre..." /><div className="page-container w-full max-w-7xl mx-auto px-4">
                {/* Cabecera de la página */}
                <header className="page-header">
                    <h1 className='contenedor_h1'>Listado de Edificios</h1>
                </header>

                {/* Sección de tarjetas de edificios */}
                <section className="cards-grid mt-6">
                    {edificios.filter(edificio =>
                        edificio.nombre.toLowerCase().includes(searchTerm.toLowerCase())
                    ).map((edificio, index) => (
                        // Cada edificio es un enlace a su página de detalle
                        <Link key={index} to={`/edificios/${index}`}>
                            <Card>
                                <Edifice
                                    nombre={edificio.nombre}
                                    foto={edificio.imagen}
                                    precio={edificio.precio}
                                    descripcion={edificio.descripcion}
                                    categoria={edificio.categoria} />
                            </Card>
                        </Link>
                    ))}
                </section>
            </div>
        </>
    )
}

export default BuildingPage;
