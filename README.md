# Proyecto de Listado de Edificios

## Descripción

Esta aplicación es un **sitio web React** que muestra un listado de edificios con detalles individuales. Está diseñada para ser **accesible, responsiva y fácil de usar**, siguiendo buenas prácticas de desarrollo web moderno.

La aplicación incluye:

- Página de inicio (`HomePage`)  
- Listado de edificios (`BuildingPage`)  
- Página de detalle de cada edificio (`DetalleEdificios`)  
- Panel de administración (`AdminPage`)  
- Navegación principal (`Nav`) y pie de página (`Footer`)  
- Layout principal (`Content`) que organiza las rutas hijas mediante `<Outlet />`  

---

## Tecnologías utilizadas

- **React 18**  
- **React Router v6** para la gestión de rutas  
- **Tailwind CSS** para estilos y diseño responsivo  
- **CSS variables** para colores y tipografía  
- Estructura de componentes modular (Card, Edifice, Section, Footer, etc.)  

---

## Estructura del proyecto

```bash
src/
├─ components/
│ ├─ Card.jsx
│ ├─ Edifice.jsx
│ ├─ Nav.jsx
│ ├─ Footer.jsx
│ ├─ Section.jsx
│ └─ Content.jsx
├─ pages/
│ ├─ HomePage.jsx
│ ├─ AdminPage.jsx
│ ├─ BuildingPage.jsx
│ └─ DetalleEdificios.jsx
├─ data/
│ └─ edifices.js
├─ assets/
│ ├─ theme.css
│ └─ index.css
└─ App.jsx

```


---

## Características de la aplicación

### Navegación

- Barra de navegación fija con enlaces a Inicio, Edificios y Admin  
- Menú hamburguesa para dispositivos móviles  
- Enlaces accesibles con botones dentro de `<Link>` para garantizar interacción y estilos consistentes  

### Listado de edificios

- Cada edificio se muestra mediante el componente `Edifice` dentro de un `Card`  
- Información: nombre, foto, precio, categoría y descripción  
- Cada edificio es enlazable a su detalle individual  

### Página de detalle

- Muestra toda la información del edificio seleccionado  
- Botón “Volver” que regresa a la página anterior usando `useNavigate()`  
- Imagen con texto alternativo (`alt`) para accesibilidad  

### Footer

- Visible en todas las páginas  
- Muestra derechos reservados y enlaces a redes sociales  
- Fondo con color gris claro definido por variables CSS  

---

## Accesibilidad y Usabilidad

La aplicación incorpora varias **prácticas de accesibilidad (a11y)** y usabilidad:

1. **Landmarks semánticos**: `<main>`, `<header>`, `<footer>` correctamente utilizados  
2. **Navegación por teclado**: `tabIndex="0"` en elementos clave y botones dentro de `<Link>`  
3. **Texto alternativo**: Todas las imágenes incluyen `alt` descriptivos  
4. **Contraste y legibilidad**: Colores primarios y secundarios bien definidos con variables CSS  
5. **Responsividad**: Layout adaptativo con Tailwind; menú hamburguesa para móviles  
6. **Feedback visual**: Hover y transiciones suaves (`transition-colors`) en enlaces y botones  

## Reflexión técnica en despliegue

**¿Dónde está desplegada cada parte? ¿Qué problemas has encontrado durante el despliegue?**

- La parte del frontEnd se ha deslpegado en Vercel.

- La parte del backEnd se ha desplegado en Render.

- Los problemas que he encontrado durante el despliegue han sido:

  - En el frontEnd no he encontrado demasiados problemas, solo fue que a veces no encontraba los productos, pero lo solucioné cambiando la url de la api.

  - En el backEnd he encontrado problemas con la base de datos, ya que no se conectaba con la aplicación. Lo solucioné cambiando la url de la api.

  - Cabe destacar que he tenido problemas de espacio debido a intentar hacer la aplicación de escritorio con Tauri, aunque no fuera un problema como tal del proyecto, me ocupaba mucho espacio en el disco duro.

**Qué diferencias existen entre web y escritorio**

- **¿Qué ventajas tiene el despliegue web frente al de escritorio?**

  - La principal ventaja, es que no requiere de una instalación, se puede acceder desde cualquier dispositivo con navegador y acceso a internet.

  - Otra ventaja es que se puede actualizar la aplicación sin necesidad de que los usuarios instalen nada.

- **¿Por qué Electron no sustituye a una web?**

  - Por lo mencionado anteriormente, la web es mas accesible y no requiere de una instalación, además que en tema de actualizaciones es más sencillo.