import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const SelfTalkPage: React.FC = () => {
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
                Self-Talk Isn't a Fairy Godmother — But It Can Be Your Anchor
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>February 25, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                A real, honest guide to using self-talk as emotional support without the toxic positivity
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Let's get one thing straight: self-talk isn't going to magically fix your problems, cure your depression, or turn you into a perpetually positive person who sees rainbows in every storm. If you're looking for that kind of advice, you're in the wrong place.
                </p>

                <p>
                  But here's what self-talk can do: it can be your emotional anchor when everything feels like it's falling apart. It can help you navigate difficult moments with a little more compassion and a lot less self-destruction. And sometimes, that's exactly what you need.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  What Self-Talk Actually Is (And Isn't)
                </h2>

                <p>
                  Self-talk is the ongoing conversation you have with yourself in your head. Right now, as you're reading this, there's probably a voice commenting on what you're reading, maybe judging whether this article is worth your time, or thinking about what you need to do later.
                </p>

                <p>
                  That voice? That's your self-talk. And for most of us, it's not particularly kind.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Self-Talk Is NOT:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pretending everything is fine when it's not</li>
                  <li>Forcing yourself to think positive thoughts</li>
                  <li>Denying your real feelings and experiences</li>
                  <li>A replacement for professional help when you need it</li>
                  <li>A magic solution that will instantly make you feel better</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Self-Talk IS:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Learning to speak to yourself with basic human decency</li>
                  <li>Acknowledging your feelings without making them worse</li>
                  <li>Providing yourself with the same support you'd give a friend</li>
                  <li>A tool for emotional regulation and resilience</li>
                  <li>A way to challenge unhelpful thought patterns</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Why Your Inner Voice Is Probably a Jerk
                </h2>

                <p>
                  Most of us have an inner critic that would make a reality TV villain look supportive. This voice tells us we're not good enough, smart enough, attractive enough, or successful enough. It predicts disaster, focuses on our flaws, and generally makes everything harder than it needs to be.
                </p>

                <p>
                  This isn't your fault. Our brains are wired to notice threats and problems—it's a survival mechanism. But in modern life, this means our inner voice often focuses on what's wrong rather than what's working.
                </p>

                <p>
                  The goal isn't to silence this voice (impossible) or replace it with fake positivity (unhelpful). The goal is to balance it with a more compassionate, realistic perspective.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Practical Self-Talk Strategies That Actually Work
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Friend Test
                </h3>
                <p>
                  When you notice harsh self-talk, ask yourself: "Would I say this to a friend going through the same thing?" If the answer is no, try to rephrase it in a way that's more supportive.
                </p>

                <p>
                  Instead of: "I'm so stupid for making that mistake."<br />
                  Try: "I made a mistake, and that's frustrating, but everyone makes mistakes. What can I learn from this?"
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Reality Check
                </h3>
                <p>
                  When your inner voice is catastrophizing or making extreme statements, challenge it with facts.
                </p>

                <p>
                  Instead of: "I always mess everything up."<br />
                  Try: "I messed up this one thing. I've also done many things well. This doesn't define me."
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Acknowledgment Approach
                </h3>
                <p>
                  Sometimes the best self-talk is simply acknowledging what you're going through without trying to fix it.
                </p>

                <p>
                  "This is really hard right now, and it makes sense that I'm struggling."<br />
                  "I'm feeling overwhelmed, and that's okay. I don't have to have it all figured out right now."
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Coaching Voice
                </h3>
                <p>
                  Imagine you have a supportive coach or mentor in your head. What would they say to help you through this situation?
                </p>

                <p>
                  "You've handled difficult things before, and you can handle this too."<br />
                  "Let's take this one step at a time."<br />
                  "What's one small thing you can do right now to take care of yourself?"
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Self-Talk for Specific Situations
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  When You're Anxious
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"I'm feeling anxious right now, and that's my brain trying to protect me."</li>
                  <li>"I can feel anxious and still do what I need to do."</li>
                  <li>"This feeling is temporary. It will pass."</li>
                  <li>"I've been anxious before and gotten through it."</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  When You're Depressed
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"Depression is lying to me right now. These thoughts aren't facts."</li>
                  <li>"I don't have to feel good to do one small thing to take care of myself."</li>
                  <li>"This is a hard day, not a hard life."</li>
                  <li>"I'm doing the best I can with what I have right now."</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  When You're Overwhelmed
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"I don't have to do everything at once."</li>
                  <li>"What's the most important thing I need to focus on right now?"</li>
                  <li>"It's okay to ask for help."</li>
                  <li>"I can only control what I can control."</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  When You've Made a Mistake
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"Mistakes are how I learn and grow."</li>
                  <li>"I can make amends if I need to, but I don't have to punish myself forever."</li>
                  <li>"This mistake doesn't erase all the good things I've done."</li>
                  <li>"What would I tell a friend in this situation?"</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Building a Sustainable Self-Talk Practice
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Start Small
                </h3>
                <p>
                  Don't try to overhaul your entire inner dialogue overnight. Start by noticing when your self-talk is particularly harsh, and try to soften it just a little bit.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Be Patient
                </h3>
                <p>
                  Changing ingrained thought patterns takes time. You might catch yourself being self-critical and then be critical about being critical. That's normal. Just notice it and try again.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Practice During Good Times
                </h3>
                <p>
                  It's easier to develop compassionate self-talk when you're not in crisis. Practice during neutral or positive moments so the skills are available when you really need them.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  When Self-Talk Isn't Enough
                </h2>

                <p>
                  Self-talk is a valuable tool, but it's not a cure-all. If you're dealing with persistent mental health challenges, trauma, or thoughts of self-harm, please reach out to a mental health professional. Self-talk can be part of your toolkit, but it shouldn't be your only tool.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Bottom Line
                </h2>

                <p>
                  Self-talk won't magically transform your life, but it can make the hard moments a little more bearable. It can help you treat yourself with the same kindness you'd show a friend. It can be an anchor when everything else feels unstable.
                </p>

                <p>
                  You don't have to love yourself every day. You don't have to think positive thoughts all the time. You just have to try to speak to yourself with basic human decency.
                </p>

                <p>
                  Your inner voice has been with you your whole life, and it will be with you for the rest of it. You might as well try to make it a little kinder.
                </p>

                <p>
                  Start today. The next time you notice harsh self-talk, pause and ask: "What would I say to a friend right now?" Then try to give yourself that same compassion.
                </p>

                <p>
                  You deserve it, even when you don't feel like you do.
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

export default SelfTalkPage;