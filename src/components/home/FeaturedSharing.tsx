import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Users, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import { Button } from '../ui/Button';
import { useStories } from '../../hooks/useStories';

export default function FeaturedSharing() {
  const { stories, loading } = useStories();
  const featuredStories = stories.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Share Your Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A safe space to express yourself anonymously and connect with others who understand
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-20 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </Card>
            ))}
          </div>
        ) : featuredStories.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/story/${story.id}`}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                        {story.mood}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{story.likes_count}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-4 group-hover:text-gray-900 transition-colors">
                      {story.content}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>by {story.nickname}</span>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{story.comments_count}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No stories yet</h3>
            <p className="text-gray-500 mb-6">Be the first to share your story and inspire others</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/sharing">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Share Your Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}