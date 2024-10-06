import { useContext } from "react";
import "./App.css";
import { ChangeTheme } from "./components/ChangeTheme";

import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { Clicker } from "./components/Clicker";
import { ClickerContext, ClickerProvider } from "./context/ClickerContext";

export const App = () => {
  const { theme } = useContext(ThemeContext);
  const { clicks } = useContext(ClickerContext);

  return (
    <div className={"app " + (theme ? "dark" : "light")}>
      <ChangeTheme></ChangeTheme>
      <Clicker></Clicker>
      <p>Ви натиснули на кнопку {clicks} разів</p>
    </div>
  );
};

const Providers = () => {
  return (
    <ThemeProvider>
      <ClickerProvider>
        <App />
      </ClickerProvider>
    </ThemeProvider>
  );
};

export default Providers;
