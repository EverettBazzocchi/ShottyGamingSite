import React, { useState, useEffect } from "react";
import Axios from "axios";

function DiscordLink() {
  const [discordAPI, setDiscordAPI] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://discord.com/api/guilds/665323519713738782/widget.json"
    ).then((response) => {
      setDiscordAPI(response.data);
      console.log( discordAPI.instant_invite)
    });
  });

  const invite = discordAPI.instant_invite;

  useEffect(() => {
    setTimeout(() => {
      window.location.href = invite;
      console.log( discordAPI.instant_invite)
    }, 500);
  });

  return (
    <div>
      <h2>Discord</h2>
    </div>
  );
}

export default DiscordLink;
