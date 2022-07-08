import "./MainPage.css";
import { Box, Footer, Header } from "../../components";

export const MainPage = () => {
  return (
    <>
      <div className="mainpage">
        <Header />
        <div className="content">
          <div className="main-container">
            <Box />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
