import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Light mode icon */}
      <i 
        className={`ri-sun-line text-xl transition-all duration-300 ${
          theme === 'light' 
            ? 'text-yellow-500 scale-100 opacity-100' 
            : 'text-gray-400 scale-75 opacity-0'
        }`}
      />
      
      {/* Dark mode icon */}
      <i 
        className={`ri-moon-line text-xl transition-all duration-300 absolute ${
          theme === 'dark' 
            ? 'text-blue-400 scale-100 opacity-100' 
            : 'text-gray-400 scale-75 opacity-0'
        }`}
      />
    </button>
  );
} 