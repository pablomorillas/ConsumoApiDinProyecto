/**
 * Functional component representing the page footer.
 * Displays reserved rights and social media links.
 *
 * @component
 */
export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-grey-5)] text-secondary p-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Text with reserved rights and current year */}
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>

        {/* Social media links with hover effect */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
