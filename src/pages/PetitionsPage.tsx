import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import { Users, CheckCircle, TrendingUp } from 'lucide-react';

const PetitionsPage: React.FC = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-12">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Teen Phoenicians Petitions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Get involved and make a difference! Sign petitions, support causes, and start your own campaigns to help teens have a voice.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container-custom py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Impact So Far
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">12,447</h3>
              <p className="text-gray-600">Total Signatures</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">3</h3>
              <p className="text-gray-600">Successful Campaigns</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="p-3 bg-yellow-100 rounded-full w-fit mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">8</h3>
              <p className="text-gray-600">Active Petitions</p>
            </Card>
          </div>
        </div>

        {/* Call To Action Section */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Start Your Own Petition
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Want to make a change? Please contact us to start your petition.  
              Reach out on <strong>Instagram</strong> for the fastest response,  
              or via <strong>email</strong>.  
              You can also check our{" "}
              <a
                href="https://linktr.ee/teenphoeniciansforum" // replace with your real Linktree link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Linktree
              </a>{" "}
              for detailed petition creation guidelines.
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PetitionsPage;
