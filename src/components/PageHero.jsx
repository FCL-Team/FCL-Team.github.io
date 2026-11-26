import React from 'react';
import Reveal from '@site/src/components/motion/Reveal';

/**
 * Shared header for inner pages (download / community / about / eula).
 */
export default function PageHero({title, description}) {
  return (
    <header className="fcl-page-head">
      <div className="fcl-container">
        <Reveal as="h1" className="fcl-page-title" inView={false}>
          {title}
        </Reveal>
        {description ? (
          <Reveal as="p" className="fcl-page-desc" inView={false} delay={0.08}>
            {description}
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
