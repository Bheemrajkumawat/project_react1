import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigationbar from "./Navigationbar";
import CarouselPage from "./CarouselPage";
import CardPage from "./CardPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import Home from "./Home";


function App() {
  const isAuthenticated = JSON.parse(localStorage.getItem("user"))?.emailId;
  return (
    
    <BrowserRouter>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/carousel" element={isAuthenticated?<CarouselPage />:<Navigate to="/"/>}></Route>
          <Route path="/card" element={isAuthenticated?<CardPage />:<Navigate to="/"/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
