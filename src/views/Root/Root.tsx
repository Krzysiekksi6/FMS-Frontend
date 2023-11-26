import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "src/assets/styles/GlobalStyle";
import { theme } from "src/assets/styles/theme";
import { AuthProvider } from "src/context/AuthProvider";
import UnauthenticatedApp from "../UnauthenticatedApp/UnauthenticatedApp";
const Root = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<UnauthenticatedApp />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
