import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Inter, sans-serif;
    margin: 0;
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
