import React from "react";

import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
  const staff = props.staff;
  return (
    <div>
      <ul className="staffSideBar">
        <li className="staffSideBarTitle">OWNER</li>
        {staff.map((staff) => {
          if (staff.username === ".darklordbazz") return;
          if (staff.rank === "owner") {
            return <li><NavLink end to={`/staff/${staff.username}`}><button className="staffSideButton">{staff.username}</button></NavLink></li>;
          } else return;
        })}
        <li className="staffSideBarTitle">ADMINS</li>
        {staff.map((staff) => {
          if (staff.rank === "admin") {
            return <li><NavLink to={`/staff/${staff.username}`}><button className="staffSideButton">{staff.username}</button></NavLink></li>;
          } else return;
        })}
        <li className="staffSideBarTitle">SR MODS</li>
        {staff.map((staff) => {
          if (staff.rank === "srmod") {
            return <li><NavLink to={`/staff/${staff.username}`}><button className="staffSideButton">{staff.username}</button></NavLink></li>;
          } else return;
        })}
        <li className="staffSideBarTitle">MODERATORS</li>
        {staff.map((staff) => {
          if (staff.rank === "mod") {
            return <li><NavLink to={`/staff/${staff.username}`}><button className="staffSideButton">{staff.username}</button></NavLink></li>;
          } else return;
        })}
      </ul>
    </div>
  );
};

export default SideBar;
