import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/2528b085-58e9-4d94-a007-1144ac733de0__1_-removebg-preview (1).png" 
                alt="Teen Phoenicians Logo" 
                className="h-6 w-auto mr-2" 
              />
              <span className="font-handwriting text-xl font-bold text-secondary-700">
                Teen Phoenicians
              </span>
            </div>
            <p className="text-neutral-600 mb-4 max-w-md">
              A safe space for teens to share their struggles anonymously, 
              feel seen, and find community through mental health awareness.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/phoeniciansteen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-secondary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-neutral-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-600 hover:text-secondary-500">Home</Link></li>
              <li><Link to="/share" className="text-neutral-600 hover:text-secondary-500">Share Your Story</Link></li>
              <li><Link to="/awareness" className="text-neutral-600 hover:text-secondary-500">Awareness & Tips</Link></li>
              <li><Link to="/magazine" className="text-neutral-600 hover:text-secondary-500">Magazine</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-neutral-800 mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link to="/campaigns" className="text-neutral-600 hover:text-secondary-500">Campaigns</Link></li>
              <li><Link to="/volunteer" className="text-neutral-600 hover:text-secondary-500">Volunteer</Link></li>
              <li><Link to="/contact" className="text-neutral-600 hover:text-secondary-500">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Teen Phoenicians. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm flex items-center">
            Made with <Heart size={14} className="text-secondary-500 mx-1" /> for teens everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};