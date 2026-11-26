import React from 'react';

/**
 * Shared header for inner pages (download / community / about / eula).
 */
export default function PageHero({title, description}) {
  return (
    <header className="fcl-page-head">
      <div className="fcl-container">
        <h1 className="fcl-page-title">{title}</h1>
        {description ? <p className="fcl-page-desc">{description}</p> : null}
      </div>
    </header>
  );
}
