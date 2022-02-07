import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

import List from './OnlineStaffComponents/List'

var playerList;
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
        <p className="staffHomeList">
          {servers.map((server) => {
            if (server.players == "[]" || server.players == "offline") {
              run = run + 1;
              return;
            }
            if (run === 8) {
              run = "nothing";
              return <div class="staffHomeList">No Staff Online</div>;
            } else
              return server.players.map((players) => {
                return (< List player={players}/>);
              });
          })}
        </p>
      </NavLink>
    </div>
  );
};

export default OnlineStaff;
