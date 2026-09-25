import React from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

/**
 * NavLinks component supporting horizontal (desktop) and vertical (mobile) layouts
 */
export const NavLinks = ({
  vertical = false,
  onItemClick,
  className = '',
}) => {
  const handleScroll = (e, href) => {
    // Smooth scroll if element exists, otherwise default hash navigation
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <ul
      className={`flex ${
        vertical ? 'flex-col space-y-3 w-full' : 'flex-row items-center space-x-1 lg:space-x-2'
      } ${className}`}
    >
      {NAV_ITEMS.map((item) => (
        <li key={item.label} className={vertical ? 'w-full' : ''}>
          <a
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className={`font-mono text-xs uppercase tracking-wider transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded-xs ${
              vertical
                ? 'block w-full py-2.5 px-3 rounded-sm text-content-secondary hover:text-content-primary hover:bg-surface-elevated/60 text-sm'
                : 'px-2.5 py-1.5 text-content-secondary hover:text-content-primary hover:bg-surface-elevated/40'
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
