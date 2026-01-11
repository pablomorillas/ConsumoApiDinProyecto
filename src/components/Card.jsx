/**
 * Functional component that acts as a generic card container.
 * Wraps children elements with specific styling and accessibility attributes.
 *
 * @component
 * @example
 * return (
 *   <Card>
 *     <h2>Title</h2>
 *     <p>Description</p>
 *   </Card>
 * )
 */
function Card({ children }) {
  return (
    <div className="card" role="article" tabIndex="0">
      {children}
    </div>
  )
}

export default Card
