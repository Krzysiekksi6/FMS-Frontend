import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "src/assets/styles/GlobalStyle";
import { theme } from "src/assets/styles/theme";
import UnauthenticatedApp from "../UnauthenticatedApp/UnauthenticatedApp";
import AuthenticatedApp from "../AuthenticatedApp/AuthenticatedApp";
import { store } from "src/store/store";
import { Provider } from "react-redux";
const Root = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Routes>
            <Route path="/*" element={<UnauthenticatedApp />} />
            <Route path="/auth/*" element={<AuthenticatedApp />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
