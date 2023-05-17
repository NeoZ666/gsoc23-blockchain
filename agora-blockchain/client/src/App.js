import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import "./App.css";
import { ThemeContext } from "styled-components";

// export const ThemeContext = createContext(null);

function App() {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </ThemeContext.Provider>
    
  );
}

export default App;