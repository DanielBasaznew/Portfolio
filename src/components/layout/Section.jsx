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
      className={`relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-24 ${
        hasDivider ? 'border-t border-border-subtle' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
