import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Staff from "./Components/Staff/Staff";
import Status from "./Components/Status/Status";
import Apply from "./Components/Staff/Apply/Apply";

import DiscordLink from "./hooks/DiscordLink"

import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {

  const { height, width } = useWindowDimensions();
  if (width < 1300) {
    return <div className="UNRES">Unsupported Resolutions</div>;
  } else if (width >= 1300) {
    return (
      <Router>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/status" element={<Status />} />
            <Route path="/staff/apply" exact element={<Apply />} />
            <Route path="/staff" exact element={<Staff />} />
            <Route path="/discord" exact element={<DiscordLink />} />
            <Route path="" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
