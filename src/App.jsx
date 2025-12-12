import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import "./globalStyle.scss";
import Home from "./pages/home/Home";
import Voluntario from "./pages/voluntario/Voluntario";
import Fotter from "./components/footer/Fotter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntario" element={<Voluntario />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </>
  );
}

export default App;
