export default {
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        onyx: '#05030a',
        smoke: '#9ca3af',
        vapor: '#7c3aed',
        'vapor-soft': '#8b5cf6',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124, 58, 237, 0.2)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
