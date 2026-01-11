import { useState } from 'react';
import "../assets/index.css";

/**
 * Functional component that renders a form to create a new building.
 * Handles form state, validation, and submission simulation.
 *
 * @component
 */
function BuildingForm() {

    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        categoria: "",
        imagen: "",
    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
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

        // Validación opcional para imagen, solo si no está vacía checkear formato
        // Si es obligatoria: (!formData.imagen) ...

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        // Simulación de envío
        setError({});
        console.log("Nuevo Edificio:", formData);
        alert("Edificio 'creado' correctamente (revisar consola)");

        // Reset form opcional
        // setFormData({...});
    };


    return (
        <div className="form-container box">
            <h2 className='contenedor_h2'>Añadir Nuevo Edificio</h2>

            <form onSubmit={handleSubmit} className="flex-col">

                {/* Nombre */}
                <div className="form-group">
                    <label htmlFor="nombre">Nombre (min 5 letras):</label>
                    <input
                        id="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={error.nombre ? "input-error" : ""}
                    />
                    {error.nombre && <span className="error-message">{error.nombre}</span>}
                </div>

                {/* Descripción */}
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        className={error.descripcion ? "input-error" : ""}
                        rows="3"
                    />
                    {error.descripcion && <span className="error-message">{error.descripcion}</span>}
                </div>

                {/* Precio */}
                <div className="form-group">
                    <label htmlFor="precio">Precio (€):</label>
                    <input
                        id="precio"
                        type="number"
                        value={formData.precio}
                        onChange={handleChange}
                        className={error.precio ? "input-error" : ""}
                    />
                    {error.precio && <span className="error-message">{error.precio}</span>}
                </div>

                {/* Categoría */}
                <div className="form-group">
                    <label htmlFor="categoria">Categoría:</label>
                    <select
                        id="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        className={error.categoria ? "input-error" : ""}
                    >
                        <option value="">-- Seleccionar --</option>
                        <option value="residencial">Residencial</option>
                        <option value="oficinas">Oficinas</option>
                        <option value="comercial">Comercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="mixto">Mixto</option>
                    </select>
                    {error.categoria && <span className="error-message">{error.categoria}</span>}
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



                <button type="submit" className="mt-4">Crear Edificio</button>
            </form>
        </div>
    );
}

export default BuildingForm;