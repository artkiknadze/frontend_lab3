import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ChangeTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button
      className={"button_" + (theme ? "dark" : "light")}
      onClick={changeTheme}
    >
      Тема оформлення: {theme ? "Темна" : "Світла"}
    </button>
  );
};
