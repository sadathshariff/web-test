import { useEffect, useState } from "react";
import { usePosition } from "../../context/context";
import "./Header.css";
export const Header = () => {
  const [time, setTime] = useState(null);
  const { state, dispatch } = usePosition();

  useEffect(() => {
    const getTime = () => {
      return new Date().toLocaleTimeString();
    };
    let timer = setInterval(() => {
      const newTime = getTime();
      setTime(newTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <header className="header flex-spaceBetween">
        <div className="position-container flex-center">
          <h2>Position:</h2>
          <div className="input-checkboxes">
            <label htmlFor="center">Center</label>
            <input
              type="radio"
              name="position"
              id="center"
              value="center-position"
              checked={state.positionClass === "center-position"}
              onChange={(e) =>
                dispatch({ type: "CENTER_POSITION", payload: e.target.value })
              }
            />
            <label htmlFor="lower-right">Lower Right</label>
            <input
              type="radio"
              name="position"
              id="lower-right"
              value="lower-right"
              checked={state.positionClass === "lower-right"}
              onChange={(e) =>
                dispatch({ type: "LOWER_RIGHT", payload: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex-spaceBetween info-div">
          <p className="info-text">
            Press Esc key to hide the window & Enter to show it again
          </p>
          <p className="time">{time}</p>
        </div>
      </header>
    </>
  );
};
