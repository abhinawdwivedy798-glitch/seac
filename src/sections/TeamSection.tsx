import React from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { team } from '../data/team';

// A revealable team section with blurred teaser and full grid on click.
// Colors inherit from your app. To tweak the holographic accents for the card,
// you can set CSS variables on the wrapper (see comment below).
const TeamSection: React.FC = () => {
  const [revealed, setRevealed] = React.useState(false);

  // Limit how many are shown in teaser
  const teaserCount = Math.min(3, team.length);
  const teaserMembers = team.slice(0, teaserCount);

  return (
    <section
      id="meet-our-team"
      className="relative py-12 md:py-20"
      /*
        Optional theming hook:
        style={{
          // Example: shift the rainbow tones toward your brand
          // @ts-ignore - using CSS custom properties
          '--sunpillar-4': 'hsl(210, 100%, 70%)',
          '--sunpillar-5': 'hsl(230, 100%, 70%)',
          '--sunpillar-6': 'hsl(260, 100%, 72%)',
        }} as React.CSSProperties
      */
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary-700 dark:text-primary-300">
            Meet our team
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-300">
            The people behind SEAC. Click to reveal the full crew.
          </p>
        </div>

        {!revealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            aria-label="Reveal team"
            className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl p-4 md:p-6 transition transform hover:scale-[1.01]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {teaserMembers.map((m) => (
                <div key={m.id} className="relative">
                  <div className="pointer-events-none select-none">
                    <ProfileCard
                      name={m.name}
                      title={m.title}
                      handle={m.handle}
                      status={m.status || 'Online'}
                      contactText="Contact"
                      avatarUrl={m.avatarUrl}
                      showUserInfo={true}
                      enableTilt={true}
                      enableMobileTilt={false}
                    />
                  </div>
                  {/* Blur overlay for teaser */}
                  <div className="absolute inset-0 rounded-[30px] bg-slate-900/20 backdrop-blur-[6px] contrast-75 brightness-90 ring-1 ring-inset ring-white/10" />
                </div>
              ))}
            </div>
            <div className="pointer-events-none mt-5 flex items-center justify-center gap-2 text-slate-700 dark:text-slate-200">
              <svg className="h-5 w-5 opacity-80 group-hover:opacity-100 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              <span className="text-sm md:text-base font-medium opacity-80 group-hover:opacity-100 transition">
                Click to reveal the full team
              </span>
            </div>
          </button>
        ) : (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {team.map((m) => (
                <ProfileCard
                  key={m.id}
                  name={m.name}
                  title={m.title}
                  handle={m.handle}
                  status={m.status || 'Online'}
                  contactText="Contact"
                  avatarUrl={m.avatarUrl}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  className="shadow-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;