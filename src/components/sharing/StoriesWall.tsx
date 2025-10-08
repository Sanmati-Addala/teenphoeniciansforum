import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { Heart, MessageCircle, Clock } from 'lucide-react';
import { useStories } from '../../hooks/useStories';

export const StoriesWall: React.FC = () => {
  const { stories, loading, error } = useStories();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return '1 day ago';
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)} days ago`;
    return `${Math.floor(diffInHours / 168)} weeks ago`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-error-500 mb-4">Failed to load stories</p>
        <p className="text-neutral-600">Please try again later</p>
      </div>
    );
  }

  if (stories.length === 0) {
    return (
      <div className="text-center py-12">
        <Clock className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
        <p className="text-neutral-600 mb-2">No stories yet</p>
        <p className="text-neutral-500 text-sm">Be the first to share your story!</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link to={`/story/${story.id}`}>
            <Card 
              variant={index % 2 === 0 ? 'sticky' : 'diary'} 
              className={`h-full flex flex-col cursor-pointer transition-transform hover:scale-105 ${
                index % 2 === 0 
                  ? 'bg-accent-100 rotate-1 hover:rotate-0'
                  : 'bg-white -rotate-1 hover:rotate-0'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="font-medium text-secondary-700">{story.nickname}</span>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-neutral-500">{formatDate(story.created_at)}</span>
                  <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full mt-1">
                    {story.mood}
                  </span>
                </div>
              </div>
              <p className={`${
                index % 2 === 0 
                  ? 'font-handwriting text-lg' 
                  : 'text-base'
              } text-neutral-700 flex-grow line-clamp-4`}>
                {story.content.length > 150 ? `${story.content.substring(0, 150)}...` : story.content}
              </p>
              <div className="flex justify-between mt-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center text-neutral-500 text-sm">
                  <Heart size={16} className="mr-1" />
                  {story.likes_count}
                </div>
                <div className="flex items-center text-neutral-500 text-sm">
                  <MessageCircle size={16} className="mr-1" />
                  {story.comments_count}
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};