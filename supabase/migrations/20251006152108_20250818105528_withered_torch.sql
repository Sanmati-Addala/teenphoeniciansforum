/*
  # Authentication Setup

  1. Authentication
    - Uses Supabase's built-in auth.users table
    - Email and password authentication
    - No email confirmation required
    
  2. User Profiles
    - `profiles` table for additional user data
    - Links to auth.users via user_id
    - Stores display name and other profile info
    
  3. Stories Integration
    - Links stories to authenticated users
    - Only authenticated users can submit stories
    
  4. Security
    - Enable RLS on all tables
    - Users can only access their own data
    - Public can read approved stories
*/

-- Create profiles table for additional user data
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  display_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Update stories table to link to authenticated users
ALTER TABLE stories 
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update stories policies
DROP POLICY IF EXISTS "Anyone can read approved stories" ON stories;
DROP POLICY IF EXISTS "Anyone can submit stories" ON stories;
DROP POLICY IF EXISTS "Authenticated users can update stories" ON stories;

CREATE POLICY "Anyone can read approved stories"
  ON stories
  FOR SELECT
  TO public
  USING (is_approved = true);

CREATE POLICY "Authenticated users can submit stories"
  ON stories
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own stories"
  ON stories
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own stories"
  ON stories
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Function to create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', 'Anonymous'));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();