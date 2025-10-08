import { useState, useEffect } from 'react';
import { supabase, type Article } from '../lib/supabase';
import { useAuth } from './useAuth';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchArticles = async (filters?: {
    category?: string;
    tags?: string[];
    search?: string;
    userOnly?: boolean;
  }) => {
    try {
      setLoading(true);
      setError(null);
      
      let query = supabase
        .from('articles')
        .select('*');

      if (filters?.userOnly && user) {
        query = query.eq('user_id', user.id);
      } else {
        query = query.eq('status', 'published');
      }

      if (filters?.category && filters.category !== '') {
        query = query.eq('category', filters.category);
      }

      if (filters?.search && filters.search.trim() !== '') {
        query = query.or(`title.ilike.%${filters.search}%,content.ilike.%${filters.search}%`);
      }

      if (filters?.tags && filters.tags.length > 0) {
        query = query.overlaps('tags', filters.tags);
      }

      query = query.order('published_at', { ascending: false, nullsFirst: false });

      const { data, error } = await query;

      if (error) throw error;
      
      setArticles(data || []);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [user]);

  const getArticleById = async (id: string): Promise<Article | null> => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .eq('status', 'published')
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error fetching article:', err);
      return null;
    }
  };

  const searchArticles = (filters: {
    category?: string;
    tags?: string[];
    search?: string;
    userOnly?: boolean;
  }) => {
    fetchArticles(filters);
  };

  return {
    articles,
    loading,
    error,
    searchArticles,
    getArticleById,
    refetch: fetchArticles
  };
};