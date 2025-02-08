import React from "react";
import Header from "./component/headers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Router from "./component/route/Router";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Router />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;