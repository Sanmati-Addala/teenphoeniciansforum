import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { AuthModal } from './AuthModal';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    console.log('AuthGuard state:', { loading, isAuthenticated, user: user?.email });
    
    if (!loading && !isAuthenticated) {
      setShowAuthModal(true);
    } else if (!loading && isAuthenticated) {
      setShowAuthModal(false);
    }
  }, [loading, isAuthenticated, user]);

  // Show loading screen while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show welcome screen and auth modal if not authenticated
  if (!isAuthenticated) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="text-center max-w-md mx-auto p-6">
            <img 
              src="/2528b085-58e9-4d94-a007-1144ac733de0__1_-removebg-preview (1).png" 
              alt="Teen Phoenicians Logo" 
              className="h-16 w-auto mx-auto mb-6" 
            />
            <h1 className="text-3xl font-bold text-neutral-800 mb-4">
              Welcome to Teen Phoenicians
            </h1>
            <p className="text-neutral-600 mb-6">
              A safe space for teens to share their stories and connect with others who understand.
            </p>
            <p className="text-sm text-neutral-500">
              Please sign in or create an account to continue.
            </p>
          </div>
        </div>
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => {}} // Can't close without authentication
          defaultMode="signup"
        />
      </>
    );
  }

  // Show main app if authenticated
  return <>{children}</>;
};