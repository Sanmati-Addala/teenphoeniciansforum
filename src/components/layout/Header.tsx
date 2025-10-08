import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Share', path: '/share' },
  { name: 'Journey', path: '/journey' },
  { name: 'Awareness', path: '/awareness' },
  { name: 'Magazine', path: '/magazine' },
  { name: 'Campaigns', path: '/campaigns' },
  { name: 'Petitions', path: '/petitions' },
  { name: 'Volunteer', path: '/volunteer' },
  { name: 'Calendar', path: '/calendar' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowUserMenu(false);
  }, [location]);

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/2528b085-58e9-4d94-a007-1144ac733de0__1_-removebg-preview (1).png" 
            alt="Teen Phoenicians Logo" 
            className="h-8 w-auto mr-2" 
          />
          <span className="font-handwriting font-bold text-2xl text-secondary-700">
            Teen Phoenicians
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium text-sm transition-colors ${
                location.pathname === item.path
                  ? 'text-secondary-600'
                  : 'text-neutral-600 hover:text-secondary-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* User Menu - Desktop */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 text-neutral-600 hover:text-secondary-500 transition-colors"
            >
              <User size={20} />
              <span className="text-sm font-medium">
                {user?.user_metadata?.display_name || 'Account'}
              </span>
            </button>
            
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 z-50"
                >
                  <div className="px-4 py-2 border-b border-neutral-100">
                    <p className="text-sm font-medium text-neutral-800">
                      {user?.user_metadata?.display_name || 'Anonymous'}
                    </p>
                    <p className="text-xs text-neutral-500">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-2 text-left text-sm text-neutral-600 hover:bg-neutral-50 flex items-center space-x-2"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium py-2 border-b border-neutral-100 ${
                    location.pathname === item.path
                      ? 'text-secondary-600'
                      : 'text-neutral-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile User Menu */}
              <div className="border-t border-neutral-100 pt-4 mt-4">
                <div className="px-2 py-2 mb-2">
                  <p className="text-sm font-medium text-neutral-800">
                    {user?.user_metadata?.display_name || 'Anonymous'}
                  </p>
                  <p className="text-xs text-neutral-500">{user?.email}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full px-2 py-2 text-left text-neutral-600 flex items-center space-x-2"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};