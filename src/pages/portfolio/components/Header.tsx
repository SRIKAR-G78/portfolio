
import { useState, useEffect } from 'react';
import ThemeToggle from '../../../components/ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-lg backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer"
          >
            <h1 
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}
              style={{ fontFamily: '"Pacifico", serif' }}
            >
              PRAVEEN
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle 
              className={`${
                isScrolled 
                  ? 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700' 
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
              }`}
            />
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}
          >
            <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t dark:border-gray-700">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 py-3 flex items-center justify-between">
                <ThemeToggle className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700" />
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  Get In Touch
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
