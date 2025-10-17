import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL || 'https://rsfquqvwnszlfpkyuuvg.supabase.co'),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZnF1cXZ3bnN6bGZwa3l1dXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1MzY2NzYsImV4cCI6MjA3MjExMjY3Nn0.TXvXchP-zzfWtnQhQhHGO61uIioB-fEyvthHSkOF_XU')
  }
});
