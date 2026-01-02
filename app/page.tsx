'use client';

import { useState } from 'react';

export default function Home() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (projectId: string) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-bold text-white">
              Trip Werd
            </a>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-400 hover:text-orange transition-colors">
                Home
              </a>
              <a href="#shipped" className="text-gray-400 hover:text-orange transition-colors">
                Things I've Shipped
              </a>
              <a href="#story" className="text-gray-400 hover:text-orange transition-colors">
                My Story
              </a>
              <a href="#contact" className="text-gray-400 hover:text-orange transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* PAGE 1: HOME */}

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Trip Werd
          </h1>
          <p className="text-2xl md:text-3xl text-orange mb-4">
            Product Manager building in live streaming / creator tools
          </p>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            I ship features that drive measurable outcomes—revenue growth, user retention, and operational efficiency—while balancing user needs with business goals.
          </p>
          <div className="flex gap-4">
            <a
              href="#shipped"
              className="px-8 py-4 bg-orange text-black font-semibold rounded-lg hover:bg-orange-light transition-colors"
            >
              Things I've Shipped
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-orange text-orange font-semibold rounded-lg hover:bg-orange hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">A bit about me</h2>
          <p className="text-xl text-gray-300 mb-6">
            I grew up in love with music and studied Jazz Saxophone at the University of Michigan. After working in audio engineering at Chicago Recording Company, I joined Blerp as a sound designer and discovered my passion for product management.
          </p>
          <a href="#story" className="text-orange hover:text-orange-light font-semibold">
            Read My Story →
          </a>
        </div>
      </section>

      {/* PAGE 2: THINGS I'VE SHIPPED */}
      <section id="shipped" className="py-20 px-6 bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4">
            Things I've Shipped
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Here are a few of my favorite things I've shipped.
          </p>

          {/* Platform Context */}
          <div className="mb-12 pb-8 border-b border-zinc-800">
            <h3 className="text-2xl font-bold text-orange mb-4">A Bit About Blerp</h3>
            <p className="text-gray-300 leading-relaxed">
              When live streamers on platforms like Twitch, YouTube Live, and Kick add Blerp, their audience is able to redeem pieces of content on the stream. Streamers can charge money for this content redemption, and Blerp takes a cut. The vast majority of content pieces are user generated. Blerp is the largest collection of user generated soundbites in the world with over 1M. Blerp has 2 core products: a Twitch extension and a browser extension (works on all streaming platforms).
            </p>
          </div>

          {/* Projects - Collapsible */}
          <div className="space-y-4">
            {/* Instant Rating */}
            <div id="instant-rating" className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleProject('instant-rating')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">Instant Rating</h3>
                    <p className="text-orange font-medium mb-3">
                      Cut time-to-moderate by ~90%, lifted revenue ~5%, freed ~40% moderator capacity
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Trust & Safety</span>
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">AI/ML</span>
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Monetization</span>
                    </div>
                  </div>
                  <div className="ml-4 text-gray-400">
                    {openProject === 'instant-rating' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openProject === 'instant-rating' && (
                <div className="px-6 pb-6 space-y-6 border-t border-zinc-800 pt-6">
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Background & Problem</h4>
                    <p className="text-gray-300 leading-relaxed">
                      When a user (typically a viewer) uploads content to Blerp, they want to redeem it on a live stream. However, content needs to be moderated first to prevent inappropriate material. Blerp traditionally did this manually—humans would rate every piece of content. As Blerp grew, this became unsustainable. Moderators were at 95% capacity just rating content, unable to work on higher-impact projects. Viewers were frustrated with wait times. Time-to-moderate was around 24 hours, which is far too slow for time-sensitive live streaming use cases.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Solution</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Through discovery, we found viewers were willing to pay for faster, more reliable moderation. Using OpenAI Whisper transcription and a set of logic/rules around language, we built an AI-assisted moderation solution. Combined with a new streamlined dashboard for cases requiring human review, we automated the majority of the moderation workflow.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Impact</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Cut time-to-moderate by 90%, grew revenue 5%, and freed 40% of moderator capacity to focus on strategic work like policy development and edge case handling.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Category Moderation */}
            <div id="category-moderation" className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleProject('category-moderation')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">Category Moderation</h3>
                    <p className="text-orange font-medium mb-3">
                      Reduced creator churn by an estimated ~6%
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Retention</span>
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Customization</span>
                    </div>
                  </div>
                  <div className="ml-4 text-gray-400">
                    {openProject === 'category-moderation' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openProject === 'category-moderation' && (
                <div className="px-6 pb-6 space-y-6 border-t border-zinc-800 pt-6">
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Background & Problem</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Streamers can control which types of content are available to their audience via settings. Traditionally, all content was rated linearly: G, PG, PG-13, or R. The problem? Content can be rated on many verticals (language, sound, sexual content, violence), and streamers have different preferences. The one-size-fits-all system was falling short—streamers couldn't create their perfect content experience, and they were churning.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Solution</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We built a granular rating system across 18+ categories and combined many of these into an intuitive user-facing interface. This gave streamers fine-grained control over what content appeared in their channel, allowing them to customize their stream's vibe precisely.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Impact</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Made available to all new streamers, the feature cut churn by an estimated 6% by giving creators the control they needed.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Community Wallet */}
            <div id="community-wallet" className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleProject('community-wallet')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">Community Wallet</h3>
                    <p className="text-orange font-medium mb-3">
                      Lifted monthly active users per channel by ~5%
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Monetization</span>
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Engagement</span>
                    </div>
                  </div>
                  <div className="ml-4 text-gray-400">
                    {openProject === 'community-wallet' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openProject === 'community-wallet' && (
                <div className="px-6 pb-6 space-y-6 border-t border-zinc-800 pt-6">
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Background & Problem</h4>
                    <p className="text-gray-300 leading-relaxed">
                      On paid channels, a small number of viewers (roughly 5%) were responsible for an outsized portion of activity (90% of content redeemed). We wanted to expand the market and drive more unique users per channel.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Solution</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We shipped a feature allowing users to pre-pay and contribute credits to a shared virtual wallet (the "community wallet"), effectively enabling viewers to purchase content on behalf of other viewers. This lowered the barrier to participation and encouraged community-driven engagement.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Impact</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Monthly active users per channel increased by 5%, expanding the active user base and creating a more vibrant channel ecosystem.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Leaderboards */}
            <div id="leaderboards" className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleProject('leaderboards')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">Leaderboards</h3>
                    <p className="text-orange font-medium mb-3">
                      Increased revenue by ~4%
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Engagement</span>
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Monetization</span>
                    </div>
                  </div>
                  <div className="ml-4 text-gray-400">
                    {openProject === 'leaderboards' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openProject === 'leaderboards' && (
                <div className="px-6 pb-6 space-y-6 border-t border-zinc-800 pt-6">
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Background & Problem</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Through discovery, we learned streamers were manually tracking top contributors on their channels. There was significant opportunity to automate this. We also found streamers competing with each other to see which channel could drive the most Blerp activity.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Solution</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We shipped two leaderboard features: one ranking viewers within an individual stream, and another ranking the top streams using Blerp across the platform. This created competitive dynamics both within and across channels.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Impact</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Revenue increased by 4% as streamers and viewers engaged more competitively, driving higher redemption rates.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300 mb-6">
              Want the full resume or to chat?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-orange text-black font-semibold rounded-lg hover:bg-orange-light transition-colors"
            >
              Reach Out
            </a>
          </div>
        </div>
      </section>

      {/* PAGE 3: MY STORY */}
      <section id="story" className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">
            My Story
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            From musician to audio engineer to product manager
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-orange mb-3">Music first</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I grew up in love with music. My parents always found me sitting at the household piano and decided to get me lessons. I found I had a natural knack for it and took lessons for 14 years. I studied Jazz Saxophone Performance in college at the University of Michigan.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-3">From performance to production</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                In college, I came to the realization that I no longer wanted to be a professional musician, so I pivoted to audio engineering. It combined my love of music with a more technical, production-oriented craft.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-3">The studio years</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I worked at the largest independent recording studio in the US, Chicago Recording Company, where I got to meet and work with clients like Chance the Rapper, Chris Rock, John Cusack, Common, and more.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-3">Startup shift</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I then got a job at a startup—Blerp—doing audio content creation and sound design. Being at a startup exposed me to all the moving parts of building a product, and I got my first taste of product management.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-3">Finding product</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I was immediately intrigued by the PM role. I loved the impact, the multidisciplinary component, and the creativity required. But most of all, I loved the feeling of accomplishment that came from leading a multidisciplinary team and achieving successful outcomes—shipping something that moved the needle.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-3">Leveling up</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                After a few years of doing PM at Blerp, I knew I needed to level up my product ability and enrolled at NYU Stern to pursue my Tech MBA. I'll be graduating in May and am looking to bring my startup PM scrappiness to a large product org.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-800">
              <h3 className="text-2xl font-semibold text-orange mb-3">A little outside work</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not building products, you'll find me listening to the Grateful Dead, playing chess, or watching American football (Go Blue!).
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center pt-8 border-t border-zinc-800">
            <p className="text-xl text-gray-300 mb-6">
              If you want to build together, I'd love to talk.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-orange text-black font-semibold rounded-lg hover:bg-orange-light transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* PAGE 4: CONTACT */}
      <section id="contact" className="py-20 px-6 bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's connect and build something great together.
          </p>

          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-orange mb-2">Email</h3>
              <a
                href="mailto:tripwerd@gmail.com"
                className="text-gray-300 hover:text-orange transition-colors text-lg"
              >
                tripwerd@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/trip-werd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange transition-colors text-lg"
              >
                linkedin.com/in/trip-werd
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange mb-2">GitHub</h3>
              <a
                href="https://github.com/tripwerd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange transition-colors text-lg"
              >
                github.com/tripwerd
              </a>
            </div>
          </div>

          <p className="text-gray-400 text-lg">
            Open to product roles and interesting collaborations.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Trip Werd
          </p>
        </div>
      </footer>
    </div>
  );
}
