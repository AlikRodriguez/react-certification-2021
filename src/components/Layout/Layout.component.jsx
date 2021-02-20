import React from 'react';
import { ThemeProvider } from 'styled-components';

import './Layout.styles.css';

const theme = {
  mainBackground: '#edeef1',
  secondBackground: '#fff',
};

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <main className="container">{children}</main>
    </ThemeProvider>
  );
}

export default Layout;
