import { useState, useEffect } from 'react';
import { supabase, type Story } from '../lib/supabase';

export const useStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStories = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setStories(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const submitStory = async (storyData: {
    nickname: string;
    mood: string;
    content: string;
  }) => {
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('You must be logged in to submit a story');
      }

      const { error } = await supabase
        .from('stories')
        .insert([{
          ...storyData,
          user_id: user.id
        }]);

      if (error) throw error;
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to submit story' 
      };
    }
  };

  const getStoryById = async (id: string): Promise<Story | null> => {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .eq('id', id)
        .eq('is_approved', true)
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error fetching story:', err);
      return null;
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return {
    stories,
    loading,
    error,
    submitStory,
    getStoryById,
    refetch: fetchStories
  };
};