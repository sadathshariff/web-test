import { useNavigate } from "react-router-dom";
import "./Footer.css";
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <p className="footer-text" onClick={() => navigate("/page2")}>
        Go to Page 2
      </p>
    </footer>
  );
};
