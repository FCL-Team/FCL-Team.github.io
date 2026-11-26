import React from 'react';
import {MotionConfig} from 'motion/react';

/**
 * Root wrapper: fixed full-page artwork layer + global motion settings.
 * The light/dark images are picked by CSS variables in custom.css.
 */
export default function Root({children}) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="fcl-site-bg" aria-hidden="true" />
      {children}
    </MotionConfig>
  );
}
