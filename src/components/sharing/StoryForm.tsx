import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import Card from '../ui/Card';
import { useStories } from '../../hooks/useStories';
import { useAuth } from '../../hooks/useAuth';
import { AuthModal } from '../auth/AuthModal';

const moods = [
  { value: 'happy', label: '😊 Happy', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'sad', label: '😢 Sad', color: 'bg-blue-100 text-blue-800' },
  { value: 'anxious', label: '😰 Anxious', color: 'bg-purple-100 text-purple-800' },
  { value: 'angry', label: '😠 Angry', color: 'bg-red-100 text-red-800' },
  { value: 'confused', label: '😕 Confused', color: 'bg-gray-100 text-gray-800' },
  { value: 'hopeful', label: '🌟 Hopeful', color: 'bg-green-100 text-green-800' },
  { value: 'overwhelmed', label: '😵 Overwhelmed', color: 'bg-orange-100 text-orange-800' },
  { value: 'grateful', label: '🙏 Grateful', color: 'bg-pink-100 text-pink-800' },
];

export const StoryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    mood: '',
    content: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { submitStory } = useStories();
  const { isAuthenticated } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      console.log('User not authenticated, showing auth modal');
      setShowAuthModal(true);
      return;
    }

    if (!formData.nickname.trim() || !formData.mood || !formData.content.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    
    try {
      console.log('Submitting story:', formData);
      const result = await submitStory({
        nickname: formData.nickname.trim(),
        mood: formData.mood,
        content: formData.content.trim(),
      });

      if (result.success) {
        console.log('Story submitted successfully');
        setSubmitSuccess(true);
        setFormData({ nickname: '', mood: '', content: '' });
      } else {
        console.error('Story submission failed:', result.error);
        setError(result.error || 'Failed to submit story');
      }
    } catch (error) {
      console.error('Error submitting story:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="text-center p-8">
          <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-success-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
            Thank You for Sharing
          </h3>
          <p className="text-neutral-600 mb-6">
            Your story has been submitted and will be reviewed before being published. 
            Thank you for being brave enough to share your experience with our community.
          </p>
          <Button 
            variant="primary" 
            onClick={() => setSubmitSuccess(false)}
          >
            Share Another Story
          </Button>
        </Card>
      </motion.div>
    );
  }

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-neutral-800 text-center">
            Share Your Story
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nickname" className="block text-sm font-medium text-neutral-700 mb-2">
                How should we call you? *
              </label>
              <input
                id="nickname"
                type="text"
                value={formData.nickname}
                onChange={(e) => handleInputChange('nickname', e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Your nickname (this will be shown with your story)"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                How are you feeling? *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.value}
                    type="button"
                    onClick={() => handleInputChange('mood', mood.value)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                      formData.mood === mood.value
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-neutral-200 hover:border-neutral-300 text-neutral-600'
                    }`}
                  >
                    {mood.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-neutral-700 mb-2">
                Your Story *
              </label>
              <textarea
                id="content"
                rows={8}
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                placeholder="Share your thoughts, experiences, or anything that's on your mind. This is a safe space..."
                required
              />
              <div className="text-right text-sm text-neutral-500 mt-1">
                {formData.content.length}/2000 characters
              </div>
            </div>
            
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-sm text-primary-700">
                <strong>Privacy Note:</strong> Your story will be reviewed before being published. 
                We respect your privacy and will only share stories that contribute positively to our community.
              </p>
            </div>
            
            {error && (
              <div className="bg-error-50 border border-error-200 text-error-700 p-4 rounded-lg mb-4">
                {error}
              </div>
            )}
            
            <div className="text-center">
              <Button 
                type="submit" 
                variant="primary" 
                className="px-8 py-3"
                disabled={isSubmitting || !formData.nickname.trim() || !formData.mood || !formData.content.trim()}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send size={18} className="mr-2" /> Share My Story
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        defaultMode="signup"
      />
    </>
  );
};