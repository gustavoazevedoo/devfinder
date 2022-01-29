/* eslint-disable react/prop-types */
import { useContext } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/global';
import Layout from '../Layout';

import { ThemeContext } from '../../context/ThemeContext';

import { Container } from './styles';
import Header from '../Header';

function App() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Layout />
      </Container>
    </ThemeProvider>
  );
}

export default App;
