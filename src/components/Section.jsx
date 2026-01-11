/* import { useState } from 'react' */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

/**
 * Functional component that renders a section wrapper with centered text style.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the section
 */
function Section({ children }) {
  return (
    <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
      {children}
    </section>
  )
}

export default Section