// Página de detalle de un edificio específico
// Muestra toda la información del edificio seleccionado y un botón para volver atrás
import { useParams, useNavigate } from 'react-router-dom'
import { edificios } from '../data/edifices.js'
import Section from '../components/Section.jsx'

function DetalleEdificio() {
    const navigate = useNavigate() // Hook para navegar programáticamente
    const { index } = useParams()  // Obtiene el índice del edificio desde la URL
    const edificio = edificios[index] // Busca el edificio correspondiente en el array

    return (
        <Section>
            {/* Botón para volver a la página anterior */}
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-[var(--color-primary)] text-white rounded"
            >
                Volver
            </button>

            {/* Información principal del edificio */}
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
