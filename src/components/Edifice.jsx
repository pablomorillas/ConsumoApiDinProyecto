/**
 * Functional component representing a building card.
 * Displays name, image, price, category, and description.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.nombre - The name of the building
 * @param {string} props.foto - URL of the building's image
 * @param {number} props.precio - Price of the building
 * @param {string} props.descripcion - Description of the building
 * @param {string} props.categoria - Category (e.g., residential, commercial)
 */
function Edifice({ nombre, foto, precio, descripcion, categoria }) {
  return (
    <>
      {/* Building image with alt text for accessibility */}
      <figure>
        <img
          src={foto}
          alt={`${nombre} - Category: ${categoria}`}
        />
      </figure>

      {/* Building text information */}
      <header tabIndex="0">
        <h2>{nombre}</h2>
        <p className="price">Precio: ${precio.toLocaleString()}</p>
        <p>Categoría: {categoria}</p>
        <p>{descripcion}</p>
      </header>
    </>
  );
}

// Exporta el componente para usarlo en otras partes de la aplicación
export default Edifice;
