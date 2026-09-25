import React from 'react';

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
  ...props
}) => {
  const Comp = href ? 'a' : Component;

  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-base disabled:opacity-50 disabled:cursor-not-allowed select-none no-underline cursor-pointer';

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
      href={href}
      target={target}
      rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
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
