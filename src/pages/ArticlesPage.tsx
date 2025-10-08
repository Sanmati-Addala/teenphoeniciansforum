import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { PageHeader } from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Calendar, 
  User, 
  Tag,
  ArrowRight,
  X
} from 'lucide-react';
import { useArticles } from '../hooks/useArticles';

// Static articles data for now since we don't have database articles yet
const staticArticles = [
  {
    id: 'anxious-but-productive',
    title: 'Anxious But Make It Productive: Channeling Overthinking Into Actual Power',
    content: 'Stop fighting your anxious brain and start working with it - your overthinking might actually be a superpower',
    category: 'Mental Health',
    tags: ['anxiety', 'productivity', 'coping strategies'],
    status: 'published',
    published_at: '2025-01-15T00:00:00Z',
    created_at: '2025-01-15T00:00:00Z',
    updated_at: '2025-01-15T00:00:00Z',
    user_id: 'system',
    slug: '/tips/anxious-but-productive'
  },
  {
    id: 'burnout-before-30',
    title: 'Burnout Before 30: Why We Are Already Over It (And How to Fight Back)',
    content: 'Gen Z is the most burnt-out generation at work, and we haven\'t even hit our thirties yet. Here\'s the real talk on why and how to fight back',
    category: 'Self Care',
    tags: ['burnout', 'work-life balance', 'gen z'],
    status: 'published',
    published_at: '2025-01-20T00:00:00Z',
    created_at: '2025-01-20T00:00:00Z',
    updated_at: '2025-01-20T00:00:00Z',
    user_id: 'system',
    slug: '/tips/burnout-before-30'
  },
  {
    id: 'loneliness-paradox',
    title: 'The Loneliness Paradox: Why Gen Z Is Drowning in a Sea of Digital Connection',
    content: 'Why being perpetually online has made us more isolated than ever, and how to unfuck your social life',
    category: 'Relationships',
    tags: ['loneliness', 'social media', 'connection'],
    status: 'published',
    published_at: '2025-01-25T00:00:00Z',
    created_at: '2025-01-25T00:00:00Z',
    updated_at: '2025-01-25T00:00:00Z',
    user_id: 'system',
    slug: '/tips/loneliness-paradox'
  },
  {
    id: 'emotional-numbness',
    title: 'When You Feel Nothing: A Real Guide to Emotional Numbness',
    content: 'An honest exploration of emotional numbness and gentle ways to reconnect with feelings',
    category: 'Mental Health',
    tags: ['depression', 'emotional health', 'healing'],
    status: 'published',
    published_at: '2025-02-01T00:00:00Z',
    created_at: '2025-02-01T00:00:00Z',
    updated_at: '2025-02-01T00:00:00Z',
    user_id: 'system',
    slug: '/tips/emotional-numbness'
  },
  {
    id: 'doomscrolling',
    title: 'Doomscrolling: Why Your Brain Is Literally Addicted to Bad News',
    content: 'The science behind why we keep torturing ourselves with endless feeds of existential dread',
    category: 'Self Care',
    tags: ['social media', 'mental health', 'digital wellness'],
    status: 'published',
    published_at: '2025-02-05T00:00:00Z',
    created_at: '2025-02-05T00:00:00Z',
    updated_at: '2025-02-05T00:00:00Z',
    user_id: 'system',
    slug: '/tips/doomscrolling'
  },
  {
    id: 'online-therapy-revolution',
    title: 'The Online Therapy Revolution: Why India\'s Mental Health Scene Just Got a Major Upgrade',
    content: 'How digital therapy is breaking down barriers and making mental health care accessible to millions of Indians',
    category: 'Mental Health',
    tags: ['therapy', 'accessibility', 'india'],
    status: 'published',
    published_at: '2025-02-10T00:00:00Z',
    created_at: '2025-02-10T00:00:00Z',
    updated_at: '2025-02-10T00:00:00Z',
    user_id: 'system',
    slug: '/tips/online-therapy-revolution'
  }
];

const ArticlesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredArticles, setFilteredArticles] = useState(staticArticles);

  const categories = [
    'Mental Health',
    'Self Care',
    'Relationships',
    'School & Academics',
    'Personal Growth',
    'Coping Strategies'
  ];

  const allTags = Array.from(new Set(staticArticles.flatMap(article => article.tags)));

  const handleSearch = () => {
    let filtered = staticArticles;

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(article => 
        selectedTags.some(tag => article.tags.includes(tag))
      );
    }

    setFilteredArticles(filtered);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTags([]);
    setFilteredArticles(staticArticles);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const removeTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  // Auto-search when filters change
  React.useEffect(() => {
    handleSearch();
  }, [searchTerm, selectedCategory, selectedTags]);

  return (
    <Layout>
      <PageHeader 
        title="Articles & Resources" 
        subtitle="Explore our collection of articles, insights, and resources on teen mental health"
        image="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="container-custom py-12">
        {/* Search and Filter Section */}
        <Card className="p-6 mb-8">
          <div className="space-y-4">
            {/* Search Bar */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Search Articles
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Search by title or content..."
                />
              </div>
            </div>

            {/* Category and Tags Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Category
                </label>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-2 border border-neutral-300 rounded-lg">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-primary-500 text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Tags Display */}
            {selectedTags.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Selected Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 hover:text-primary-600"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-3">
              <Button onClick={handleReset} variant="outline">
                Reset Filters
              </Button>
              <div className="text-sm text-neutral-500 flex items-center">
                Showing {filteredArticles.length} of {staticArticles.length} articles
              </div>
            </div>
          </div>
        </Card>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-600 mb-2">No articles found</h3>
            <p className="text-neutral-500">Try adjusting your search criteria or check back later for new content</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        {article.category && (
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                        )}
                        <div className="flex items-center text-sm text-neutral-500">
                          <Calendar size={14} className="mr-1" />
                          {new Date(article.published_at).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-neutral-800 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-neutral-600 mb-4 line-clamp-3">
                        {article.content}
                      </p>
                      
                      {article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="flex items-center px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-sm">
                              <Tag size={12} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                          {article.tags.length > 3 && (
                            <span className="text-sm text-neutral-500">+{article.tags.length - 3} more</span>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                      <div className="flex items-center text-sm text-neutral-500">
                        <User size={14} className="mr-1" />
                        Teen Phoenicians
                      </div>
                      <Link to={article.slug}>
                        <Button variant="primary" size="sm">
                          Read More
                          <ArrowRight size={14} className="ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Categories Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="p-4 h-auto flex flex-col items-center text-center"
                onClick={() => {
                  setSelectedCategory(category);
                }}
              >
                <BookOpen className="w-6 h-6 mb-2" />
                <span className="text-sm">{category}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticlesPage;