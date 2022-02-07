import React, { useState, useEffect } from "react";
import Axios from "axios";

const Staff = () => {
    const [staff, setStaff] = useState([]);
    useEffect(() => {
      Axios.get(
        "https://api.darklordbazz.com/api/shottyapi/getstaff"
      ).then((response) => {
        setStaff(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
      });
    });
    return (
        <div>
        {staff.map((staff)=> {
            return(<div>
            {staff.username} ({staff.rank})
            </div>)
        })}
        </div>
    )
}

export default Staff
