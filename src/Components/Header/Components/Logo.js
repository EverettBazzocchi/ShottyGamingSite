import React from "react";
import Discord from "./LogoComponents/Discord";
import Minecraft from "./LogoComponents/Minecraft";

var icons = [];

icons.logoBack =
    "https://assets.darklordbazz.com/img/shottyAssets/logo-back.png";

const Logo = () => {
  console.log("Why are you in here?");
  return (
    <div className="logoBack">
      <div className="logoDiv">
        <Discord />
        <img src={icons.logoBack} alt="SHOTTY LOGO" className="mainLogo" />
        <Minecraft />
      </div>
    </div>
  );
};

export default Logo;
