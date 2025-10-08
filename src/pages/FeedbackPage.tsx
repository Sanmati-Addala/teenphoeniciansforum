import React, { useState } from 'react';
import { Send, Star, MessageSquare, ThumbsUp, AlertCircle } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { Button } from '../components/ui/Button';
import Card from '../components/ui/Card';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    type: 'general',
    rating: 0,
    subject: '',
    message: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const feedbackTypes = [
    { id: 'general', label: 'General Feedback', icon: MessageSquare },
    { id: 'suggestion', label: 'Suggestion', icon: ThumbsUp },
    { id: 'issue', label: 'Report Issue', icon: AlertCircle }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  const handleRatingClick = (rating: number) => {
    setFeedback(prev => ({ ...prev, rating }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <PageHeader
          title="Thank You!"
          subtitle="Your feedback has been received and helps us improve our mission."
        />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Feedback Submitted Successfully
            </h3>
            <p className="text-gray-600 mb-6">
              We appreciate you taking the time to share your thoughts with us. 
              Your input helps us better serve our community and advance our mission.
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Submit Another Feedback
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <PageHeader
        title="Share Your Feedback"
        subtitle="Help us improve and better serve our community. Your voice matters in our mission."
      />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feedback Form */}
          <div className="md:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Feedback Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Feedback Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {feedbackTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFeedback(prev => ({ ...prev, type: type.id }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center space-y-2 ${
                            feedback.type === type.id
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-gray-300 text-gray-600'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                          <span className="text-sm font-medium">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Overall Experience Rating
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className={`p-1 transition-colors duration-200 ${
                          star <= feedback.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300 hover:text-yellow-300'
                        }`}
                      >
                        <Star className="w-8 h-8 fill-current" />
                      </button>
                    ))}
                  </div>
                  {feedback.rating > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      {feedback.rating === 1 && "We're sorry to hear that. Please let us know how we can improve."}
                      {feedback.rating === 2 && "We appreciate your feedback and will work to do better."}
                      {feedback.rating === 3 && "Thank you for your feedback. We're always looking to improve."}
                      {feedback.rating === 4 && "Great! We're glad you had a positive experience."}
                      {feedback.rating === 5 && "Wonderful! Thank you for your support and positive feedback."}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={feedback.subject}
                    onChange={(e) => setFeedback(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Brief summary of your feedback"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={feedback.message}
                    onChange={(e) => setFeedback(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Please share your detailed feedback, suggestions, or concerns..."
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={feedback.email}
                    onChange={(e) => setFeedback(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Provide your email if you'd like us to follow up on your feedback.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Feedback</span>
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Why Your Feedback Matters
              </h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Helps us improve our services and support for the community</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Guides our mission to better serve those affected by mental health challenges</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Ensures our platform remains accessible and helpful for everyone</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Other Ways to Connect
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-900">Email Us</p>
                  <p className="text-gray-600">feedback@mentalhealth.org</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Response Time</p>
                  <p className="text-gray-600">We typically respond within 24-48 hours</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;