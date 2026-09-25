import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal Component
 * Performance-oriented scroll-triggered reveal wrapper using browser IntersectionObserver.
 * 
 * Features:
 * - Zero external animation libraries (native IntersectionObserver + CSS transitions)
 * - Automatic prefers-reduced-motion detection (instantly visible without movement)
 * - Graceful fallback if IntersectionObserver is unavailable
 * - Configurable direction ('up' | 'down' | 'left' | 'right' | 'scale' | 'none')
 * - Staggered delay & duration support
 * - Unobserves once triggered (single reveal, zero scroll overhead)
 */
export const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.12,
  className = '',
  as: Component = 'div',
  style = {},
  ...props
}) => {
  const ref = useRef(null);

  // Check reduced motion and IntersectionObserver support upfront
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasObserver = 'IntersectionObserver' in window;
    return Boolean(isReduced || !hasObserver);
  });

  useEffect(() => {
    if (isVisible) return; // already visible or fallback active

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, isVisible]);

  // Determine hidden state transform
  const getHiddenTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 24px, 0)';
      case 'down':
        return 'translate3d(0, -24px, 0)';
      case 'left':
        return 'translate3d(24px, 0, 0)';
      case 'right':
        return 'translate3d(-24px, 0, 0)';
      case 'scale':
        return 'scale(0.96)';
      case 'none':
      default:
        return 'none';
    }
  };

  const isReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animationStyle = isReducedMotion
    ? { opacity: 1, transform: 'none' }
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : getHiddenTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
        ...style,
      };

  return (
    <Component
      ref={ref}
      className={className}
      style={animationStyle}
      {...props}
    >
      {children}
    </Component>
  );
};
