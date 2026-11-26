import React from 'react';

/**
 * Root wrapper: renders the fixed full-page artwork layer behind the site.
 * The light/dark images are picked by CSS variables in custom.css.
 */
export default function Root({children}) {
  return (
    <>
      <div className="fcl-site-bg" aria-hidden="true" />
      {children}
    </>
  );
}
