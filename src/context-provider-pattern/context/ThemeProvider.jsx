import { useState } from "react";
import { createContext } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const handleToggleTheme = () => {
    setTheme((prev) => !prev);
  };
  const ThemeContext = createContext();
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
