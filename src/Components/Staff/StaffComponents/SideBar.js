import React from "react";

import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
  const staff = props.staff;
  return (
    <div>
      <ul className="staffSideBar">
        <li className="staffSideBarTitle">OWNER</li>
        {staff.map((staff) => {
          if (staff.username === ".darklordbazz") return null;
          if (staff.rank === "owner") {
            return <li key={staff.username}><NavLink end to={`/staff/${staff.username}`}><button className="staffSideButton">{staff.username}</button></NavLink></li>;
          } else return null;
        })}
        <li className="staffSideBarTitle">ADMINS</li>
        {staff.map((staff) => {
          if (staff.rank === "admin") {
            return <li key={staff.username}><NavLink to={`/staff/${staff.username}`}><button className="staffSideButton">{staff.username}</button></NavLink></li>;
          } else return null;
        })}
        <li className="staffSideBarTitle">SR MODS</li>
        {staff.map((staff) => {
          if (staff.rank === "srmod") {
            return <li key={staff.username}><NavLink to={`/staff/${staff.username}`}><button className="staffSideButton">{staff.username}</button></NavLink></li>;
          } else return null;
        })}
        <li className="staffSideBarTitle">MODERATORS</li>
        {staff.map((staff) => {
          if (staff.rank === "mod") {
            return <li key={staff.username}><NavLink to={`/staff/${staff.username}`}><button className="staffSideButton">{staff.username}</button></NavLink></li>;
          } else return null;
        })}
      </ul>
    </div>
  );
};

export default SideBar;
