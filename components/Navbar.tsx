
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80; // Fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', id);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Locations', href: '#locations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
              <img src={LOGO_URL} alt="Insights Advisory" className="h-16 sm:h-20 w-auto transition-all duration-300 cursor-pointer" />
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium uppercase tracking-wider hover:text-teal-600 transition-colors ${isScrolled ? 'text-slate-800' : 'text-white drop-shadow-md'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
