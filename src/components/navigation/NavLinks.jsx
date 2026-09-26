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
 * with subtle HUD active-section indication.
 */
export const NavLinks = ({
  vertical = false,
  onItemClick,
  activeSection = '',
  className = '',
}) => {
  const handleScroll = (e, href) => {
    // Smooth scroll if element exists, otherwise default hash navigation
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      const navOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <ul
      className={`flex ${
        vertical ? 'flex-col space-y-2 w-full' : 'flex-row items-center space-x-1 lg:space-x-1.5'
      } ${className}`}
    >
      {NAV_ITEMS.map((item) => {
        const itemId = item.href.replace('#', '');
        const isActive = activeSection === itemId;

        return (
          <li key={item.label} className={vertical ? 'w-full' : ''}>
            <a
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              aria-current={isActive ? 'page' : undefined}
              className={`group font-mono text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded-xs flex items-center ${
                vertical
                  ? `block w-full py-2.5 px-3 rounded-sm text-sm border-l-2 ${
                      isActive
                        ? 'text-brand-cyan bg-surface-elevated/80 border-brand-cyan font-semibold shadow-[inset_0_0_12px_rgba(56,189,248,0.08)]'
                        : 'text-content-secondary hover:text-content-primary hover:bg-surface-elevated/60 border-transparent'
                    }`
                  : `px-2.5 py-1.5 rounded-sm border ${
                      isActive
                        ? 'text-brand-cyan bg-surface-elevated/80 border-brand-cyan/40 shadow-[0_0_12px_rgba(56,189,248,0.18)] font-semibold'
                        : 'text-content-secondary hover:text-content-primary hover:bg-surface-elevated/40 border-transparent'
                    }`
              }`}
            >
              {/* Cyan active indicator dot for desktop */}
              {!vertical && isActive && (
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_6px_rgba(56,189,248,0.9)] mr-1.5 animate-pulse"
                  aria-hidden="true"
                />
              )}
              <span>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

