import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PenLine, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { usePetitions } from '../../hooks/usePetitions';

interface CreatePetitionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatePetitionModal: React.FC<CreatePetitionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    petition_url: '',
    goal: 1000,
    category: 'Education'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const { createPetition } = usePetitions();

  const categories = ['Education', 'Healthcare', 'Community', 'Policy', 'Environment', 'Social Justice'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await createPetition(formData);
      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setFormData({
            title: '',
            description: '',
            petition_url: '',
            goal: 1000,
            category: 'Education'
          });
        }, 2000);
      } else {
        setError(result.error || 'Failed to create petition');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
      setError(null);
      setSuccess(false);
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
          className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-neutral-800">Create New Petition</h2>
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
                  <PenLine className="w-8 h-8 text-success-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Petition Created Successfully!
                </h3>
                <p className="text-neutral-600">
                  Your petition has been created and is now live. Thank you for taking action!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Petition Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter a clear, compelling title"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Explain why this petition matters and what change you want to see"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Petition URL *
                  </label>
                  <input
                    type="url"
                    value={formData.petition_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, petition_url: e.target.value }))}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://change.org/your-petition"
                    required
                    disabled={loading}
                  />
                  <p className="text-sm text-neutral-500 mt-1">
                    Link to your petition on Change.org, Care2, or another petition platform
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                      disabled={loading}
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Signature Goal *
                    </label>
                    <input
                      type="number"
                      min="100"
                      max="1000000"
                      value={formData.goal}
                      onChange={(e) => setFormData(prev => ({ ...prev, goal: parseInt(e.target.value) }))}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
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
                    onClick={handleClose}
                    className="flex-1"
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="secondary"
                    className="flex-1"
                    disabled={loading}
                  >
                    {loading ? 'Creating...' : 'Create Petition'}
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