import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowLeft, ExternalLink, Share2 } from 'lucide-react';
import { usePetitions } from '../hooks/usePetitions';
import type { Petition } from '../lib/supabase';

const PetitionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPetitionById } = usePetitions();
  const [petition, setPetition] = useState<Petition | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPetition = async () => {
      if (!id) {
        setError('Petition ID not provided');
        setLoading(false);
        return;
      }

      try {
        const petitionData = await getPetitionById(id);
        if (petitionData) {
          setPetition(petitionData);
        } else {
          setError('Petition not found');
        }
      } catch (err) {
        setError('Failed to load petition');
      } finally {
        setLoading(false);
      }
    };

    fetchPetition();
  }, [id, getPetitionById]);

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (error || !petition) return (
    <Layout>
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Petition Not Found</h1>
          <p className="mb-4">{error || 'The petition does not exist.'}</p>
          <Link to="/petitions">
            <Button>
              <ArrowLeft size={16} className="mr-2" /> Back to Petitions
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );

  const progressPercentage = Math.min((petition.signatures / petition.goal) * 100, 100);

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/petitions" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
              <ArrowLeft size={20} className="mr-2" /> Back to Petitions
            </Link>

            <Card className="p-8 mb-8">
              <div className="mb-6">
                <span className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium">
                  {petition.category}
                </span>

                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{petition.title}</h1>
                <div className="text-sm text-neutral-600 mb-6">
                  Created {new Date(petition.created_at).toLocaleDateString()}
                </div>

                <div className="mb-8">
                  <div className="flex justify-between font-semibold mb-2">
                    <span>{petition.signatures.toLocaleString()} signatures</span>
                    <span>Goal: {petition.goal.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-4 mb-2">
                    <div className="bg-secondary-500 h-4 rounded-full transition-all" style={{ width: `${progressPercentage}%` }} />
                  </div>
                  <div className="text-sm text-neutral-600">{Math.round(progressPercentage)}% of goal reached</div>
                </div>

                <a href={petition.petition_link} target="_blank" rel="noopener noreferrer" className="block mb-4">
                  <Button variant="secondary" className="w-full py-4 text-lg">
                    <ExternalLink size={20} className="mr-2" /> Sign This Petition
                  </Button>
                </a>

                <div className="text-neutral-700 whitespace-pre-line leading-relaxed">{petition.description}</div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PetitionDetailPage;
