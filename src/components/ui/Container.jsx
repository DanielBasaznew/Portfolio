import React from 'react';

export const Container = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
