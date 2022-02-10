import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
      <div className="staffPageUsername">{props.username}</div>
      <div className="staffPageServer">{profile.favServer}</div>
      <div className="staffPageAbout">{profile.about}</div>
      <div className="staffPageBans">{profile.bans}</div>
      <div className="staffPageKicks">{profile.kicks}</div>
      <div className="staffPagemutes">{profile.mutes}</div>
      <div className="staffPageTime">{profile.timeAsStaff}</div>
    </div>
  );
};

export default StaffPage;
