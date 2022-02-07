import React, { useState, useEffect } from "react";
import Axios from "axios";

const Staff = () => {
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    Axios.get("https://api.darklordbazz.com/api/shottyapi/getstaff").then(
      (response) => {
        setStaff(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
      }
    );
  });
  return (
    <div className="staffPage">
      <div>
        <h1>OWNER</h1>
        <div className="owner">
          {staff.map((staff) => {
            if (
              staff.rank.toLowerCase() === "owner" &&
              staff.username === "darklordbazz_"
            ) {
              return (
                <div>
                  <img
                    src={`https://mc-heads.net/head/${staff.username}`}
                    height="100"
                  />
                  <span className="caption">{staff.username}</span>
                </div>
              );
            }
          })}
        </div>
        <h1>ADMINS</h1>
        <div className="admin">
          {staff.map((staff) => {
            if (staff.rank.toLowerCase() === "admin") {
              return (
                <div>
                  <img
                    src={`https://mc-heads.net/head/${staff.username}`}
                    height="100"
                  />
                  <span className="caption">{staff.username}</span>
                </div>
              );
            }
          })}
        </div>
        <h1>SR MODS</h1>
        <div className="srmod">
          {staff.map((staff) => {
            if (staff.rank.toLowerCase() === "srmod") {
              return (
                <div>
                  <img
                    src={`https://mc-heads.net/head/${staff.username}`}
                    height="100"
                  />
                  <span className="caption">{staff.username}</span>
                </div>
              );
            }
          })}
        </div>
        <h1>MODS</h1>
        <div className="mod">
          {staff.map((staff) => {
            if (staff.rank.toLowerCase() === "mod") {
              return (
                <div>
                  <img
                    src={`https://mc-heads.net/head/${staff.username}`}
                    height="90"
                  />
                  <span className="caption">{staff.username}</span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Staff;
