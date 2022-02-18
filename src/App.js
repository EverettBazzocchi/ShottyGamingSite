import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Staff from "./Components/Staff/Staff";
import Status from "./Components/Status/Status";

import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const {width} = useWindowDimensions();
  if (width < 1300) {
    return <div className="UNRES">Unsupported Resolutions</div>;
  } else if (width >= 1300) {
    return (
      <div id="entirePage">
        <Router>
          <Header />
          <div className="main">
            <Routes>
              <Route path="/status/*" element={<Status />} />
              <Route path="/staff/*" element={<Staff />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
