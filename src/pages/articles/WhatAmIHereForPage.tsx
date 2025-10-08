import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const WhatAmIHereForPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            {/* Back Link */}
            <Link 
              to="/tips" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Tips
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 leading-tight">
                What Am I Here For?
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Sanmati Addala</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>January 15, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                What a typical teenager is expected to act like or be like ...
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none text-neutral-700">
              <p>
                What a typical teenager is expected to act like or be like – moody, throwing tantrums on the ultra modesty of her clothes, exhibiting increased emotional sensitivity, prefers to hang out with random club-goers as opposed to family, has incessant war-cries of “I need Privacy”, male validation meter shooting up, craving attention and above all dreaming about that one Free Utopia which they somehow feel lies in the world of the adults!
              </p>
              <p>They say it is a chaotic messy yet fun phase of life.</p>
              <p>
                Adults call it their last leap of joy before getting enslaved with the shackles of responsibility and bills – you know, the classic hamster wheel situation – whilst children see it as “The Age”, the demographic of cool seniors and hippies!
              </p>
              <p>That is exactly what I dreamed my teenage to be, but what has it ended up looking like? Just darkness and void.</p>
              <p>
                It feels like I am in this pitch dark basement – my eyes are wide open but I feel chronically blind, like I have been blinded by the world and shielded off from what’s around and within.
              </p>
              <p>I don’t know how long this basement is, how wide and how tall, but there is one sense – panic.</p>
              <p>
                I know it’s too long and too wide for me to cross into whatever is on the other end. Honestly, I feel like the hope of the other end is slimming.
              </p>
              <p>
                Despite its phenomenal dimensions, I somehow feel claustrophobic – like every moment I spend here is going to suffocate me further, like the ceiling is crashing onto me.
              </p>
              <p>
                This is what my teens looked like. I know I ran all along because my straining legs say so. I know I tried hard because my thumping heart says so. But why? Why do I not see the end?
              </p>
              <p>This question is just one of many – foremost being: how did I even end up here?</p>
              <p>Was my “reality” before I ended up here even real, or was that the illusion?</p>
              <p>For how real this pain feels, I feel like that was the illusion and this is the reality.</p>
              <p>
                I know I am privileged in ways many aren’t, but why is this pain so unbearable? I can’t see the bright side of things no matter how hard I try.
              </p>
              <p>
                That is when I realized: sometimes the answer lies within. Before I try to fight the never-ending darkness and closing walls outside, I should deal with the darkness within.
              </p>
              <p>
                I started talking to that deep voice within – what am I here for? What is my purpose on this Earth? And I only have one wish henceforth: God, please make this my last life.
              </p>
              <p>
                Whatever the pain and sorrows, I shall endure them as karmic debt. Let it end in this life.
              </p>
              <p>
                I know life henceforth will have more pain and more torture, but I am ready for whatever that is. I will embrace it with open arms, because that is what is destined for me.
              </p>
              <p>I will accept it. I shall no longer wish for anything else.</p>
            </article>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <Link 
                to="/tips" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Our Journey Blogs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default WhatAmIHereForPage;
