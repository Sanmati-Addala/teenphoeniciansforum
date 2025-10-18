import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { PageHeader } from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BookOpen, ArrowRight } from 'lucide-react';

const journeyPosts = [
  {
    id: 1,
    title: 'What Am I Here For?',
    author: 'Sanmati Addala',
    date: 'January 15, 2025',
    excerpt: 'What a typical teenager is expected to act like or be like ...',
    content: `What a typical teenager is expected to act like or be like - moody, throwing tantrums on the ultra modesty of her clothes, exhibiting increased emotional sensitivity, prefers to hangout with random club-goers as opposed to family, has incessant war-cries of “I need Privacy”, Male validation meter is shooting up, craving attention and above all dreaming about that one Free Utopia which they somehow feel lies in the world of the adults!

They say it is a chaotic messy yet fun phase of life.

Adults call it there last leap of joy before getting enslaved with the shackles of responsibility and well bills - you know the classic hamster wheel situation whilst Children see it as “The Age” - the demographic of cool seniors and hippies!

That is exactly what I dreamed my teenage to be but what has it ended up looking like - Just darkness and void!

It feels like I am in this pitch dark basement - my eyes are wide open but I feel chronically blind - like I have been blinded by the world and shielded off from what’s around and within!

I don’t know how long this basement is, how wide and how tall but - there is one sense - sense of panic!

I know its too long and too wide for me to cross into I don’t know whatever is on the other end - honestly I feel like the hope of the other end is slimming!

Despite its phenomenal 2 dimensions - I somehow feel - claustrophobic - like every moment I spend here is just going to suffocate me further - it feels like the ceiling is crashing on to me!

This is what my Teens looked like - I know I ran all along because my straining legs say so, I know I tried hard because my thumping heart says so but Why?

Why do I not see the end?

This question is just one of a plethora of them - Foremost being - How the fuck did I even end up here?

Was my “reality” before I ended up here even real or was that the illusion?

For how real this pain feels I feel like that was the illusion and this - is the reality!

I know I am privileged in ways many aren’t but - why is this pain so unbearable?

I can't see the bright side of things no matter how hard I try!

That is when I realized sometimes the answer to many lies within - before I try to fight the never ending darkness and closing walls outside I should deal with - darkness within!

I started talking that deep voice within - What am I here for?

What is my purpose on this Earth and I only have one wish henceforth - God!

Please make this my last life!

Whatever is the pain and sorrows I shall endure as a karmic debt - Let it end in this life!

I know life henceforth will have more pain more torture but I am ready for whatever that is - I will embrace it with open arms - because that is what is destined for me!

I will accept it!

I shall no longer wish for anything else!`,
    slug: '/tips/what-am-i-here-for',
    image: 'https://i.postimg.cc/dQC6CtS0/Copy-of-KRN06789.jpg',
  }
];

const JourneyPage: React.FC = () => {
  return (
    <Layout>
      {/* PageHeader with gradient */}
      <PageHeader 
        title="Our Personal Journey" 
        subtitle="How we navigated teenage mental health challenges and found hope on the other side"
        className="bg-gradient-to-r from-green-200 to-yellow-200 text-neutral-900"
      />
      
      <div className="container-custom py-12">
        <div className="mb-12 max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800">Sanmati Addala</h3>
                  <p className="text-neutral-600">Co-Founder, Teen Phoenicians</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800">Risha Annem</h3>
                  <p className="text-neutral-600">Co-Founder, Teen Phoenicians</p>
                </div>
              </div>
            </div>
            <p className="text-neutral-700 mb-4">
              Welcome to our personal journey page. We created Teen Phoenicians because we believe in the power of shared experiences. 
              When we were struggling with mental health challenges as teenagers, we both felt completely alone. We didn't know anyone who was going through 
              the same thing, and we didn't have the words to explain what we were feeling.
            </p>
            <p className="text-neutral-700 mb-4">
              Here, we share our stories of navigating teenage depression, anxiety, finding help, and eventually creating this platform together. 
              Our hope is that by being open about our experiences, we can help other teens feel less alone and more empowered 
              to seek the support they need.
            </p>
            <p className="text-neutral-700">
              We also have a YouTube channel where we post weekly videos about mental health, self-care, and our ongoing journeys. 
              Feel free to check it out and join the conversation.
            </p>
          </Card>
        </div>
        
        {/* Articles Section Link */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-green-200 to-yellow-200">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-accent-100 rounded-full">
                  <BookOpen className="w-8 h-8 text-accent-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
                Explore Our Articles
              </h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                Dive deeper into mental health topics with our comprehensive collection of articles, 
                insights, and resources written by our team and community contributors.
              </p>
              <Link to="/journey/articles">
                <Button variant="accent">
                  Browse Articles
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        
        <div className="mb-8 text-center">
          <h2 className="section-title">Our Journey Blog</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Read about our experiences, challenges, and the lessons we've learned along the way
          </p>
        </div>
        
        <div className="space-y-12 mb-12">
          {journeyPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={post.image || "https://via.placeholder.com/400x300"} 
                      alt={post.title} 
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-neutral-500">{post.date}</div>
                      <div className="text-sm text-primary-600 font-medium">by {post.author}</div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-neutral-800">{post.title}</h3>
                    <p className="text-neutral-600 mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <Link to={post.slug}>
                        <Button variant="primary" className="w-full">
                          Read Article <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default JourneyPage;
