import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const DigitalDetoxPage: React.FC = () => {
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
                Don't Do a Dopamine Detox – Shift It Instead
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>March 10, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                The story of how I stopped doomscrolling without becoming a monk
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Let me tell you a story about how I once tried a dopamine detox and ended up angrily eating cereal at 3 a.m., questioning all my life decisions.
                </p>

                <p>
                  It started like this: I saw this guy on YouTube who claimed he "reprogrammed his brain" by quitting all dopamine for seven days. No phone, no music, no sugar, no talking. Just… sitting in a chair and staring at a wall. Everyone in the comments called him a productivity god, so of course I thought, "I need to do this."
                </p>

                <p>
                  I was so done with being glued to my phone. I hated that I couldn't watch one YouTube video without falling into a rabbit hole of slime ASMR, random breakups, and MrBeast clones. So I went extreme. I deleted apps, locked up my laptop, and declared a total dopamine fast.
                </p>

                <p>
                  Day 1: I was bored. Like ancient tree watching paint dry bored.<br />
                  Day 2: I tried reading a book but couldn't focus. My brain was itchy.<br />
                  Day 3: I cracked. I watched 42 YouTube shorts in a row and somehow ended up on a conspiracy theory video about pigeons being robots.
                </p>

                <p>
                  So yeah, detox? Epic fail.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Here's What I Wish Someone Had Told Me:
                </h2>

                <p>
                  You don't need to starve your brain. You just need to stop feeding it junk.
                </p>

                <p>
                  Dopamine isn't some evil chemical. It's literally the thing that makes us excited about anything. It's what makes you want to level up in a game or learn a new dance. The problem isn't dopamine — it's that we keep giving it to the most brain-numbing stuff we can find.
                </p>

                <p>
                  What helped me wasn't quitting dopamine cold turkey. It was giving it better stuff to get hooked on. I call it the dopamine shift.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  I Made a Deal With Myself
                </h2>

                <p>
                  I told myself:<br />
                  "You can still watch YouTube. But instead of reaction drama or 'what I eat in a day' for the 400th time… watch something that makes you feel something or learn something."
                </p>

                <p>
                  So I swapped:
                </p>

                <p>
                  <strong>Mindless vlogs</strong> → for cool travel videos or video essays on weird topics like "Why cartoons always have 4 fingers."
                </p>

                <p>
                  <strong>TikTok scrolling at midnight</strong> → for calming animations or slow cooking reels (surprisingly therapeutic).
                </p>

                <p>
                  <strong>Rage-checking Instagram</strong> → for pinning dreamy aesthetic boards on Pinterest (don't judge me — it works).
                </p>

                <p>
                  And guess what? I still got that little dopamine rush. But now I wasn't hating myself afterward.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Shift Doesn't Have to Be Boring
                </h2>

                <p>
                  That's the biggest lie of the whole "detox" thing — that you have to become this robot who only reads textbooks and does 5 AM yoga in a cave.
                </p>

                <p>
                  No. You can still enjoy your phone. You can still laugh at memes. You can still binge stuff — just be pickier with what you binge.
                </p>

                <p>
                  Your brain doesn't want to be bored. It just wants to be interested in something real. Something with a little more depth than "100 ways to peel a banana."
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  So If You're Struggling Right Now…
                </h2>

                <p>
                  If your screen time looks like a horror movie... if you keep promising you'll be "productive tomorrow" and then wake up to 37 missed notifications and a guilty YouTube tab…
                </p>

                <p>
                  Here's what I'd say to you:
                </p>

                <p>
                  <strong>Don't punish yourself. Shift yourself.</strong><br />
                  Swap the numbing stuff for something that still feels good — but leaves you a little better than it found you.
                </p>

                <p>
                  Maybe you'll get hooked on documentaries. Maybe you'll start journaling in your Notes app. Maybe you'll rediscover how satisfying it is to actually finish a playlist that isn't made by an algorithm.
                </p>

                <p>
                  <strong>You don't need to quit the internet.</strong><br />
                  You just need to take back the driver's seat.
                </p>

                <p>
                  And maybe — just maybe — your 3 a.m. cereal won't come with a side of existential dread.
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

export default DigitalDetoxPage;