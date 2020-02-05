import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './_styles';

const Wrapper = styled.main`
  max-width: 960px;
  margin: 0 auto;
`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper data-testid="layout-container">{children}</Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
