import React from 'react';

export const Badge = ({
  variant = 'default',
  dot = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-0.5 rounded-xs border tracking-wider uppercase select-none';

  const variantStyles = {
    default: {
      badge: 'bg-surface-elevated/70 text-content-secondary border-border-subtle',
      dot: 'bg-content-muted',
    },
    indigo: {
      badge: 'bg-brand-indigo/10 text-brand-indigo border-brand-indigo/30',
      dot: 'bg-brand-indigo',
    },
    emerald: {
      badge: 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/30',
      dot: 'bg-brand-emerald animate-pulse',
    },
    amber: {
      badge: 'bg-brand-amber/10 text-brand-amber border-brand-amber/30',
      dot: 'bg-brand-amber',
    },
    cyan: {
      badge: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30',
      dot: 'bg-brand-cyan',
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles.default;

  return (
    <span className={`${baseStyles} ${currentVariant.badge} ${className}`} {...props}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${currentVariant.dot}`} />}
      <span>{children}</span>
    </span>
  );
};
