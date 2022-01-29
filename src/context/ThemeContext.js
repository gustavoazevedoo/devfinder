/* eslint-disable react/prop-types */
import { createContext, useEffect, useMemo } from 'react';
import { useState } from 'react/cjs/react.development';
import themes from '../assets/styles/themes';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const storageData = localStorage.getItem('theme');

    if (storageData) {
      return storageData;
    }

    return 'light';
  });

  const currentTheme = useMemo(() => themes[theme], [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        selectedTheme: theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
