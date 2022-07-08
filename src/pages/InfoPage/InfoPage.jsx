import "./InfoPage.css";
import { useNavigate } from "react-router-dom";
import { usePosition } from "../../context/context";
export const InfoPage = () => {
  const navigate = useNavigate();
  const { dispatch } = usePosition();
  const handleBackToMain = () => {
    navigate("/");
    dispatch({
      type: "CENTER_POSITION",
      payload: { value: "center-position", showBorder: true },
    });
  };
  return (
    <>
      <div className="info-container">
        <h3>Page 2</h3>
        <div className="info-content">
          <h2 className="text-center">Sadathulla Shariff</h2>
          <p>
            FrontEnd Engineer who's passionate about building stuff. An ECE grad
            who stayed away from coding throughout the engineering, found his
            interest into web development when i built my first website using
            HTML and CSS and hosted it online.It all began with that
          </p>
          <p>
            During my free time i usually go out and play mostly Badminton,
            cricket and football sometimes, recently i picked up habit of
            reading what's happening in FrontEnd Domain, so i do spend my time
            in exploring these things .
          </p>
        </div>

        <button className="back-btn" onClick={() => handleBackToMain()}>
          Back
        </button>
      </div>
    </>
  );
};
