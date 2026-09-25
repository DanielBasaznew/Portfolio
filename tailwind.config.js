/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          base: 'var(--bg-base)',
          subtle: 'var(--bg-subtle)',
        },
        surface: {
          card: 'var(--surface-card)',
          hover: 'var(--surface-card-hover)',
          elevated: 'var(--surface-elevated)',
          input: 'var(--surface-input)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          medium: 'var(--border-medium)',
          strong: 'var(--border-strong)',
        },
        brand: {
          indigo: 'var(--accent-indigo)',
          'indigo-hover': 'var(--accent-indigo-hover)',
          emerald: 'var(--accent-emerald)',
          'emerald-hover': 'var(--accent-emerald-hover)',
          cyan: 'var(--accent-cyan)',
          amber: 'var(--accent-amber)',
          rose: 'var(--accent-rose)',
        },
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          dim: 'var(--text-dim)',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        xs: '3px',
        sm: '4px',
        md: '6px',
        lg: '8px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        hud: 'var(--shadow-hud)',
        'glow-indigo': 'var(--glow-indigo)',
        'glow-emerald': 'var(--glow-emerald)',
        'glow-cyan': 'var(--glow-cyan)',
      },
      maxWidth: {
        'content': '1240px',
      },
    },
  },
  plugins: [],
};
