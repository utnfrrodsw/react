import { useState } from 'react';

export function useTheme(style = 'light') {
  const [theme, setTheme] = useState(style);

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return {
    theme, toggle
  };
}