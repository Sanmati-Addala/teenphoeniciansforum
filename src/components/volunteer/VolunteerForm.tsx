import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Heart } from 'lucide-react';
import { useVolunteerApplications } from '../../hooks/useVolunteerApplications';
import { useAuth } from '../../hooks/useAuth';

const preferredAreasOptions = [
  'Mental Health Awareness',
  'Peer Support',
  'Event Organization',
  'Content Creation',
  'Social Media Management',
  'Workshop Facilitation',
  'Community Outreach',
  'Research & Writing'
];

export const VolunteerForm: React.FC = () => {
  const { submitApplication, application, hasApplication } = useVolunteerApplications();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    full_name: '',
    email_address: user?.email || '',
    contact_number: '',
    preferred_areas: [] as string[],
    availability: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // If user already has an application, show status
  if (hasApplication) {
    return (
      <div className="diary-card max-w-2xl mx-auto">
        <div className="text-center py-8">
          <div className="inline-block p-4 bg-primary-100 rounded-full mb-6">
            <Heart className="w-12 h-12 text-primary-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
            Application Submitted
          </h3>
          <p className="text-neutral-600 mb-4">
            Thank you for your interest in volunteering! Your application is currently{' '}
            <span className={`font-semibold ${
              application?.status === 'approved' ? 'text-success-600' :
              application?.status === 'rejected' ? 'text-error-600' :
              'text-warning-600'
            }`}>
              {application?.status}
            </span>.
          </p>
          {application?.status === 'pending' && (
            <p className="text-neutral-600">
              We'll review your application and get back to you soon.
            </p>
          )}
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.full_name.trim() || !formData.email_address.trim() || formData.preferred_areas.length === 0) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await submitApplication(formData);
      if (result.success) {
        setSubmitSuccess(true);
      } else {
        setError(result.error || 'Failed to submit application');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreferredAreaChange = (area: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferred_areas: checked 
        ? [...prev.preferred_areas, area]
        : prev.preferred_areas.filter(a => a !== area)
    }));
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="diary-card text-center p-8">
          <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-success-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
            Application Submitted!
          </h3>
          <p className="text-neutral-600 mb-6">
            Thank you for your interest in volunteering with Teen Phoenicians. 
            We'll review your application and contact you within 5-7 business days.
          </p>
          <p className="text-neutral-600">
            In the meantime, feel free to explore our resources and join our community discussions.
          </p>
        </div>
      </motion.div>
    );
  }
    
  return (
    <div className="max-w-2xl mx-auto">
      <div className="diary-card p-8">
        <h3 className="text-2xl font-semibold mb-6 text-neutral-800 text-center">
          Volunteer Application
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-neutral-700 mb-2">
              Full Name *
            </label>
            <input
              id="full_name"
              type="text"
              value={formData.full_name}
              onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email_address" className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address *
              </label>
              <input
                id="email_address"
                type="email"
                value={formData.email_address}
                onChange={(e) => setFormData(prev => ({ ...prev, email_address: e.target.value }))}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contact_number" className="block text-sm font-medium text-neutral-700 mb-2">
                Phone Number
              </label>
              <input
                id="contact_number"
                type="tel"
                value={formData.contact_number}
                onChange={(e) => setFormData(prev => ({ ...prev, contact_number: e.target.value }))}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Your phone number"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-3">
              Preferred Areas (Select all that apply) *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {preferredAreasOptions.map((area) => (
                <label key={area} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.preferred_areas.includes(area)}
                    onChange={(e) => handlePreferredAreaChange(area, e.target.checked)}
                    className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <span className="text-sm text-neutral-700">{area}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-neutral-700 mb-2">
              Availability
            </label>
            <textarea
              id="availability"
              rows={3}
              value={formData.availability}
              onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
              placeholder="Please describe your availability (days, times, frequency, etc.)"
            />
          </div>
          
          {error && (
            <div className="bg-error-50 border border-error-200 text-error-700 p-4 rounded-lg">
              {error}
            </div>
          )}
          
          <div className="text-center pt-4">
            <Button 
              type="submit" 
              variant="secondary" 
              className="px-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};