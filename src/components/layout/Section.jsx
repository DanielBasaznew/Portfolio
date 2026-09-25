import React from 'react';

export const Section = ({
  id,
  children,
  className = '',
  hasDivider = false,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24 ${
        hasDivider ? 'border-t border-border-subtle' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
