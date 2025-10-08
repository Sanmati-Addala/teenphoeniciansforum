import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const LonelinessParadoxPage: React.FC = () => {
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
              to="/awareness" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Tips
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 leading-tight">
                The Loneliness Paradox: Why Gen Z Is Drowning in a Sea of Digital Connection
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>January 25, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                Why being perpetually online has made us more isolated than ever, and how to unfuck your social life
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Here's a mind-bending fact that'll make you question everything: Gen Z is the most connected generation in history, yet we're also the loneliest. We have more ways to communicate than any generation before us, but somehow we're all sitting in our rooms feeling like we're the only person on the planet who doesn't have their shit together.
                </p>

                <p>
                  It's giving "surrounded by people but feeling completely alone" energy, and it's messing with our heads in ways that would make our parents' generation concerned if they weren't too busy telling us to "just go outside and make friends."
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Numbers That Hit Different
                </h2>

                <p>
                  Let's start with some stats that'll make you feel seen (and slightly depressed): 73% of Gen Z report feeling alone sometimes, and 27% say they have no close friends. Meanwhile, we're spending an average of 7-9 hours a day on our devices, constantly "connecting" with people.
                </p>

                <p>
                  The paradox is real: we have hundreds of followers, dozens of group chats, and endless ways to reach out to people, yet genuine connection feels harder than ever. It's like being hungry while surrounded by pictures of food.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Why Digital Connection Isn't Actually Connection
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Highlight Reel Effect
                </h3>
                <p>
                  Social media shows us everyone's best moments while we're living our behind-the-scenes reality. You're comparing your 3 AM anxiety spiral to someone's carefully curated vacation photos. It's not a fair fight, and your brain doesn't know the difference.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Surface-Level Interactions
                </h3>
                <p>
                  Liking someone's post isn't the same as having a real conversation. Sending memes back and forth isn't the same as sharing your actual thoughts and feelings. We're communicating constantly but saying very little that matters.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Fear of Being "Too Much"
                </h3>
                <p>
                  Digital communication has trained us to be performative. We craft the perfect text, choose the right emoji, and present a version of ourselves that's palatable. But real connection requires vulnerability, and vulnerability feels risky when everything is screenshot-able and shareable.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  How to Unfuck Your Social Life (A Practical Guide)
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Quality Over Quantity (Revolutionary, I Know)
                </h3>
                <p>
                  Stop trying to maintain 47 different friendships and focus on building deeper connections with a few people. It's better to have three friends who actually know you than 30 acquaintances who only know your Instagram persona.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Practice Vulnerable Communication
                </h3>
                <p>
                  Instead of "hey what's up," try "I've been feeling really overwhelmed lately, how are you handling everything?" Real connection happens when we share real things, not when we exchange pleasantries.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Create Phone-Free Zones
                </h3>
                <p>
                  When you're with people, be actually with them. Put the phones away and have conversations that require eye contact. It feels weird at first because we're all addicted to our devices, but it's where real connection happens.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Join Things (Yes, Really)
                </h3>
                <p>
                  Find activities, clubs, or groups based on your actual interests. Shared experiences create bonds that social media can't replicate. Whether it's a book club, a hiking group, or a volunteer organization, showing up consistently builds real relationships.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Art of Being Alone vs. Being Lonely
                </h2>

                <p>
                  Here's something nobody talks about: there's a difference between being alone and being lonely. Being alone can be peaceful, restorative, and necessary. Being lonely is feeling disconnected even when you're surrounded by people.
                </p>

                <p>
                  Learning to enjoy your own company is crucial. If you can't stand being alone with your thoughts, you'll always be dependent on external validation and connection to feel okay. Develop a relationship with yourself first.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  When Loneliness Becomes a Bigger Problem
                </h2>

                <p>
                  Sometimes loneliness is a symptom of depression, anxiety, or other mental health challenges. If you're consistently feeling isolated despite having people in your life, or if loneliness is affecting your daily functioning, it might be time to talk to a professional.
                </p>

                <p>
                  There's no shame in getting help for loneliness. It's a real issue with real solutions, and you don't have to figure it out alone (see what I did there?).
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Bottom Line
                </h2>

                <p>
                  The loneliness epidemic isn't your fault, but healing from it is your responsibility. We're all figuring out how to be human in a digital world, and it's okay that it's messy and complicated.
                </p>

                <p>
                  Real connection takes effort, vulnerability, and time—things that our instant-gratification culture doesn't always encourage. But the payoff is worth it: genuine relationships that make you feel seen, understood, and less alone in this chaotic world.
                </p>

                <p>
                  Start small. Reach out to one person today with something real. Ask how they're actually doing. Share something that matters to you. Take one small step toward the kind of connection you're craving.
                </p>

                <p>
                  You're not as alone as you think, and you're definitely not the only one feeling this way. Sometimes the first step toward connection is realizing that everyone else is just as confused and lonely as you are—and that's actually kind of comforting.
                </p>
              </div>
            </article>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <Link 
                to="/awareness" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Tips
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default LonelinessParadoxPage;