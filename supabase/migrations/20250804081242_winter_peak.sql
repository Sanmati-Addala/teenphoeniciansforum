/*
  # Create stories table for Teen Phoenicians

  1. New Tables
    - `stories`
      - `id` (uuid, primary key)
      - `nickname` (text, default 'Anonymous')
      - `mood` (text)
      - `content` (text, story content)
      - `created_at` (timestamp)
      - `is_approved` (boolean, for moderation)
      - `likes_count` (integer, default 0)
      - `comments_count` (integer, default 0)

  2. Security
    - Enable RLS on `stories` table
    - Add policy for public read access to approved stories
    - Add policy for anonymous story submission
*/

CREATE TABLE IF NOT EXISTS stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nickname text DEFAULT 'Anonymous',
  mood text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_approved boolean DEFAULT false,
  likes_count integer DEFAULT 0,
  comments_count integer DEFAULT 0
);

ALTER TABLE stories ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read approved stories
CREATE POLICY "Anyone can read approved stories"
  ON stories
  FOR SELECT
  USING (is_approved = true);

-- Allow anonymous story submission
CREATE POLICY "Anyone can submit stories"
  ON stories
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can approve stories (for moderation)
CREATE POLICY "Authenticated users can update stories"
  ON stories
  FOR UPDATE
  TO authenticated
  USING (true);