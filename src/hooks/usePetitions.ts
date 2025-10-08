import { useState, useEffect } from 'react';
import { supabase, type Petition } from '../lib/supabase';
import { useAuth } from './useAuth';

export const usePetitions = () => {
  const [petitions, setPetitions] = useState<Petition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchPetitions = async (filters?: {
    category?: string;
    status?: string;
    userOnly?: boolean;
  }) => {
    try {
      setLoading(true);
      setError(null);
      
      let query = supabase
        .from('petitions')
        .select('*');

      if (filters?.userOnly && user) {
        query = query.eq('user_id', user.id);
      }

      if (filters?.category && filters.category !== 'all') {
        query = query.eq('category', filters.category);
      }

      if (filters?.status && filters.status !== 'all') {
        query = query.eq('status', filters.status);
      }

      query = query.order('created_at', { ascending: false });

      const { data, error } = await query;

      if (error) throw error;
      
      setPetitions(data || []);
    } catch (err) {
      console.error('Error fetching petitions:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPetitions();
  }, [user]);

  const getPetitionById = async (id: string): Promise<Petition | null> => {
    try {
      const { data, error } = await supabase
        .from('petitions')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error fetching petition:', err);
      return null;
    }
  };

  const createPetition = async (petitionData: {
    title: string;
    description: string;
    petition_url: string;
    goal: number;
    category: string;
  }) => {
    if (!user) return { success: false, error: 'User not authenticated' };

    try {
      const { error } = await supabase
        .from('petitions')
        .insert([{
          ...petitionData,
          user_id: user.id
        }]);

      if (error) throw error;
      
      await fetchPetitions();
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to create petition' 
      };
    }
  };

  return {
    petitions,
    loading,
    error,
    fetchPetitions,
    getPetitionById,
    createPetition,
    refetch: fetchPetitions
  };
};