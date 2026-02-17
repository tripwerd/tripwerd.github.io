'use client';

import { useState } from 'react';

export default function Home() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);

  const toggleProject = (projectId: string) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

  const toggleCaseStudy = (sectionId: string) => {
    setOpenCaseStudy(openCaseStudy === sectionId ? null : sectionId);
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
                    className="px-8 py-4 bg-orange text-black font-semibold rounded-lg hover:bg-orange-light transition-colors w-fit border-2 border-orange"
                  >
                    What I've Shipped
                  </a>
                  <a
                    href="#case-study"
                    className="px-8 py-4 border-2 border-orange text-orange font-semibold rounded-lg hover:bg-orange/10 transition-colors w-fit"
                  >
                    Engineering Case Study
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

      {/* TECHNICAL CASE STUDY */}
      <section id="case-study" className="py-20 px-6 bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-4 flex-wrap">
            <h2 className="text-5xl font-bold text-white">
              Yardstick
            </h2>
            <a
              href="https://compare-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-orange text-orange font-semibold rounded-lg hover:bg-orange/10 transition-colors"
            >
              Visit Yardstick
            </a>
          </div>
          <p className="text-xl text-gray-400 mb-12">
            Optimized for mobile, Yardstick is a financial data app designed to help users build an intuitive sense of public company value and performance.
          </p>

          <div className="space-y-4">
            {/* What does Yardstick do? */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCaseStudy('what-does')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-white">What does Yardstick do?</h3>
                  <div className="ml-4 text-gray-400">
                    {openCaseStudy === 'what-does' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openCaseStudy === 'what-does' && (
                <div className="px-6 pb-6 border-t border-zinc-800 pt-6">
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Yardstick helps users build intuition around company value and performance. It surfaces a focused set of financial metrics built around three core questions:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-300 text-lg leading-relaxed mb-4">
                    <li>How much money does the company generate?</li>
                    <li>How much of that money does it keep?</li>
                    <li>How much does the market believe the company is worth?</li>
                  </ol>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Each of these questions are explored in the context of time and comparison to other companies, and the data surfaced in the UI—primarily centered around revenue, earnings, and market cap—is intentionally constrained to the metrics that matter most, balancing clarity for the user with efficient upstream API usage and minimizing unnecessary payload size.
                  </p>
                </div>
              )}
            </div>

            {/* How does Yardstick work? */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCaseStudy('how-works')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-white">How does Yardstick work?</h3>
                  <div className="ml-4 text-gray-400">
                    {openCaseStudy === 'how-works' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openCaseStudy === 'how-works' && (
                <div className="px-6 pb-6 border-t border-zinc-800 pt-6 space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The app is built with Next.js, so routing, page rendering, and API endpoints all live in the same codebase. API routes are implemented as serverless functions.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    When a company or list of companies is loaded, the frontend makes a request to one of these internal API routes. That route runs on Vercel as an isolated serverless function. It securely calls the Financial Modeling Prep (FMP) API, using a server-side API key.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The server function fetches the required datasets (e.g., company profile, ratios, price history, income statements), optionally normalizes or reshapes the response, and returns typed JSON back to the client.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    On the frontend, React handles UI interactions like tab switching, time range selection, or chart toggles. When state or data changes, React re-renders the relevant components.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Charts are rendered with Recharts, which maps financial time-series data directly into declarative JSX components. Styling is handled with Tailwind.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Deployment is fully serverless on Vercel, so each API route scales independently and there's no dedicated backend server to manage.
                  </p>
                </div>
              )}
            </div>

            {/* How does Yardstick handle performance and perceived speed? */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCaseStudy('performance')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-white">How does Yardstick handle performance and perceived speed?</h3>
                  <div className="ml-4 text-gray-400">
                    {openCaseStudy === 'performance' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openCaseStudy === 'performance' && (
                <div className="px-6 pb-6 border-t border-zinc-800 pt-6 space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Lists of companies are loaded in two stages. The app first calls the company-screener endpoint and immediately renders lightweight cards with basic data (name, market cap). This initial response is small and returns quickly, so users see meaningful content almost instantly.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Once the list of symbols is known, the app fetches full financial ratios in parallel batches and progressively enhances each card as the data resolves.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    This approach prioritizes perceived speed. Instead of waiting for complete financial datasets, the UI becomes interactive within ~500ms and improves as more data arrives.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    When a user expands a company card, historical market cap, quarterly financials, and earnings data are fetched in parallel to minimize total wait time.
                  </p>
                </div>
              )}
            </div>

            {/* How does Yardstick handle incomplete or restricted data? */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCaseStudy('incomplete-data')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-white">How does Yardstick handle incomplete or restricted data?</h3>
                  <div className="ml-4 text-gray-400">
                    {openCaseStudy === 'incomplete-data' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openCaseStudy === 'incomplete-data' && (
                <div className="px-6 pb-6 border-t border-zinc-800 pt-6 space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Not every company has full financial coverage available from the API. If the ratios endpoint returns a restricted response (e.g., unavailable data), the API route gracefully degrades the response into a "limited" data shape instead of throwing an error.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    On the frontend, this renders a LimitedCompanyCard that displays what is available (such as market cap and beta) while clearly indicating that deeper financial data isn't accessible.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    If the API responds with a rate-limit error, the route returns a controlled fallback response rather than propagating a hard failure to the UI.
                  </p>
                </div>
              )}
            </div>

            {/* How does Yardstick cache data? */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCaseStudy('caching')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-white">How does Yardstick cache data?</h3>
                  <div className="ml-4 text-gray-400">
                    {openCaseStudy === 'caching' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openCaseStudy === 'caching' && (
                <div className="px-6 pb-6 border-t border-zinc-800 pt-6 space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Today, all caching happens on the client.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    <span className="text-orange font-medium">Sector-level caching:</span> When a user loads a sector, the full dataset for that sector is stored in React state. If the user switches away and then returns to that sector, the data is served instantly from memory rather than triggering another API request. This prevents redundant network calls during browsing sessions.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    <span className="text-orange font-medium">LRU cache for historical chart data:</span> The comparison chart maintains a small in-memory LRU (Least Recently Used) cache capped at 20 symbols. When a company's historical market cap or quarterly financials are fetched, they are cached by symbol. If that company is viewed again—either as a primary card or comparison target—the data is reused. When the cache exceeds 20 entries, the least recently used dataset is evicted. This keeps memory usage predictable while avoiding repeated heavy historical fetches.
                  </p>
                </div>
              )}
            </div>

            {/* What would need to change at larger scale? */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCaseStudy('scale')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-white">What would need to change at larger scale?</h3>
                  <div className="ml-4 text-gray-400">
                    {openCaseStudy === 'scale' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openCaseStudy === 'scale' && (
                <div className="px-6 pb-6 border-t border-zinc-800 pt-6 space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    At scale the API rate limit would become the primary bottleneck.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The long-term mitigation strategy would involve adding a server-side caching layer with TTLs aligned to data freshness. For example, historical market cap data and quarterly financials could be cached for longer, whereas company market cap could be cached for shorter. This would drastically reduce upstream API calls and protect against rate-limit spikes during traffic bursts.
                  </p>
                </div>
              )}
            </div>

            {/* How does Yardstick handle security? */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCaseStudy('security')}
                className="w-full p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-white">How does Yardstick handle security?</h3>
                  <div className="ml-4 text-gray-400">
                    {openCaseStudy === 'security' ? '−' : '+'}
                  </div>
                </div>
              </button>
              {openCaseStudy === 'security' && (
                <div className="px-6 pb-6 border-t border-zinc-800 pt-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Yardstick does not collect, store, or process user accounts, authentication credentials, or personal information. The app is entirely read-only and stateless from a user perspective, which significantly reduces the overall attack surface. Unless this were to change, the biggest risk would be API abuse. Adding server-side caching and request throttling would further protect against such abuse.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OUTSIDE OF PRODUCT */}
      <section id="outside" className="py-20 px-6 border-t border-zinc-800">
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
