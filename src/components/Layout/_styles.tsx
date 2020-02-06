import { createGlobalStyle } from 'styled-components';

const colors = {
  primary: '#9e0007',
  secondary: '#08525e',
  neutral: '#3c3c3c',
  background: '#eaeaea',
};

export const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${colors.background};
    color: ${colors.neutral};
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1, h2, h3, h4 {
    color: ${colors.primary};
    font-family: 'Courier New', Courier, monospace;
  }
`;

export const theme = { colors };
