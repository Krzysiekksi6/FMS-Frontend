import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "src/assets/styles/GlobalStyle";
import { theme } from "src/assets/styles/theme";
import UnauthenticatedApp from "../UnauthenticatedApp/UnauthenticatedApp";
import AuthenticatedApp from "../AuthenticatedApp/AuthenticatedApp";

const Root = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </ThemeProvider>
  );
};

export default Root;
