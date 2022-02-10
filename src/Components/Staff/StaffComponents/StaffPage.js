import React, { useState, useEffect } from "react";
import Axios from "axios";

const StaffPage = (props) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://api.darklordbazz.com/api/shottyapi/getstaffprofiles?staff=${props.username}`
    ).then((response) => {
      setProfile(response.data[0]);
    });
  });
  return (
    <div className="staffProfile">
      <div className="usernameField">
        <div className="staffPageUsername">{props.username}</div>
        <div className="staffPageSkin">
          <img
            src={`https://mc-heads.net/body/${props.username}`}
            height="350px"
          />
        </div>
      </div>
      <div className="">
        <div className="bkm">
          <fieldset className="bkmField">
            <legend>Bans</legend>
            <div className="staffPageBans">{profile.bans}</div>
          </fieldset>
          <fieldset className="bkmField">
            <legend>Kicks</legend>
            <div className="staffPageKicks">{profile.kicks}</div>
          </fieldset>
          <fieldset className="bkmField">
            <legend>Mutes</legend>
            <div className="staffPagemutes">{profile.mutes}</div>
          </fieldset>
        </div>
        <fieldset className="utimeField">
          <legend>Joined Staff</legend>
          <div className="staffPageTime">{profile.timeAsStaff}</div>
        </fieldset>
        <fieldset className="aboutField">
          <legend>About Me</legend>
          <div className="staffPageAbout">{profile.about}</div>
        </fieldset>
        <fieldset className="favservField">
          <legend>Favorite Server</legend>
          <div className="staffPageServer">{profile.favServer}</div>
        </fieldset>
      </div>
    </div>
  );
};

export default StaffPage;
