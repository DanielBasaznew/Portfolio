import React, { useRef } from 'react';

/**
 * Button Component with Subtle Magnetic Attraction
 * 
 * Features:
 * - Micro-magnetic pull towards cursor on hover (2-4px)
 * - Releases smoothly on mouse leave
 * - Accessible and disabled when prefers-reduced-motion is active
 * - Communicates 'button' cursor interaction state
 */
export const Button = ({
  as: Component = 'button',
  href,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled = false,
  magnetic = true,
  ...props
}) => {
  const btnRef = useRef(null);
  const Comp = href ? 'a' : Component;

  const handleMouseMove = (e) => {
    if (!magnetic || disabled || typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = btnRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;

    // Constrain magnetic movement to maximum 4px
    const clampedX = Math.max(-4, Math.min(4, deltaX));
    const clampedY = Math.max(-4, Math.min(4, deltaY));

    el.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0)`;
  };

  const handleMouseLeave = () => {
    const el = btnRef.current;
    if (!el) return;
    el.style.transform = 'translate3d(0, 0, 0)';
  };

  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium transition-transform duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-base disabled:opacity-50 disabled:cursor-not-allowed select-none no-underline cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded-sm gap-1.5 tracking-wide',
    md: 'text-sm px-4 py-2 rounded-sm gap-2 tracking-wide',
    lg: 'text-base px-6 py-2.5 rounded-md gap-2.5 tracking-wide',
  };

  const variantStyles = {
    primary:
      'bg-brand-indigo hover:bg-brand-indigo-hover text-white shadow-sm hover:shadow-glow-indigo active:translate-y-px',
    secondary:
      'bg-surface-elevated hover:bg-surface-hover text-content-primary border border-border-medium hover:border-border-strong active:translate-y-px',
    ghost:
      'bg-transparent hover:bg-surface-elevated text-content-secondary hover:text-content-primary active:translate-y-px',
    outline:
      'bg-transparent border border-border-medium hover:border-brand-indigo text-content-primary hover:text-white hover:bg-surface-card active:translate-y-px',
  };

  return (
    <Comp
      ref={btnRef}
      href={href}
      target={target}
      rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="button"
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      disabled={href ? undefined : disabled}
      aria-disabled={disabled ? 'true' : undefined}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </Comp>
  );
};
