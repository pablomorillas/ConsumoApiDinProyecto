function Card({ children }) {
  return (
    <div className="card" role="article" tabIndex="0">
      {children}
    </div>
  )
}

export default Card
