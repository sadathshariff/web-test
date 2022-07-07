import { createContext, useContext, useReducer } from "react";
import { positionReducer } from "./reducer";
const PositionContext = createContext(null);

const PositionProvider = ({ children }) => {
  const initialData = {
    positionClass: "center",
    positionCordinates: { x: 0, y: 0 },
  };
  const [state, dispatch] = useReducer(positionReducer, initialData);
  return (
    <PositionContext.Provider value={{ state, dispatch }}>
      {children}
    </PositionContext.Provider>
  );
};

const usePosition = () => useContext(PositionContext);

export { usePosition, PositionProvider };
