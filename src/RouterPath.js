import { Route, Routes } from "react-router-dom";
import { MainPage, InfoPage } from "./pages";

export const RouterPath = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page2" element={<InfoPage />} />
      </Routes>
    </>
  );
};
