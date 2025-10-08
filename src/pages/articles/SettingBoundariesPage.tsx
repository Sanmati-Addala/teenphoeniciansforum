import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const SettingBoundariesPage: React.FC = () => {
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
                Setting Healthy Boundaries
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>March 1, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                How to communicate your needs in relationships without feeling guilty
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Boundaries are like the invisible fences around your emotional and mental space. They help you decide what you're comfortable with and what you're not, what you'll accept from others and what you won't. But if you're a teen, setting boundaries can feel impossible—especially when adults in your life might not respect them, or when you're still figuring out what your limits even are.
                </p>

                <p>
                  Here's the truth: boundaries aren't walls meant to keep people out. They're guidelines that help you maintain healthy relationships while protecting your well-being. And yes, you have the right to set them, even as a teenager.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  What Are Boundaries, Really?
                </h2>

                <p>
                  Boundaries are the limits you set around your time, energy, emotions, body, and personal space. They're about knowing where you end and other people begin. Think of them as your personal operating manual—they help others understand how to treat you and help you understand what you need to feel safe and respected.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Types of Boundaries:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Physical boundaries:</strong> Your comfort level with touch, personal space, and physical intimacy</li>
                  <li><strong>Emotional boundaries:</strong> Protecting your feelings and not taking responsibility for others' emotions</li>
                  <li><strong>Time boundaries:</strong> How you spend your time and when you're available to others</li>
                  <li><strong>Digital boundaries:</strong> Your limits around social media, texting, and online interactions</li>
                  <li><strong>Mental boundaries:</strong> Your thoughts, beliefs, and values</li>
                  <li><strong>Material boundaries:</strong> Your belongings and money</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Why Boundaries Feel So Hard to Set
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  You're Still Learning Who You Are
                </h3>
                <p>
                  As a teen, you're still discovering your values, preferences, and limits. It's hard to set boundaries when you're not entirely sure what they should be. That's completely normal—boundaries can evolve as you grow and learn more about yourself.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Fear of Conflict
                </h3>
                <p>
                  Many people avoid setting boundaries because they're afraid of upsetting others or causing conflict. But here's the thing: healthy relationships can handle boundaries. If someone gets angry at you for setting reasonable limits, that says more about them than it does about you.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Guilt and People-Pleasing
                </h3>
                <p>
                  You might feel guilty for saying no or worry that you're being selfish. But taking care of your own needs isn't selfish—it's necessary. You can't pour from an empty cup.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Power Dynamics
                </h3>
                <p>
                  As a teen, you might feel like you don't have the power to set boundaries with adults, teachers, or even peers. While some situations are more challenging than others, you always have the right to advocate for your well-being.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  How to Set Boundaries (The Practical Stuff)
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Start With Self-Awareness
                </h3>
                <p>
                  Before you can communicate your boundaries to others, you need to know what they are. Pay attention to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>What makes you feel uncomfortable or stressed?</li>
                  <li>When do you feel your energy being drained?</li>
                  <li>What behaviors from others upset you?</li>
                  <li>What do you need to feel safe and respected?</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Be Clear and Direct
                </h3>
                <p>
                  When setting boundaries, be as clear as possible. Vague statements leave room for misinterpretation.
                </p>

                <p>
                  Instead of: "I don't really like when you do that."<br />
                  Try: "I'm not comfortable with that. Please don't do it again."
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Use "I" Statements
                </h3>
                <p>
                  Frame your boundaries around your own needs and feelings rather than criticizing the other person.
                </p>

                <p>
                  Instead of: "You're always interrupting me."<br />
                  Try: "I need to finish my thoughts before hearing your response."
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Start Small
                </h3>
                <p>
                  If you're new to boundary-setting, start with smaller, less emotionally charged situations. Practice saying no to small requests before tackling bigger issues.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Boundary Scripts for Common Situations
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  When Someone Asks for Your Time
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"I can't commit to that right now, but thanks for thinking of me."</li>
                  <li>"I have other priorities this week, so I won't be able to help."</li>
                  <li>"I'm not available, but I hope you find someone who can help."</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  When Someone Crosses a Physical Boundary
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"I'm not comfortable with that kind of physical contact."</li>
                  <li>"Please don't touch me without asking."</li>
                  <li>"I need more personal space."</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  When Someone Wants to Discuss Something You're Not Ready For
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"I'm not ready to talk about that yet."</li>
                  <li>"That's too personal for me to discuss right now."</li>
                  <li>"I'd prefer to keep that private."</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  When Someone Pressures You to Do Something
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"I've already said no, and I need you to respect that."</li>
                  <li>"I'm not going to change my mind about this."</li>
                  <li>"I don't need to explain my decision."</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  What to Expect When You Start Setting Boundaries
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Some People Won't Like It
                </h3>
                <p>
                  People who are used to you having no boundaries might push back when you start setting them. This is normal and doesn't mean you should stop. Stick to your boundaries consistently.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  You Might Feel Guilty
                </h3>
                <p>
                  If you're not used to prioritizing your own needs, setting boundaries might feel selfish at first. This guilt usually decreases as you practice and see the positive effects of healthy boundaries.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Your Relationships Will Change
                </h3>
                <p>
                  Some relationships will become healthier and stronger. Others might end, and that's okay. Boundaries help you identify which relationships are truly supportive and which ones were based on you giving more than you were receiving.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Boundaries in Different Relationships
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  With Friends
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>It's okay to say no to plans when you need alone time</li>
                  <li>You don't have to be available 24/7 for emotional support</li>
                  <li>You can ask friends to respect your privacy</li>
                  <li>You don't have to participate in gossip or drama</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  With Family
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You can ask for privacy in your room</li>
                  <li>You can set limits on personal questions</li>
                  <li>You can express when family jokes or comments hurt your feelings</li>
                  <li>You can ask for space when you're upset</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  In Romantic Relationships
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You can maintain friendships outside the relationship</li>
                  <li>You can say no to physical intimacy at any time</li>
                  <li>You can keep some thoughts and experiences private</li>
                  <li>You can ask for time to pursue your own interests</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  When Boundaries Aren't Respected
                </h2>

                <p>
                  If someone consistently ignores your boundaries after you've clearly communicated them, you have several options:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Restate the boundary more firmly</li>
                  <li>Implement consequences (like limiting contact)</li>
                  <li>Seek support from trusted adults</li>
                  <li>Consider whether this relationship is healthy for you</li>
                </ul>

                <p>
                  Remember: you can't control other people's behavior, but you can control your response to it.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Bottom Line
                </h2>

                <p>
                  Setting boundaries is a skill that takes practice. You won't get it perfect right away, and that's okay. The important thing is to start somewhere and keep working on it.
                </p>

                <p>
                  Healthy boundaries aren't about building walls or being mean to people. They're about creating space for authentic, respectful relationships where everyone's needs matter.
                </p>

                <p>
                  You have the right to feel safe, respected, and comfortable in your relationships. You have the right to say no. You have the right to change your mind. You have the right to prioritize your well-being.
                </p>

                <p>
                  Start small, be consistent, and remember that setting boundaries is an act of self-respect. The people who truly care about you will respect your boundaries, even if they need time to adjust to them.
                </p>

                <p>
                  Your needs matter. Your comfort matters. You matter.
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

export default SettingBoundariesPage;