import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';

const DebutCampaignContent: React.FC = () => {
  const testimonials = [
    "The sessions helped me understand mental health better and feel supported. – Student A",
    "I learned how to help my friends and recognize when someone needs support. – Student B",
    "The peer group made me feel connected and confident to speak up. – Student C",
    "I loved the interactive activities; they made learning about mental health easy. – Student D",
    "The guidance and support we received have inspired us to take initiatives for our peers. – Student E",
    "I feel more confident discussing mental health openly in my school. – Student F",
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-10 mb-12">
              {/* Campaign Overview */}
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Pieces of Us : Our Debut Intensive Week 
              </h1>

              <p className="text-lg text-neutral-700 mb-6">
                Over a two-week-long initiative, we visited multiple schools across Hyderabad to conduct a structured mental health awareness program. 
                Special shout-outs to <strong>ZPHS Kothaguda</strong>, <strong>ZPHS Gachibowli</strong>, <strong>Bhavana Model School</strong>, and several other government and low-income schools that enthusiastically hosted our team. 
                This program aimed to educate students about mental health issues, provide peer-to-peer support, and foster a culture of empathy and awareness in every school we visited.
              </p>

              <p className="text-lg text-neutral-700 mb-6">
                We specifically targeted 9th and 10th-grade students, understanding that this age group faces unique academic and social pressures. 
                Early intervention and awareness can make a significant difference in their mental wellbeing, enabling them to identify challenges, seek help, and support their peers effectively.
              </p>

              <p className="text-lg text-neutral-700 mb-6">
                <strong>Campaign Timeline:</strong>  
                <ul className="list-disc list-inside space-y-1 mt-2 text-neutral-700">
                  <li><strong>Day 1:</strong> Introduction, ice-breaking, and bonding activities to build trust and openness.</li>
                  <li><strong>Days 2–6:</strong> Classroom sessions focusing on mental health education, interactive workshops, and team-building exercises to foster peer integration.</li>
                  <li><strong>Day 7:</strong> Closing ceremony celebrating student participation, highlighting achievements, and reinforcing the importance of mental health awareness.</li>
                </ul>
                Status: <strong className="text-primary-600">Ongoing</strong> for active follow-up activities; earlier phases are completed successfully.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Our Achievements</h2>
              <ul className="list-disc list-inside text-neutral-700 mb-8 space-y-2">
                <li>Established student squads in every school visited, fostering community engagement and peer leadership.</li>
                <li>Raised awareness of key mental health issues among students and staff.</li>
                <li>Provided one-on-one peer support to students struggling with mental health concerns.</li>
                <li>Encouraged open conversations about mental health and removed associated stigma.</li>
                <li>Gathered valuable feedback to improve future programs and initiatives.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Student Testimonials</h2>

              {/* Rolling horizontal carousel for testimonials */}
              <div className="overflow-x-auto flex space-x-6 py-6">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    className="flex-shrink-0 w-80 p-6 rounded-lg text-white font-medium shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #9DC88D, #F9E29F)' // Sage green to gradient yellow
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {t}
                  </motion.div>
                ))}
              </div>

              <div className="bg-neutral-100 p-6 rounded-lg text-center mt-10">
                <p className="text-neutral-800 mb-2 text-lg">
                  Part of the campaign, but we missed your feedback? We’d love to hear from you!
                </p>
                <a 
                  href="https://linktr.ee/teenphoeniciansforum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-600 font-semibold underline text-lg"
                >
                  Submit your feedback here
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default DebutCampaignContent;


