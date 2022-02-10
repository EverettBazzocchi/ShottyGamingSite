import React from "react";

const SideBar = (props) => {
  const staff = props.staff;
  return (
    <div>
      <ul className="staffSideBar">
        <li className="staffSideBarTitle">OWNER</li>
        {staff.map((staff) => {
          if (staff.username === ".darklordbazz") return;
          if (staff.rank === "owner") {
            return <li>{staff.username}</li>;
          } else return;
        })}
        <li className="staffSideBarTitle">ADMINS</li>
        {staff.map((staff) => {
          if (staff.rank === "admin") {
            return <li>{staff.username}</li>;
          } else return;
        })}
        <li className="staffSideBarTitle">SR MODS</li>
        {staff.map((staff) => {
          if (staff.rank === "srmod") {
            return <li>{staff.username}</li>;
          } else return;
        })}
        <li className="staffSideBarTitle">MODERATORS</li>
        {staff.map((staff) => {
          if (staff.rank === "mod") {
            return <li>{staff.username}</li>;
          } else return;
        })}
      </ul>
    </div>
  );
};

export default SideBar;
