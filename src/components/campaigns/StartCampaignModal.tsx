import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../hooks/useAuth';

interface StartCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StartCampaignModal: React.FC<StartCampaignModalProps> = ({ isOpen, onClose }) => {
  const [showTerms, setShowTerms] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    objective: '',
    plan: '',
    supportNeeded: [] as string[],
    duration: '',
    targetAudience: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const { user } = useAuth();

  const supportOptions = [
    'Volunteer coordination',
    'Resource materials',
    'Social media promotion',
    'Expert guidance',
    'Venue assistance',
    'Funding support'
  ];

  const handleSupportToggle = (support: string) => {
    setFormData(prev => ({
      ...prev,
      supportNeeded: prev.supportNeeded.includes(support)
        ? prev.supportNeeded.filter(s => s !== support)
        : [...prev.supportNeeded, support]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('campaigns')
        .insert([{
          title: formData.title,
          description: `${formData.objective}\n\nPlan: ${formData.plan}\n\nDuration: ${formData.duration}\nTarget Audience: ${formData.targetAudience}`,
          support_needed: formData.supportNeeded,
          status: 'planned'
        }]);

      if (error) throw error;

      setSuccess(true);
      setTimeout(() => {
        onClose();
        resetForm();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create campaign');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setShowTerms(false);
    setFormData({
      title: '',
      objective: '',
      plan: '',
      supportNeeded: [],
      duration: '',
      targetAudience: ''
    });
    setError(null);
    setSuccess(false);
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
      resetForm();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-neutral-800">Start Your Campaign</h2>
              <button
                onClick={handleClose}
                disabled={loading}
                className="text-neutral-400 hover:text-neutral-600 disabled:opacity-50"
              >
                <X size={24} />
              </button>
            </div>

            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Campaign Proposal Submitted!
                </h3>
                <p className="text-neutral-600">
                  Thank you for your initiative! We'll review your proposal and get back to you soon.
                </p>
              </div>
            ) : !showTerms ? (
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Terms & Conditions</h3>
                <div className="bg-neutral-50 p-6 rounded-lg mb-6 max-h-64 overflow-y-auto">
                  <div className="space-y-4 text-sm text-neutral-700">
                    <p><strong>1. Campaign Guidelines:</strong> All campaigns must align with Teen Phoenicians' mission of mental health awareness and support.</p>
                    <p><strong>2. Content Standards:</strong> Campaign content must be appropriate, respectful, and focused on positive mental health outcomes.</p>
                    <p><strong>3. Support Commitment:</strong> Teen Phoenicians will provide guidance and resources but cannot guarantee specific outcomes.</p>
                    <p><strong>4. Volunteer Safety:</strong> All activities must prioritize the safety and wellbeing of participants and volunteers.</p>
                    <p><strong>5. Reporting:</strong> Campaign organizers must provide regular updates and final reports on campaign activities.</p>
                    <p><strong>6. Compliance:</strong> All campaigns must comply with local laws and regulations.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1"
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setShowTerms(true)}
                    className="flex-1"
                    disabled={loading}
                  >
                    I Agree, Continue
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Campaign Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your campaign title"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Campaign Objective *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.objective}
                    onChange={(e) => setFormData(prev => ({ ...prev, objective: e.target.value }))}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Describe the main objective of your campaign"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Campaign Plan *
                  </label>
                  <textarea
                    rows={6}
                    value={formData.plan}
                    onChange={(e) => setFormData(prev => ({ ...prev, plan: e.target.value }))}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Provide a detailed plan of your campaign activities, timeline, and expected outcomes"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Type of Support Needed *
                  </label>
                  <div className="space-y-2">
                    {supportOptions.map((support) => (
                      <label key={support} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.supportNeeded.includes(support)}
                          onChange={() => handleSupportToggle(support)}
                          className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                          disabled={loading}
                        />
                        <span className="text-sm text-neutral-700">{support}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Expected Duration
                    </label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., 1 week, 1 month"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Target Audience
                    </label>
                    <input
                      type="text"
                      value={formData.targetAudience}
                      onChange={(e) => setFormData(prev => ({ ...prev, targetAudience: e.target.value }))}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., High school students"
                      disabled={loading}
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-error-50 border border-error-200 text-error-700 p-4 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowTerms(false)}
                    className="flex-1"
                    disabled={loading}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    className="flex-1"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit Campaign Proposal'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};