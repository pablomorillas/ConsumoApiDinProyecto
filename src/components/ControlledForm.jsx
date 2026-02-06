import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/index.css";
import { useCreateProduct } from '../hook/useCreateProductos';

/**
 * Functional component that renders a form to create a new building.
 * Handles form state, validation, and submission.
 *
 * @component
 */
function BuildingForm() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        categoria: "",
        imagen: "",
    });

    const [validationErrors, setValidationErrors] = useState({});
    const { addProduct, loading, error: apiError } = useCreateProduct();

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};

        // Validations
        if (formData.nombre.trim().length < 5) {
            newErrors.nombre = "El nombre debe tener al menos 5 caracteres.";
        }

        if (formData.descripcion.trim().length < 10) {
            newErrors.descripcion = "La descripción debe ser más detallada (+10 letras).";
        }

        const precioNum = Number(formData.precio);
        if (!formData.precio || precioNum <= 0) {
            newErrors.precio = "El precio debe ser un número positivo.";
        }

        if (!formData.categoria) {
            newErrors.categoria = "Selecciona una categoría válida.";
        }

        if (Object.keys(newErrors).length > 0) {
            setValidationErrors(newErrors);
            return;
        }

        // Envío de datos real
        setValidationErrors({});

        const ok = await addProduct(formData);

        if (ok) {
            alert(`¡El edificio "${formData.nombre}" se ha guardado correctamente!`);

            // Reset form
            setFormData({
                nombre: "",
                descripcion: "",
                precio: "",
                categoria: "",
                imagen: "",
            });

            if (fileInputRef.current) fileInputRef.current.value = null;
            navigate("/edificios");
        }
    };

    return (
        <div className="form-container box">
            <h2 className='contenedor_h2'>Añadir Nuevo Edificio</h2>

            <form onSubmit={handleSubmit} className="flex-col">

                {/* Nombre */}
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        id="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder='Introduce el nombre (min 5 letras)'
                        className={validationErrors.nombre ? "input-error" : ""}
                    />
                    {validationErrors.nombre && <span className="error-message">{validationErrors.nombre}</span>}
                </div>

                {/* Descripción */}
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        placeholder='Introduce una descripción (min 10 letras)'
                        className={validationErrors.descripcion ? "input-error" : ""}
                        rows="3"
                    />
                    {validationErrors.descripcion && <span className="error-message">{validationErrors.descripcion}</span>}
                </div>

                {/* Precio */}
                <div className="form-group">
                    <label htmlFor="precio">Precio (€):</label>
                    <input
                        id="precio"
                        type="number"
                        placeholder='Introduce un precio positivo'
                        value={formData.precio}
                        onChange={handleChange}
                        className={validationErrors.precio ? "input-error" : ""}
                    />
                    {validationErrors.precio && <span className="error-message">{validationErrors.precio}</span>}
                </div>

                {/* Categoría */}
                <div className="form-group">
                    <label htmlFor="categoria">Categoría:</label>
                    <select
                        id="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        className={validationErrors.categoria ? "input-error" : ""}
                    >
                        <option value="" disabled>Seleccione una categoría</option>
                        <option value="residencial">Residencial</option>
                        <option value="oficinas">Oficinas</option>
                        <option value="comercial">Comercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="mixto">Mixto</option>
                    </select>
                    {validationErrors.categoria && <span className="error-message">{validationErrors.categoria}</span>}
                </div>

                {/* Imagen */}
                <div className="form-group">
                    <label htmlFor="imagen">URL de Imagen:</label>
                    <input
                        id="imagen"
                        type="text"
                        value={formData.imagen}
                        onChange={handleChange}
                        placeholder="../res/ejemplo.jpg"
                    />
                </div>

                {apiError && (
                    <p role="alert" className="mt-4 text-sm text-red-600">
                        {apiError}
                    </p>
                )}
                <button type="submit" className="mt-4">
                    {loading ? "Guardando..." : "Crear Edificio"}
                </button>
            </form>
        </div>
    );
}

export default BuildingForm;