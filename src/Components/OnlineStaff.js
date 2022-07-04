import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import List from "./OnlineStaffComponents/List";
import { api } from "../api";

function OnlineStaff() {
    const [staff, setStaff] = useState();

    useEffect(() => {
        api.db.staff.then(
            function (response) {
                var staffMembers = response.documents;
                staffMembers.forEach((Member) => {
                    if (staff.online) {
                        setStaff(staff + Member);
                    }
                });
            },
            function (error) {}
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="onlineStaff">
            <h1>Staff Online</h1>
            <NavLink end to="/status" style={{ textDecoration: "none" }}>
                <div className="staffHomeList">
                    {() => {
                        if (staff.length === 0) {
                            return (
                                <div className="staffHomeList">
                                    No Staff Online
                                </div>
                            );
                        } else {
                            staff.forEach((staff) => {
                                <List player={staff} />;
                            });
                        }
                    }}
                </div>
            </NavLink>
        </div>
    );
}

export default OnlineStaff;
