module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0f0b2b", // deep-navy-900
        "primary-light": "#1a1654", // navy-800
        accent: "#D4AF37", // gold-500
        "accent-hover": "#B8941F", // gold-600
        background: "#fafafa", // gray-50
        surface: "#ffffff", // white
        "text-primary": "#1a1a1a", // gray-900
        "text-secondary": "#4a4a4a", // gray-600
        success: "#22c55e", // green-500
        warning: "#f59e0b", // amber-500
        error: "#ef4444", // red-500
        border: "#e5e7eb", // gray-200
        "border-active": "#D4AF37", // gold-500
      },
      fontFamily: {
        hindi: ['Mukti Vaani', 'sans-serif'],
        'hindi-body': ['Noto Sans Devanagari', 'sans-serif'],
        'hindi-accent': ['Noto Serif Devanagari', 'serif'],
        sans: ['Noto Sans Devanagari', 'sans-serif'],
        serif: ['Noto Serif Devanagari', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'gold': '0 10px 15px -3px rgba(212, 175, 55, 0.3)',
        'whatsapp': '0 10px 15px -3px rgba(34, 197, 94, 0.3)',
      },
      animation: {
        'slide-up': 'slideUp 300ms ease-in-out',
        'pulse-slow': 'pulse 2s infinite',
      },
      keyframes: {
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}