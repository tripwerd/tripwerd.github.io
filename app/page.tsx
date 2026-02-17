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
              <a href="#story" className="text-gray-400 hover:text-orange transition-colors">
                My Story
              </a>
              <a href="#shipped" className="text-gray-400 hover:text-orange transition-colors">
                What I've Shipped
              </a>
              <a href="#outside" className="text-gray-400 hover:text-orange transition-colors">
                Outside of Product
              </a>
              <a href="#case-study" className="text-gray-400 hover:text-orange transition-colors">
                Case Study
              </a>
              <a href="#contact" className="text-gray-400 hover:text-orange transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm Trip.
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8">
                I'm a musician turned PM with an ear for user needs, a feel for product cadence, and a proven track record of shipping real solutions that drive meaningful metrics.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#shipped"
                    className="px-8 py-4 bg-orange text-black font-semibold rounded-lg hover:bg-orange-light transition-colors w-fit"
                  >
                    What I've Shipped
                  </a>
                  <a
                    href="#case-study"
                    className="px-8 py-4 border-2 border-orange text-orange font-semibold rounded-lg hover:bg-orange/10 transition-colors w-fit"
                  >
                    Technical Case Study
                  </a>
                </div>
                <div className="flex gap-4">
                  <a
                    href="mailto:tripwerd@gmail.com"
                    className="text-gray-400 hover:text-orange transition-colors"
                    aria-label="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/tripwerd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/trip-werd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-orange shadow-2xl">
                <img
                  src="/headshot_blue.jpg"
                  alt="Trip Werd headshot"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section id="story" className="py-20 px-6 bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">
            My Story
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">Beginnings in Music</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I studied <a href="https://youtu.be/SSjNtMzrdTQ?si=P4LEsxmbRDcO4Lfc" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange-light underline">classical piano for 14 years</a> and was a dedicated saxophonist, eventually <a href="https://www.youtube.com/watch?v=_YqqWSv6Rh0&list=RD_YqqWSv6Rh0&start_radio=1" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange-light underline">performing for New Trier Township High School</a>—one of the top high school jazz programs in the country—in venues across New York, Chicago, and New Orleans. Along the way, I had the opportunity to open for groups and artists including the Dizzy Gillespie All Stars and Christian McBride. As principle alto saxophonist, what I loved most was leading my saxophone section: learning challenging material, pushing us to excel, and celebrating the shared success of a strong performance together.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">Transition to Audio</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I attended the University of Michigan to study jazz saxophone performance. While I loved music, I came to realize that I didn't want to pursue life as a professional musician. Instead, I became interested in the technical side of sound and transitioned into audio engineering.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                I learned to mix, edit, and design audio for music, television, advertising, <a href="https://vimeo.com/403883082" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange-light underline">film</a>, and <a href="https://vimeo.com/449554456" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange-light underline">video games</a>. I worked at the <a href="https://chicagorecordingcompany.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange-light underline">Chicago Recording Company</a>, where I was able to work with clients like Chance the Rapper, John Cusack, and Chris Rock. Then, in 2021, I joined the startup Blerp as a sound designer.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">Discovering Product</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                At <a href="https://blerp.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange-light underline">Blerp</a>, I was exposed to product management for the first time. Watching designers, engineers, and PMs work together to ship meaningful outcomes echoed the teamwork I'd experienced as principle alto saxophonist, and I became instantly hooked.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                I immersed myself in everything product—both inside and the Blerp office—reading books, sitting in on discussions, contributing wherever possible, and gradually taking on more responsibility. That progression led to over four years in a dedicated product role, where I shipped solutions across our product suite.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">Leveling Up</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                While I loved my time working at Blerp, I knew that to truly excel as a PM I needed to deepen my business and technical foundations. I began the <a href="https://www.stern.nyu.edu/programs-admissions/tech-mba/program" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange-light underline">Tech MBA</a> program at the NYU Stern School of Business in May 2025.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                The MBA has been transformative. It's given me stronger fluency in applying technology to real business problems and sharpened how I think about product decisions in a broader organizational context. Developing skills across disciplines like data science, finance, engineering, and business strategy has been rewarding and strengthened confidence significantly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">What's Next</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I graduate in May 2026. While I've loved building products in a startup environment, I see my next chapter in a larger organization—one where I can learn from exceptional product leaders and operate at greater scale.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                I'm excited to bring my unique background to that environment, contributing thoughtfully while continuing to grow as a product leader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I'VE SHIPPED */}
      <section id="shipped" className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">
            What I've Shipped at Blerp
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Blerp helps live streamers monetize by letting their audience trigger user-generated content directly inside their broadcast. I shipped several key solutions across the entire product suite. To name a few:
          </p>

          {/* Projects - Collapsible */}
          <div className="space-y-4">
            {/* Instant Rating */}
            <div id="instant-rating" className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleProject('instant-rating')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">Instant Rating</h3>
                    <p className="text-orange font-medium mb-3">
                      Lifted company revenue 5%
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
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Every piece of user-generated content on Blerp had to be manually moderated before it could be triggered on a live stream. This was necessary to protect streamers from unwanted content, but it created a growing bottleneck as our platform scaled. Moderators were operating at ~95% capacity just to keep up with ratings, leaving little room for higher impact, less monotonous work.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      At the same time, creators and viewers were waiting 24+ hours for content approval—an unacceptable delay in a real-time live-streaming environment. Scaling moderation linearly with headcount wasn't viable, but safety standards couldn't be compromised.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Solution & Impact</h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      I designed and shipped a hybrid moderation system that combined automated approvals with conservative human review. We integrated OpenAI's Whisper for audio transcription and built a rules engine to evaluate content across multiple safety dimensions. Clear passes were instantly approved, while ambiguous cases were flagged for human review through a redesigned moderation workflow optimized for speed and focus.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      We launched this as Instant Rating, a paid feature for users who valued immediate approval. At our price point, the feature was strongly profitable at the unit level, while reducing time-to-moderate from 24 hours to under 2 minutes for ~85% of content, generating a 5% lift in revenue, and freeing ~40% of moderator capacity.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Category Moderation */}
            <div id="category-moderation" className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleProject('category-moderation')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">Category Moderation</h3>
                    <p className="text-orange font-medium mb-3">
                      Reduced creator churn by an estimated 6%
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
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Blerp originally used a single linear content rating system (G, PG, PG-13, R) that streamers could enable up to a chosen level. While simple, this model broke down in practice. Streamers don't think in linear ratings—they think in content types. A family-friendly streamer might tolerate cartoon violence but not profanity, while an edgy comedy streamer might allow strong language but reject sexual content.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      The blunt rating system forced streamers to choose between being overly restrictive or allowing content that didn't match their brand. Exit interviews and ongoing user conversations revealed the same pattern: streamers liked Blerp, but churned because they couldn't control their channel's "vibe."
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Solution & Impact</h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      I designed and shipped a two-layer content control system: a precise backend that rated content across 18+ categories (e.g., profanity, violence, sexual content, sound intensity), paired with a simplified UI that grouped related controls into intuitive settings. This gave streamers granular control without overwhelming them, allowing them to tailor content rules to their specific audience and style.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      The system was rolled out to all new streamers with a smooth migration path for existing users. Churn among new streamers dropped by an estimated 6%, and qualitative feedback consistently highlighted a renewed sense of control and trust in the platform. This became one of Blerp's most trusted features and a key product differentiator.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Ask AI */}
            <div id="ask-ai" className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleProject('ask-ai')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">Ask AI</h3>
                    <p className="text-orange font-medium mb-3">
                      Lifted active channel revenue by ~20%
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">AI/ML</span>
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Monetization</span>
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Engagement</span>
                    </div>
                  </div>
                  <div className="ml-4 text-gray-400">
                    {openProject === 'ask-ai' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openProject === 'ask-ai' && (
                <div className="px-6 pb-6 space-y-6 border-t border-zinc-800 pt-6">
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Background & Problem</h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Through ongoing conversations with streamers, a consistent theme emerged: many of them loved a competitor's AI-driven text-to-speech feature and actively cited it as a reason for spending time and money off-platform. The feature created entertaining, unpredictable moments that viewers could directly influence in real time.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      This presented a clear risk and opportunity. We were losing engagement to a differentiated feature elsewhere, and streamers expected Blerp to support similar interactive experiences inside their broadcast. If we didn't close that gap, we risked falling behind in product depth.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Solution & Impact</h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      I led the design and launch of Ask AI, a real-time TTS feature that let streamers add AI characters directly to their stream. Streamers could build custom personas or choose from celebrity-style characters, while viewers prompted them live and heard the responses spoken aloud on stream.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Under the hood, this required integrating OpenAI APIs, prompt engineering distinct character personalities, and building guardrails to keep responses entertaining, safe, and on-brand for live broadcasts. The feature fit naturally into Blerp's existing redemption model, allowing viewers to pay to interact with AI characters in real time.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Ask AI quickly gained traction with streamers already familiar with similar tools and drove incremental engagement. The launch lifted active channel revenue by ~20%, helped neutralize competitive pressure, and expanded Blerp's identity from soundboard platform to interactive, AI-powered live-stream entertainment.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Community Wallet */}
            <div id="community-wallet" className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleProject('community-wallet')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">Community Wallet</h3>
                    <p className="text-orange font-medium mb-3">
                      Increased monthly active users per channel by ~40%
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Monetization</span>
                      <span className="px-3 py-1 bg-zinc-800 text-orange rounded-full text-sm">Growth</span>
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
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Engagement on paid channels followed a classic power-law distribution: ~5% of viewers drove ~90% of content redemptions. These power users were highly engaged and spent heavily, but the vast majority of viewers never participated at all. They watched, enjoyed the moments, but didn't redeem content themselves.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      This limited both revenue growth and channel vibrancy. Participation was concentrated in a small group, and lowering prices or pushing harder on monetization risked alienating passive viewers. We needed a way to broaden participation without undermining the existing spend from power users.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Solution & Impact</h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Through usage analysis and user interviews, I discovered that non-participating viewers enjoyed the social experience but didn't want to be the one paying, while power users actively wanted their friends and the broader chat to engage more. Many even expressed willingness to subsidize participation for others.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      I designed and shipped the Community Wallet: a shared pool of credits that anyone in a channel could contribute to and anyone could use. Power users could "buy rounds" for the entire chat, enabling free participation while preserving the monetization model. The feature also created visible social moments when users funded the wallet, reinforcing generosity and community status.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      The result was broader engagement and stronger monetization. Monthly active users per channel increased by 40%, channels felt noticeably more vibrant, and power users spent more overall by funding community participation—expanding the market without cannibalizing existing revenue.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Leaderboards */}
            <div id="leaderboards" className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleProject('leaderboards')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
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
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Competitive behavior already existed within Blerp, but it was entirely informal. Streamers manually tracked their top contributors in spreadsheets and gave shoutouts, while viewers sought recognition and status for their participation. Engagement wasn't just about redeeming content—it was about being seen in the community.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      At the same time, streamers were informally competing with each other, bragging in Discord about which channels drove the most Blerp activity. These behaviors signaled strong motivation, but none of it was supported or amplified by the product. We were leaving engagement and retention on the table.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange mb-2">Solution & Impact</h4>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      I designed and shipped a leaderboard system that formalized both viewer-level and streamer-level competition while remaining inclusive. We introduced monthly channel leaderboards that highlighted top contributors within a stream, giving viewers achievable status and recurring chances to compete. In parallel, we launched a platform-wide leaderboard ranking the most active Blerp channels, enabling streamer-to-streamer competition.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      The feature increased revenue by 4%, turned top viewers into recognizable channel figures, and encouraged streamers to actively promote their standing. Recognition drove participation, participation drove recognition—and the system became one of the platform's stickiest engagement loops.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OUTSIDE OF PRODUCT */}
      <section id="outside" className="py-20 px-6 bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">
            Outside of Product
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">The Grateful Dead</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Needless to say, music has always been a big part of my life—composing it, listening to it, and playing it. I gravitate toward folk, rock, and jazz, but my introduction to Dead & Co at Wrigley Field in 2022 stands out as the most seminal musical experience I've had.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Since then, I've seen them 9 times. What keeps me coming back is the combination of improvisation, thoughtful setlist design, emotional range, deep lore, and the strong sense of culture and community around the music. At the heart of the music sits a profound paradox: the music is both incredibly complex and disarmingly simple simultaneously.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                For any fellow Deadheads, a few favorites: <em>Maybe It Was the Roses</em>, <em>Peggy-O</em>, <em>Terrapin Station</em>, and <em>Help on the Way</em>.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">American Football</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Sports have always mattered to me, especially football. What draws me in is the same paradox I enjoy in other systems: on one hand, football is deeply complex and strategic; on the other, the teams that win are often the ones that execute the fundamentals best.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                More than anything, I love watching <a href="https://x.com/chargers/status/1855780531394551838" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-orange-light underline">teams experience shared accomplishment</a>—those moments when preparation, trust, and execution pay off tremendously. It reminds me of my time as a lead alto saxophonist and continues to inspire how I think about teamwork and leadership as a PM.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">Chess</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                For similar reasons, I've always enjoyed chess. I'm drawn to both the strategic depth of the game and its long history—the fact that players today are still studying and playing lines that are hundreds of years old never stops amazing me.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                While I wouldn't call myself an exceptional player, I enjoy spending free time chasing incremental rating gains on Chess.com and appreciating how small improvements compound over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-12">
            Contact
          </h2>

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
            Currently seeking PM roles | Graduating May 2026
          </p>
        </div>
      </section>

      {/* TECHNICAL CASE STUDY */}
      <section id="case-study" className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">
            Technical Case Study: Yardstick
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Yardstick is a financial comparison tool I designed and built to make it easy for people with average financial literacy to understand companies in context—in the context of the market, in the context of other companies, and in the context of themselves.
          </p>

          <div className="space-y-12">
            {/* Application Mission */}
            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">Application Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Most financial tools are built for analysts and power users. They're dense, jargon-heavy, and assume you already know what you're looking at. Yardstick takes the opposite approach: surface the metrics that actually matter—market cap, revenue, earnings—and present them in a way that makes relative scale immediately intuitive.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The core interaction model is comparison. Every company card displays inline price-to-sales and price-to-earnings multiples, color-coded so users can quickly gauge relative valuation without doing the math themselves. Expanding a card reveals a historical chart where users can overlay a second company and toggle between market cap, revenue, and earnings over time. Sector filtering lets users browse the largest companies in any industry. The goal is always the same: understand a company by seeing it next to something familiar.
              </p>
            </div>

            {/* Technical Architecture */}
            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">Technical Architecture</h3>
              <div className="space-y-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Frontend</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li><span className="text-orange font-medium">Next.js 16</span> — App Router with Turbopack. Selected for its file-based routing, built-in API routes (eliminating the need for a separate backend), and seamless Vercel deployment.</li>
                        <li><span className="text-orange font-medium">React 19</span> — Component model with hooks for state management. No external state library needed—component-local useState handles all UI state.</li>
                        <li><span className="text-orange font-medium">TypeScript</span> — End-to-end type safety from API response types through component props. Critical for a data-heavy app where shape mismatches cause silent rendering bugs.</li>
                        <li><span className="text-orange font-medium">Tailwind CSS v4</span> — Utility-first styling with custom @theme color tokens. Enables rapid iteration without CSS file proliferation.</li>
                        <li><span className="text-orange font-medium">Recharts</span> — React-native charting library for the historical comparison charts. Selected over D3 for simplicity—declarative JSX API maps naturally to React's component model.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Backend & Infrastructure</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li><span className="text-orange font-medium">Vercel Serverless Functions</span> — Each API route deploys as an isolated serverless function. Zero server management, automatic scaling, and the API key stays server-side (never exposed to the browser).</li>
                        <li><span className="text-orange font-medium">Financial Modeling Prep (FMP) API</span> — The sole external data source. Provides company profiles, financial ratios, historical prices, income statements, earnings calendars, and a company screener. Selected for its breadth of data on a free tier.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Loading */}
            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">Data Loading</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Every piece of data flows through Next.js API routes that proxy calls to the FMP API. This keeps the API key server-side and gives us a clean abstraction layer for error handling, data transformation, and rate limit management.
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">GET /api/top-companies</h4>
                  <p className="text-gray-400 text-sm mb-2">FMP endpoints: /stable/company-screener, /stable/profile, /stable/ratios-ttm</p>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    <span className="text-orange">Trigger:</span> Page load, and whenever the user selects a different sector filter.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Uses a two-phase loading strategy. Phase 1 ("quick mode") hits only the screener endpoint and returns basic data (name, market cap, beta) for instant display. Phase 2 fires in the background, fetching full financial ratios for each company in parallel batches of 10, then replaces the skeleton data. This gives users something to look at in under a second while the heavier data loads behind the scenes.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">GET /api/search?q=TICKER</h4>
                  <p className="text-gray-400 text-sm mb-2">FMP endpoints: /stable/profile, /stable/ratios-ttm</p>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    <span className="text-orange">Trigger:</span> User submits a ticker in the search bar.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Fetches the company profile and TTM financial ratios in parallel. If the ratios endpoint returns a 402 (data not available on the free tier), the response gracefully degrades to a "limited" data shape and the frontend renders a LimitedCompanyCard with only market cap and beta. This prevents the app from breaking on tickers outside the ~87 companies with full free-tier coverage.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">GET /api/historical/[symbol]</h4>
                  <p className="text-gray-400 text-sm mb-2">FMP endpoints: /stable/historical-market-capitalization (paginated)</p>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    <span className="text-orange">Trigger:</span> User expands a company card (chart renders automatically).
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Fetches full historical market cap data with pagination support (5,000 records per page). If a company has more than 5,000 trading days of history, the route automatically fetches the next page and deduplicates by date before returning the combined dataset.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">GET /api/historical-financials/[symbol]</h4>
                  <p className="text-gray-400 text-sm mb-2">FMP endpoint: /stable/income-statement (quarterly, limit 40)</p>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    <span className="text-orange">Trigger:</span> User expands a company card (fetched alongside historical market cap).
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Returns ~10 years of quarterly revenue and net income data. Used by the comparison chart when users toggle from market cap to revenue or earnings views. Calendar-quarter normalization ensures companies with different fiscal year-end dates align correctly on the chart.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">GET /api/earnings/[symbol]</h4>
                  <p className="text-gray-400 text-sm mb-2">FMP endpoint: /stable/earnings (limit 5)</p>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    <span className="text-orange">Trigger:</span> User expands a company card.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Fetches the next upcoming earnings date. If the company has a future earnings call where epsActual is still null, the card displays a live countdown timer that updates every minute—giving users context on when the displayed financials might change.
                  </p>
                </div>
              </div>
            </div>

            {/* Caching Strategy */}
            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">Caching Strategy</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Caching happens at two levels:
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">Client-Side: Sector Data</h4>
                  <p className="text-gray-300 leading-relaxed">
                    When a user loads a sector (e.g., "Technology"), the full company data for that sector is cached in React state. Switching back to a previously loaded sector reads from the cache instantly instead of refetching. This is tracked via a loadedSectors Set and a sectorCompanies record, preventing redundant API calls as users browse between sectors.
                  </p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">Client-Side: Chart Data (LRU Cache)</h4>
                  <p className="text-gray-300 leading-relaxed">
                    The ComparisonChart component maintains an LRU (Least Recently Used) cache of historical data, capped at 20 entries. When a user expands a company card, both market cap history and quarterly financials are fetched and cached by symbol. If that symbol appears again (either as a primary card or as a comparison target), the data is served from cache. When the cache exceeds 20 entries, the oldest entry is evicted.
                  </p>
                </div>
              </div>
            </div>

            {/* Scaling Considerations */}
            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">What Would Break at Scale</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Yardstick currently runs on FMP's free tier (250 API calls/day). Each page load triggers 2+ API calls for the screener, and each card expansion triggers 3 more (historical market cap, historical financials, earnings). A single user session exploring 5 companies could easily consume 20+ calls.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                At true scale, the first thing that would break is the API rate limit. Even a modest increase in traffic—say, 50 concurrent users—would exhaust the daily quota within minutes. The second pressure point is server costs: every request currently makes a fresh round-trip through Vercel serverless functions to FMP, with no server-side caching layer.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                The mitigation path would involve aggressive server-side caching (Redis or an in-memory store at the API route level) with TTLs aligned to data freshness requirements—company profiles could cache for hours, while historical data could cache for a full day. This would dramatically reduce FMP calls per user and save on serverless function invocation costs. Beyond caching, scaling would likely require upgrading FMP API plans to increase rate limits and unlock full data coverage for all tickers, eliminating the current "limited" data fallback.
              </p>
            </div>

            {/* Design Decisions */}
            <div>
              <h3 className="text-2xl font-semibold text-orange mb-4">Notable Design Decisions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Two-Phase Loading</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Rather than making users wait for full financial data on every sector switch, the app renders "limited" cards immediately with screener data, then progressively enhances them with full ratios. This gives users something interactive within ~500ms while the heavier data resolves in the background.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Graceful Degradation</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Not every ticker has full data on the free tier. Instead of showing an error, the app renders a LimitedCompanyCard that displays what it can (market cap, beta) and clearly communicates what's unavailable. The user never sees a broken state.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Inline Valuation Multiples</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Price-to-sales and price-to-earnings multiples are calculated on the fly and displayed as color-coded badges (green/amber/red) directly on the collapsed card. This surfaces valuation context at a glance without requiring the user to expand or compare—lowering the barrier to understanding what a company's numbers actually mean relative to its price.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Calendar Quarter Normalization</h4>
                  <p className="text-gray-300 leading-relaxed">
                    When comparing quarterly revenue or earnings between two companies, the chart normalizes fiscal periods to calendar quarters. This ensures that Apple (fiscal year ending September) and Microsoft (fiscal year ending June) align correctly on the same axis, making the comparison meaningful rather than misleading.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
