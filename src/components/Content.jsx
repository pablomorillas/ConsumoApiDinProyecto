import { Outlet } from "react-router-dom";

/**
 * Functional component that serves as the main layout for child pages.
 * Renders nested routes content using <Outlet />.
 * 
 * @component
 */
function Content() {
  return (
    <main
      id="main-content"          // ID for accessibility and skip-to-content links
      role="main"                // Defines the main landmark for screen readers
      tabIndex="-1"              // Allows the main element to strictly receive programmatic focus
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-start p-8 pt-6 gap-8"
    >
      {/* Renders the content of child routes */}
      <Outlet />
    </main>
  )
}

export default Content;
