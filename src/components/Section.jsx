/* import { useState } from 'react' */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function Section({ children }) {
  return (
      <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
        {children}
      </section>
  )
}

export default Section