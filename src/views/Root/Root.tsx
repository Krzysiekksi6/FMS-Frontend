import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "src/assets/styles/GlobalStyle";
import { theme } from "src/assets/styles/theme";
import UnauthenticatedApp from "../UnauthenticatedApp/UnauthenticatedApp";
import AuthenticatedApp from "../AuthenticatedApp/AuthenticatedApp";

const Root = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
