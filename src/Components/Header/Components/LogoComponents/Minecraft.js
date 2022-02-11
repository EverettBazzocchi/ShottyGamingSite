import React, { useState, useEffect } from "react";
import Axios from "axios";

var icons = [];

icons.logo = "https://assets.darklordbazz.com/img/shottyAssets/MCIco.png";

const Minecraft = () => {
  const [minecraft, setMinecraft] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://api.darklordbazz.com/api/shottyapi/mcserver/count/"
    ).then((response) => {
      setMinecraft(response.data);
      console.log(response.data)
    });
  }, []);

  var player = `1 player online`;

  if (minecraft.players === "1") {
    player = `${minecraft.players} player online`;
  } else if (minecraft.players === "0") {
    player = `no players online`;
  } else {
    player = `${minecraft.players} players online`;
  }

  return (
    <div className="minecraft">
      <img
        src={icons.logo}
        height="100px"
        alt="Minecraft Icon"
        className="minecraftIco"
      />
      <span className="minecraftContent">
        <div className="minecraftIP">
          IP: <b>shotty.tech</b>
        </div>

        <span className="minecraftCount">{player}</span>
      </span>
    </div>
  );
};

export default Minecraft;
