import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { label: 'Promotion', href: '#promotion', badge: 'Hot' },
    { label: 'Betting Pass', href: '#betting-pass' },
    { label: 'Referral', href: '#referral' },
    { label: 'Agent Affiliate', href: '#agent' },
  ];
  
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-(--color-background-secondary) shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-2">
                <div className="text-3xl font-bold">
                  <span className="text-(--color-primary)">BABU</span>
                  <span className="text-(--color-text)">88</span>
                </div>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-(--color-text) hover:text-(--color-primary) transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                  {item.badge && (
                    <span className="absolute -top-2 -right-8 bg-(--color-accent) text-(--color-text) text-xs px-2 py-0.5 rounded-sm">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>
            
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-(--color-card) rounded-sm">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="INR"
                  className="w-6 h-4 object-cover"
                />
                <span className="text-sm text-(--color-text)">INR</span>
              </div>
              <Button variant="secondary" size="sm">
                <User style={{ width: '18px', height: '18px', marginRight: '0.5rem' }} />
                Login
              </Button>
              <Button variant="primary" size="sm">
                Join Now
              </Button>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-(--color-text) hover:text-(--color-primary) transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X style={{ width: '28px', height: '28px' }} />
              ) : (
                <Menu style={{ width: '28px', height: '28px' }} />
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navItems={navItems} />
    </>
  );
}
