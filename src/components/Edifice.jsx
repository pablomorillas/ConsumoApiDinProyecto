// Componente funcional que representa un edificio
// Muestra nombre, imagen, precio, categoría y descripción
function Edifice({ nombre, foto, precio, descripcion, categoria }) {
  return (
    <>
      {/* Imagen del edificio con texto alternativo para accesibilidad */}
      <figure>
        <img 
          src={foto} 
          alt={`${nombre} - Categoría: ${categoria}`}
        />
      </figure>

      {/* Información textual del edificio */}
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
