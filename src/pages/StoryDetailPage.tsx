import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Heart, MessageCircle, Clock, User } from 'lucide-react';
import { useStories } from '../hooks/useStories';
import type { Story } from '../lib/supabase';

const StoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getStoryById } = useStories();
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      if (!id) {
        setError('Story ID not provided');
        setLoading(false);
        return;
      }

      try {
        const storyData = await getStoryById(id);
        if (storyData) {
          setStory(storyData);
        } else {
          setError('Story not found');
        }
      } catch (err) {
        setError('Failed to load story');
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id, getStoryById]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !story) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold text-neutral-800 mb-4">Story Not Found</h1>
              <p className="text-neutral-600 mb-8">{error || 'The story you\'re looking for doesn\'t exist or has been removed.'}</p>
              <Link to="/share">
                <Button variant="primary">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back Link */}
            <Link 
              to="/share" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Stories
            </Link>

            {/* Story Card */}
            <Card className="p-8 md:p-12">
              {/* Story Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-6 border-b border-neutral-200">
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="p-2 rounded-full bg-secondary-100 text-secondary-600 mr-3">
                    <User size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-neutral-800">{story.nickname}</h2>
                    <div className="flex items-center text-sm text-neutral-500 mt-1">
                      <Clock size={14} className="mr-1" />
                      {formatDate(story.created_at)}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {story.mood}
                  </span>
                </div>
              </div>

              {/* Story Content */}
              <div className="mb-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed whitespace-pre-wrap font-handwriting text-lg">
                    {story.content}
                  </p>
                </div>
              </div>

              {/* Story Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center text-neutral-600 hover:text-secondary-500 transition-colors">
                    <Heart size={20} className="mr-2" />
                    <span className="font-medium">{story.likes_count}</span>
                    <span className="ml-1 text-sm">likes</span>
                  </button>
                  <button className="flex items-center text-neutral-600 hover:text-primary-500 transition-colors">
                    <MessageCircle size={20} className="mr-2" />
                    <span className="font-medium">{story.comments_count}</span>
                    <span className="ml-1 text-sm">comments</span>
                  </button>
                </div>
                
                <div className="text-sm text-neutral-500">
                  Story #{story.id.slice(0, 8)}
                </div>
              </div>
            </Card>

            {/* Support Message */}
            <Card className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Thank you for sharing your story
                </h3>
                <p className="text-neutral-600 mb-4">
                  Your courage in sharing helps others feel less alone. If you're struggling, 
                  remember that support is available.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/share">
                    <Button variant="primary">Share Your Story</Button>
                  </Link>
                  <Link to="/awareness">
                    <Button variant="outline">Get Support</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default StoryDetailPage;