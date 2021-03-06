import "./Box.css";
import { usePosition } from "../../context/context";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
export const Box = () => {
  const { state, dispatch } = usePosition();
  const [showBox, setShowBox] = useState(true);
  const [position, setShowPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const escFunction = (event) => {
      if (event.keyCode === 27) {
        setShowBox(false);
      } else if (event.keyCode === 13) {
        setShowBox(true);
      } else {
        setShowBox(true);
      }
    };
    document.addEventListener("keyup", escFunction);

    return () => {
      document.removeEventListener("keyup", escFunction);
    };
  }, []);
  const trackPositionOfBox = (data) => {
    dispatch({
      type: "FLOATING",
      payload: { x: data.x, y: data.y },
    });
  };

  return (
    <>
      {showBox && (
        <div className={`${state.positionClass} `}>
          <Draggable
            bounds="parent"
            defaultPosition={position}
            position={state.positionCordinates}
            onDrag={(e, data) => trackPositionOfBox(data)}
            onStop={() => setShowPosition(state.positionCordinates)}
          >
            <div
              className={`${state.showBorder && "box-border"} draggable-box`}
            >
              <p className="position-text">
                {state.positionClass === "FLOATING"
                  ? "Floating"
                  : state.positionClass === "lower-right"
                  ? "Lower Right"
                  : "Center"}
              </p>
              <p className="box-text">Drag me around...</p>
            </div>
          </Draggable>
        </div>
      )}
    </>
  );
};
