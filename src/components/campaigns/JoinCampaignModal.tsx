import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, UserCheck, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import type { Campaign, CampaignActivity } from '../../lib/supabase';

interface JoinCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: Campaign;
  activities: CampaignActivity[];
  onJoin: (campaignId: string, role: 'individual' | 'volunteer', selectedActivities?: string[]) => Promise<{ success: boolean; error?: string }>;
}

export const JoinCampaignModal: React.FC<JoinCampaignModalProps> = ({ 
  isOpen, 
  onClose, 
  campaign, 
  activities, 
  onJoin 
}) => {
  const [joinType, setJoinType] = useState<'individual' | 'volunteer' | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleActivityToggle = (activityId: string) => {
    setSelectedActivities(prev => {
      if (prev.includes(activityId)) {
        return prev.filter(id => id !== activityId);
      } else if (prev.length < 5) {
        return [...prev, activityId];
      }
      return prev;
    });
  };

  const handleJoin = async () => {
    if (!joinType) return;

    setLoading(true);
    setError(null);

    try {
      const result = await onJoin(
        campaign.id, 
        joinType, 
        joinType === 'volunteer' ? selectedActivities : undefined
      );

      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          resetModal();
        }, 2000);
      } else {
        setError(result.error || 'Failed to join campaign');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const resetModal = () => {
    setJoinType(null);
    setSelectedActivities([]);
    setError(null);
    setSuccess(false);
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
      resetModal();
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
              <h2 className="text-2xl font-bold text-neutral-800">Join Campaign</h2>
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
                  Successfully Joined Campaign!
                </h3>
                <p className="text-neutral-600">
                  Welcome to {campaign.title}! Check your dashboard for updates and next steps.
                </p>
              </div>
            ) : !joinType ? (
              <div>
                <p className="text-neutral-600 mb-6">How would you like to join this campaign?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setJoinType('individual')}
                    className="p-6 border-2 border-neutral-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all"
                  >
                    <User className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Individual</h3>
                    <p className="text-neutral-600 text-sm">Join as an individual participant</p>
                  </button>
                  <button
                    onClick={() => setJoinType('volunteer')}
                    className="p-6 border-2 border-neutral-200 rounded-lg hover:border-secondary-500 hover:bg-secondary-50 transition-all"
                  >
                    <UserCheck className="w-8 h-8 text-secondary-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">Volunteer</h3>
                    <p className="text-neutral-600 text-sm">Help organize and run campaign activities</p>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                    Joining as {joinType === 'individual' ? 'Individual' : 'Volunteer'}
                  </h3>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-2">Campaign Overview</h4>
                    <p className="text-primary-700 text-sm">{campaign.description}</p>
                  </div>
                </div>

                {joinType === 'volunteer' && activities.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-800 mb-3">
                      Select Activities (Choose up to 5)
                    </h4>
                    <div className="space-y-3">
                      {activities.map((activity) => (
                        <div
                          key={activity.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedActivities.includes(activity.id)
                              ? 'border-secondary-500 bg-secondary-50'
                              : 'border-neutral-200 hover:border-neutral-300'
                          }`}
                          onClick={() => handleActivityToggle(activity.id)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h5 className="font-semibold text-neutral-800 mb-1">{activity.title}</h5>
                              <p className="text-neutral-600 text-sm mb-2">{activity.description}</p>
                              <div className="flex flex-wrap gap-2 text-xs">
                                {activity.time_commitment && (
                                  <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded">
                                    {activity.time_commitment}
                                  </span>
                                )}
                                {activity.location && (
                                  <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded">
                                    {activity.location}
                                  </span>
                                )}
                                {activity.skills_required?.map((skill, index) => (
                                  <span key={index} className="px-2 py-1 bg-accent-100 text-accent-700 rounded">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            {selectedActivities.includes(activity.id) && (
                              <CheckCircle className="w-5 h-5 text-secondary-600 ml-3" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-neutral-500 mt-2">
                      Selected: {selectedActivities.length}/5 activities
                    </p>
                  </div>
                )}

                {error && (
                  <div className="bg-error-50 border border-error-200 text-error-700 p-4 rounded-lg mb-4">
                    {error}
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setJoinType(null)}
                    className="flex-1"
                    disabled={loading}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    className="flex-1"
                    disabled={loading || (joinType === 'volunteer' && selectedActivities.length === 0)}
                    onClick={handleJoin}
                  >
                    {loading ? 'Joining...' : 'Join Campaign'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};