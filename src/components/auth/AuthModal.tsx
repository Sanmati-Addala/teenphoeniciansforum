import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'signin' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultMode = 'signin' 
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Basic validation
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    if (mode === 'signup' && !displayName.trim()) {
      setError('Please enter a display name');
      setLoading(false);
      return;
    }

    try {
      if (mode === 'signup') {
        console.log('Attempting signup with:', { email, displayName });
        const { data, error } = await signUp(email, password, displayName);
        if (error) {
          console.error('Signup error:', error);
          setError(error.message || 'Failed to create account');
        } else {
          console.log('Signup successful:', data);
          // Don't close modal immediately, let the auth state change handle it
        }
      } else {
        console.log('Attempting signin with:', { email });
        const { data, error } = await signIn(email, password);
        if (error) {
          console.error('Signin error:', error);
          setError(error.message || 'Failed to sign in');
        } else {
          console.log('Signin successful:', data);
          // Don't close modal immediately, let the auth state change handle it
        }
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setDisplayName('');
    setError(null);
    setShowPassword(false);
  };

  const switchMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <img 
                src="/2528b085-58e9-4d94-a007-1144ac733de0__1_-removebg-preview (1).png" 
                alt="Teen Phoenicians Logo" 
                className="h-12 w-auto" 
              />
            </div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-2">
              {mode === 'signin' ? 'Welcome Back' : 'Join Teen Phoenicians'}
            </h2>
            <p className="text-neutral-600">
              {mode === 'signin' 
                ? 'Sign in to share your story and connect with others' 
                : 'Create an account to start sharing your journey'
              }
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-error-50 border border-error-200 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 text-error-500 mr-2 flex-shrink-0" />
              <span className="text-error-700 text-sm">{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label htmlFor="displayName" className="block text-sm font-medium text-neutral-700 mb-1">
                  Display Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                  <input
                    id="displayName"
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="How should we call you?"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {mode === 'signup' && (
                <p className="text-xs text-neutral-500 mt-1">
                  Password must be at least 6 characters long
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full py-3"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Please wait...
                </div>
              ) : (
                mode === 'signin' ? 'Sign In' : 'Create Account'
              )}
            </Button>
          </form>

          {/* Switch Mode */}
          <div className="text-center mt-6">
            <p className="text-neutral-600">
              {mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={switchMode}
                className="ml-1 text-primary-600 hover:text-primary-700 font-medium"
                disabled={loading}
              >
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Debug Info (remove in production) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-2 bg-gray-100 rounded text-xs">
              <p>Debug: Mode = {mode}</p>
              <p>Debug: Loading = {loading.toString()}</p>
              <p>Debug: Error = {error || 'none'}</p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};