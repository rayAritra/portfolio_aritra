import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            Aritra
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'services', 'projects', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-gray-600 hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" // Path to the resume in the public folder
              download="Aritra_Ray_Resume.pdf" // Suggested filename for download
              className="gradient-bg text-white px-6 py-2 rounded-full block"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4"
          >
            {['about', 'services', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a
              href="/resume.pdf" // Path to the resume in the public folder
              download="Aritra_Ray_Resume.pdf" // Suggested filename for download
              className="w-full gradient-bg text-white px-6 py-2 rounded-full mt-4 block"
            >
              Resume
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
