import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'
import Edifice from '../components/Edifice.jsx'
import { edificios } from '../data/edifices.js'

function HomePage() {
    // Select first 4 buildings as featured
    const featuredBuildings = edificios.slice(0, 4);

    return (
        <div className="page-container w-full max-w-7xl mx-auto px-4">
            <header className="page-header">
                <h1 className='contenedor_h1'>Welcome Home</h1>
                <p className='contenedor_p' style={{ textAlign: "center" }}>Discover your dream space today.</p>
            </header>

            <div className="banner">
                <div className="banner-content">
                    <img src="../res/img1.jpg" alt="Main Banner" className="banner-image shadow-lg" />
                </div>
            </div>

            <section className="mt-12">
                <h2 className='contenedor_h2 text-center'>Edificios destacados</h2>
                <div className="cards-grid">
                    {featuredBuildings.map((edificio, index) => (
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
                </div>
                <div className="flex justify-center mt-8">
                    <Link to="/edificios">
                        <button className="px-6 py-3 text-lg font-bold">Mostrar todos</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default HomePage