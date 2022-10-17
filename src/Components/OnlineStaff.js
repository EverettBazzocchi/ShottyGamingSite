import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

import List from "./OnlineStaffComponents/List";

const OnlineStaff = () => {
  const [servers, setServers] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://api.darklordbazz.com/api/shottyapi/mcserver/playerlist"
    ).then((response) => {
      setServers(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
    });
  });

  var run = 1;

  return (
    <div className="onlineStaff">
      <h1>Staff Online</h1>
      <NavLink end to="/status" style={{ textDecoration: "none" }}>
        <div className="staffHomeList">
          {servers.map((server) => {
            if (
              run < 8 &&
              (server.players === "[]" || server.players === "offline")
            ) {
              run = run + 1;
              if (run === 8) {
                run = "nothing";
                return <div key={server.id} className="staffHomeList">No Staff Online</div>;
              }
              return null;
            } else {
              return server.players.map((players) => {
                return <List player={players} key={server.id} />;
              });
            }
          })}
        </div>
      </NavLink>
    </div>
  );
};

export default OnlineStaff;
