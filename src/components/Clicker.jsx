import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ClickerContext } from "../context/ClickerContext";

export const Clicker = () => {
  const { theme } = useContext(ThemeContext);
  const { clicks, increaseClicks } = useContext(ClickerContext);

  return (
    <div className="clicker">
      <button
        onClick={increaseClicks}
        className={"button_" + (theme ? "dark" : "light")}
      >
        Натиснути ({clicks})
      </button>
    </div>
  );
};
