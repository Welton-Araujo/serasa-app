import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 2rem;
    background-color: #fff;
  }

  h1 {
    text-align: center;
  }

  h2, h4 {
    margin-bottom: 0.4rem;
  }
`;

export default GlobalStyles;
