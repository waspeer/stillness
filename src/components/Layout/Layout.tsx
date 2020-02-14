import React from 'react';
import styled from 'styled-components';

import { GlobalStyle, ThemeProvider } from '#lib/theme';

const Wrapper = styled.main`
  max-width: 960px;
  margin: 0 auto;
`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Wrapper data-testid="layout-container">{children}</Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
