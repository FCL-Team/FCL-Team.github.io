import React from 'react';
import {motion} from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Small scroll-reveal wrapper built on motion (the new Framer Motion package).
 * Animations are automatically reduced for users who prefer reduced motion,
 * thanks to <MotionConfig reducedMotion="user"> in src/theme/Root.jsx.
 */
export default function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  y = 22,
  duration = 0.55,
  once = true,
  amount = 0.2,
  inView = true,
  ...rest
}) {
  const Tag = motion[as] || motion.div;
  const trigger = inView
    ? {whileInView: {opacity: 1, y: 0}, viewport: {once, amount}}
    : {animate: {opacity: 1, y: 0}};

  return (
    <Tag
      className={className}
      initial={{opacity: 0, y}}
      transition={{duration, delay, ease: EASE}}
      {...trigger}
      {...rest}>
      {children}
    </Tag>
  );
}
