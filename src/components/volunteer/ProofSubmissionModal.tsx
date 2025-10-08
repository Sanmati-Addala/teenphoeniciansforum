import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Link as LinkIcon, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { useProofSubmissions } from '../../hooks/useProofSubmissions';

interface ProofSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  activityId: string | null;
}

export const ProofSubmissionModal: React.FC<ProofSubmissionModalProps> = ({ 
  isOpen, 
  onClose, 
  activityId 
}) => {
  const [proofType, setProofType] = useState<'file' | 'link'>('link');
  const [proofUrl, setProofUrl] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const { submitProof } = useProofSubmissions();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activityId) return;

    setLoading(true);
    setError(null);

    try {
      const result = await submitProof(activityId, {
        proof_type: proofType,
        proof_url: proofUrl,
        description: description || undefined
      });

      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          resetForm();
        }, 2000);
      } else {
        setError(result.error || 'Failed to submit proof');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setProofType('link');
    setProofUrl('');
    setDescription('');
    setError(null);
    setSuccess(false);
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
      resetForm();
    }
  };

  if (!isOpen || !activityId) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-xl shadow-2xl w-full max-w-md"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-neutral-800">Submit Activity Proof</h2>
              <button
                onClick={handleClose}
                disabled={loading}
                className="text-neutral-400 hover:text-neutral-600 disabled:opacity-50"
              >
                <X size={20} />
              </button>
            </div>

            {success ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-success-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Proof Submitted!
                </h3>
                <p className="text-neutral-600 text-sm">
                  Your proof has been submitted for verification. Thank you for your contribution!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Proof Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setProofType('link')}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        proofType === 'link'
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                      disabled={loading}
                    >
                      <LinkIcon className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-sm font-medium">Link</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setProofType('file')}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        proofType === 'file'
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                      disabled={loading}
                    >
                      <Upload className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-sm font-medium">File</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {proofType === 'file' ? 'File URL *' : 'Link URL *'}
                  </label>
                  <input
                    type="url"
                    value={proofUrl}
                    onChange={(e) => setProofUrl(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={proofType === 'file' ? 'https://drive.google.com/...' : 'https://example.com/proof'}
                    required
                    disabled={loading}
                  />
                  <p className="text-xs text-neutral-500 mt-1">
                    {proofType === 'file' 
                      ? 'Upload your file to Google Drive, Dropbox, or similar service and paste the shareable link'
                      : 'Provide a link to your proof (social media post, website, etc.)'
                    }
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Briefly describe your contribution or activity completion"
                    disabled={loading}
                  />
                </div>

                {error && (
                  <div className="bg-error-50 border border-error-200 text-error-700 p-3 rounded-lg text-sm">
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
                    variant="primary"
                    className="flex-1"
                    disabled={loading || !proofUrl.trim()}
                  >
                    {loading ? 'Submitting...' : 'Submit Proof'}
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