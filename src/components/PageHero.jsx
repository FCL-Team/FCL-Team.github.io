import React from 'react';

/**
 * Shared header for inner pages (download / community / about / eula).
 */
export default function PageHero({eyebrow, title, description, children}) {
  return (
    <header className="fcl-page-head">
      <div className="fcl-container">
        {eyebrow ? <span className="fcl-eyebrow">{eyebrow}</span> : null}
        <h1 className="fcl-page-title">{title}</h1>
        {description ? <p className="fcl-page-desc">{description}</p> : null}
        {children ? <div className="fcl-page-head__extra">{children}</div> : null}
      </div>
    </header>
  );
}
