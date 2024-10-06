import { createContext, useState } from "react";

export const ClickerContext = createContext();

export const ClickerProvider = ({ children }) => {
  const [clicks, setClicks] = useState(0);

  const increaseClicks = () => {
    setClicks(clicks + 1);
  };

  return (
    <ClickerContext.Provider value={{ clicks, increaseClicks }}>
      {children}
    </ClickerContext.Provider>
  );
};
