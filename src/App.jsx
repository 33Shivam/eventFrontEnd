import { React } from "react";
import Navbar from "./assets/components/navbar";
import Homepage from "./assets/components/homepage";
import Social from "./assets/components/social";
import LoggedIN from "./assets/components/loggedIN";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./assets/components/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/loggedIN" element={<LoggedIN />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
