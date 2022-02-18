import React, { useState, useEffect } from "react";
import Axios from "axios";
import Layout from "./StatusComponents/Layout";

const Status = () => {
  const [servers, setServers] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://api.darklordbazz.com/api/shottyapi/mcserver/playerlist"
    ).then((response) => {
      setServers(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
    });
  });
  useEffect(() => {
    setTimeout(() => {
      Axios.get(
        "https://api.darklordbazz.com/api/shottyapi/mcserver/playerlist"
      ).then((response) => {
        setServers(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
      });
    }, 3500);
  }, []);
  return (
    <div className="status">
      {servers.map((server) => {
        return (
          <Layout
            name={server.name}
            online={server.count}
            players={server.players}
          />
        );
      })}
    </div>
  );
};

export default Status;
