import { createClient } from '@supabase/supabase-js';

// Read environment variables (Vite requires VITE_ prefix)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug: check if env variables are loaded
console.log('🔹 Supabase config:', {
  url: supabaseUrl ? 'Set' : 'Missing',
  key: supabaseAnonKey ? 'Set' : 'Missing'
});

// Throw error if missing (prevents app from running with undefined keys)
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY'
  );
}

// Create and export Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Optional: test fetch to confirm connection (safe for debug)
(async () => {
  try {
    const { data, error } = await supabase
      .from('stories') // Replace with a real table
      .select('*')
      .limit(1);

    if (error) console.error('❌ Supabase fetch error:', error);
    else console.log('✅ Supabase fetch success, sample data:', data);
  } catch (err) {
    console.error('🚨 Network/fetch error:', err);
  }
})();

// -------------------------------
// Type definitions (for TypeScript)
// -------------------------------
export type Story = {
  id: string;
  user_id: string;
  nickname: string;
  mood: string;
  content: string;
  created_at: string;
  is_approved: boolean;
  likes_count: number;
  comments_count: number;
};

export type Profile = {
  id: string;
  user_id: string;
  display_name: string | null;
  is_volunteer: boolean;
  volunteer_hours: number;
  created_at: string;
  updated_at: string;
};

// (Include all other types you had — Campaign, VolunteerActivity, Petition, etc.)
// Simply append the type definitions here as in your previous file
