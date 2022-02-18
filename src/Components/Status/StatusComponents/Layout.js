import React from "react";

import List from "../../OnlineStaffComponents/List"

const Layout = (props) => {
  var name;
  switch (props.name) {
    case "lobby":
      name = "LOBBY";
      break;
    case "survival":
      name = "SURVIVAL";
      break;
    case "skyblock":
      name = "SKYBLOCK";
      break;
    case "bedwars":
      name = "BEDWARS";
      break;
    case "murdermystery":
      name = "MURDER MYSTERY";
      break;
    case "bridge":
      name = "THE BRIDGE";
      break;
    case "buildbattle":
      name = "BUILDBATTLE";
      break;
    default:
      name = "UNKNOWN";
      break;
  }

  var serverNameClass = "offlinename";
  var playerList;
  var playerCount;
  if (props.players.includes("offline")) {
    serverNameClass = "offlinename";
  } else serverNameClass = "serverName";
  if (props.players === "[]" || props.players === "offline" || props.players === "") {
    playerList = "No Staff Online";
  } else
    playerList = props.players.map((players) => {
      return (< List  key={players} player={players}/>);
    });

  if (props.players.includes("offline")) {
    playerCount = "OFFLINE";
  } else {
    playerCount = (
      <>
        <b>Online: </b> {props.online} / 100
      </>
    );
  }

  return (
    <div className="serverLayout">
      <div className={serverNameClass} id={props.name + "Name"}>
        {name}
      </div>
      <div className="playerCount" id={props.name + "Count"}>
        {playerCount}
      </div>
      <div className="playerList" id={props.name + "List"}>
        <h1>
          <b>Staff Online</b>
        </h1>
        <div className="staffOnline">{playerList}</div>
      </div>
    </div>
  );
};

export default Layout;
