import { motion, AnimatePresence } from 'framer-motion';
import { User, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function MobileMenu({ isOpen, onClose, navItems }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-(--color-background-secondary) z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* User Actions */}
              <div className="flex flex-col gap-3 mb-8">
                <Button variant="secondary" size="md" className="w-full">
                  <User style={{ width: '20px', height: '20px', marginRight: '0.5rem' }} />
                  Login
                </Button>
                <Button variant="primary" size="md" className="w-full">
                  Join Now
                </Button>
              </div>
              
              {/* Navigation */}
              <nav className="flex flex-col gap-1 mb-8">
                <div className="text-(--color-text-secondary) text-xs uppercase font-semibold mb-3 px-4">
                  Main Menu
                </div>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-(--color-text) hover:bg-(--color-card) rounded-sm transition-colors"
                    onClick={onClose}
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="bg-(--color-accent) text-(--color-text) text-xs px-2 py-0.5 rounded-sm">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </nav>
              
              {/* Additional Links */}
              <div className="flex flex-col gap-1 pt-6 border-t border-(--color-border)">
                <div className="text-(--color-text-secondary) text-xs uppercase font-semibold mb-3 px-4">
                  Others
                </div>
                <a href="#faq" className="px-4 py-3 text-(--color-text) hover:bg-(--color-card) rounded-sm transition-colors" onClick={onClose}>
                  FAQ
                </a>
                <a href="#chat" className="flex items-center gap-2 px-4 py-3 text-(--color-text) hover:bg-(--color-card) rounded-sm transition-colors" onClick={onClose}>
                  <MessageCircle style={{ width: '18px', height: '18px' }} />
                  Live Chat
                </a>
                <a href="#app" className="px-4 py-3 text-(--color-text) hover:bg-(--color-card) rounded-sm transition-colors" onClick={onClose}>
                  Download App
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
