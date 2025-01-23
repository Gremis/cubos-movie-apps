import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="app-container">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;