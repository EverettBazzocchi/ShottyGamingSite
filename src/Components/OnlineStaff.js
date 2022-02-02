import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

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
  var run = 1
  return (
    <div className="onlineStaff">
      <h1>Staff Online</h1>
      <NavLink end to="/status" style={{ textDecoration: "none" }}>
        <p className="staffHomeList">
          {servers.map((server) => {
            if (server.players == "[]" || server.players == "offline") {
              if ((run === 1)) {
                run = 'nothing';
                return <div class="staffHomeList">No Staff Online</div>;
              } else return;
            }
            return server.players.map((players) => {
              var player = players.toString();
              console.log(player);
              return <div class="staffHomeList">{player}</div>;
            });
          })}
        </p>
      </NavLink>
    </div>
  );
};

export default OnlineStaff;
