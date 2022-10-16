import React, { useState, useEffect } from "react";
import Axios from "axios";

var icons = [];

icons.discordB =
  "https://assets.darklordbazz.com/img/shottyAssets/DiscordIcoB.png";
icons.discordW =
  "https://assets.darklordbazz.com/img/shottyAssets/DiscordIcoW.png";

icons.logoBack =
  "https://assets.darklordbazz.com/img/shottyAssets/logo-back.png";

const Discord = () => {
  const [discordAPI, setDiscordAPI] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://discord.com/api/guilds/665323519713738782/widget.json"
    ).then((response) => {
      setDiscordAPI(response.data);
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      Axios.get(
        "https://discord.com/api/guilds/665323519713738782/widget.json"
      ).then((response) => {
        setDiscordAPI(response.data);
      });
    }, 3500);
  }, []);

  return (
    <div className="discord">
      <a
        href={discordAPI.instant_invite}
        target="_blank"
        rel="noreferrer"
        className="discordLink"
      >
        <img
          src={icons.discordW}
          height="100px"
          alt="Discord Icon"
          className="discordIco"
        />
        <span className="discordContent">
          <div className="discordJoin">Join Our Discord!</div>
          <span className="discordCount">{discordAPI.presence_count} Members Online</span>
        </span>
      </a>
    </div>
  );
};

export default Discord;
