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
import Card from "./Card.jsx";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400/e5e7eb/6b7280?text=Sin+Imagen";

function Edifice({ name, photo, price, description, category }) {
  return (
    <Card>
      {/* Building image with alt text for accessibility */}
      <figure>
        <img
          src={photo || PLACEHOLDER_IMAGE}
          alt={`${name} - Category: ${category}`}
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = PLACEHOLDER_IMAGE;
          }}
        />
      </figure>

      {/* Building text information */}
      <header tabIndex="0">
        <h2>{name}</h2>
        <p className="price">Precio: ${price?.toLocaleString()}</p>
        <p>Categoría: {category}</p>
        <p className="description-preview">{description}</p>
      </header>
    </Card>
  );
}

// Exporta el componente para usarlo en otras partes de la aplicación
export default Edifice;
