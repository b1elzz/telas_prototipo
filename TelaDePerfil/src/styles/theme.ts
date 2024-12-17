export const theme = {
  colors: {
    primary: '#6C5CE7',
    primaryDark: '#5849e4',
    primaryLight: '#A29BFE',
    background: '#F8F9FE',
    white: '#FFFFFF',
    gray: {
      50: '#F8F9FE',
      100: '#F1F3F9',
      200: '#E2E8F0',
      300: '#CBD5E0',
      600: '#4A5568',
      900: '#1A202C',
    },
    warning: '#F59E0B',
    danger: '#DC2626',
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Roboto', sans-serif",
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
} as const;