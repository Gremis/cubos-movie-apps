import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="app-container">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
