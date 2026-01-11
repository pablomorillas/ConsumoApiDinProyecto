import { useParams, useNavigate } from 'react-router-dom'
import { edificios } from '../data/edifices.js'
import Section from './Section.jsx'


/**
 * Functional component that displays the detailed information of a specific building.
 * Retrieves the building index from the URL parameters OR uses provided prop data.
 *
 * @component
 * @param {Object} [props]
 * @param {Object} [props.edificioData] - Optional direct building data injection (for Storybook/Testing)
 */
function DetalleEdificio({ edificioData }) {
    const navigate = useNavigate() // Hook to navigate programmatically
    const { index } = useParams()  // Gets the building index from the URL

    // Use injected data if available, otherwise fetch from array using index
    const edificio = edificioData || edificios[index]

    if (!edificio) {
        return <div className="p-8 text-center">Building not found or invalid index.</div>
    }

    return (
        <Section>
            {/* Button to go back to the previous page */}
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-[var(--color-primary)] text-white rounded"
            >
                Back
            </button>

            {/* Main building information */}
            <h2 className='contenedor_h2'>{edificio.nombre}</h2>
            <img
                src={edificio.imagen}
                alt={edificio.nombre}
                style={{ maxWidth: '900px', display: 'block', margin: '20px auto', borderRadius: '12px' }}
            />
            <h3 className='contenedor_h3'>Precio: ${edificio.precio.toLocaleString()}</h3>
            <h4 className='contenedor_h4'>Categoría: {edificio.categoria}</h4>
            <p className='contenedor_p'>{edificio.descripcion}</p>
        </Section>
    )
}

export default DetalleEdificio;
