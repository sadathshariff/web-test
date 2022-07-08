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
            Frontend Engineer who's passionate about building stuff. An ECE grad
            who stayed away from coding throughout engineering, found his
            interest in web development when I built my first website using HTML
            and CSS and hosted it online. It all began with that and starting
            building stuff during the process of learning.
          </p>
          <p>
            During my free time I usually go out and play Badminton, sometimes
            cricket and football, recently I picked up the habit of reading
            what's happening in Frontend Domain, so I do spend my time exploring
            these things.
          </p>
        </div>

        <button className="back-btn" onClick={() => handleBackToMain()}>
          Back
        </button>
      </div>
    </>
  );
};
