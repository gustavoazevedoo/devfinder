import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
