import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Section from './Section.jsx'
import { UserContext } from '../context/UserContext'
import { useDeleteProduct } from '../hook/useDeleteProducto'
import { useProducto } from '../hook/useProducto'

const PLACEHOLDER_IMAGE = "https://placehold.co/900x600/e5e7eb/6b7280?text=Sin+Imagen";

/**
 * Functional component that displays the detailed information of a specific building.
 * Retrieves the building index from the URL parameters OR uses provided prop data.
 *
 * @component
 * @param {Object} [props]
 * @param {Object} [props.edificioData] - Optional direct building data injection (for Storybook/Testing)
 */
function DetalleEdificio({ edificioData }) {
    const navigate = useNavigate()
    const { id } = useParams()
    const { userLogged } = useContext(UserContext)
    const { removeProduct, loading: deleting } = useDeleteProduct()

    // Use the hook to fetch product data
    const { producto: edificio, loading, error } = useProducto(edificioData ? null : id)

    // If edificioData is provided (for Storybook), use it instead
    const displayEdificio = edificioData || edificio

    if (loading) {
        return <div className="p-8 text-center">Cargando detalles...</div>
    }

    if (error || !displayEdificio) {
        return <div className="p-8 text-center">{error || "Edificio no encontrado"}</div>
    }

    // Mapping API fields to component expectations if necessary
    // const displayData = {
    //     nombre: edificio.name || edificio.nombre,
    //     imagen: edificio.photo || edificio.imagen,
    //     precio: edificio.price || edificio.precio,
    //     categoria: edificio.category || edificio.categoria,
    //     descripcion: edificio.description || edificio.descripcion
    // }

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
            <h2 className='contenedor_h2'>{displayEdificio.name}</h2>
            <img
                src={displayEdificio.photo || PLACEHOLDER_IMAGE}
                alt={displayEdificio.name}
                style={{ maxWidth: '900px', display: 'block', margin: '20px auto', borderRadius: '12px' }}
                onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = PLACEHOLDER_IMAGE;
                }}
            />
            <h3 className='contenedor_h3'>Precio: ${displayEdificio.price?.toLocaleString()}</h3>
            <h4 className='contenedor_h4'>Categoría: {displayEdificio.category}</h4>
            <p className='contenedor_p'>{displayEdificio.description}</p>

            {userLogged && (
                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <button
                        onClick={async () => {
                            if (window.confirm(`¿Estás seguro de que deseas eliminar "${displayEdificio.name}"?`)) {
                                const success = await removeProduct(id);
                                if (success) {
                                    navigate('/edificios');
                                }
                            }
                        }}
                        disabled={deleting}
                        className="delete-button"
                        style={{
                            backgroundColor: 'var(--color-error)',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        {deleting ? "Eliminando..." : "Eliminar este Edificio"}
                    </button>
                </div>
            )}
        </Section>
    )
}

export default DetalleEdificio;
