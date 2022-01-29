import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { Container } from './styles';

import sun from '../../assets/images/sun.svg';
import moon from '../../assets/images/moon.svg';

export default function Header() {
  const { onToggleTheme, selectedTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>devfinder</h1>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark'
          ? (
            <>
              <span>Light</span>
              <img src={sun} alt="sun" />
            </>
          )
          : (
            <>
              <span>Dark</span>
              <img src={moon} alt="moon" />
            </>
          )}
      </button>
    </Container>
  );
}
