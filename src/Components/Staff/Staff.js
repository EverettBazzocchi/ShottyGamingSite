import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { api } from "../../api";

import SideBar from "./StaffComponents/SideBar";
import StaffPage from "./StaffComponents/StaffPage";

const Staff = () => {
    const [staff, setStaff] = useState();
    useEffect(() => {
        api.db.staff.then(
            function (response) {
                var staff = response.documents;
                setStaff(staff);
            },
            function (error) {}
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="staffPage">
            <SideBar staff={staff} />
            <div className="profile">
                <Routes>
                    {staff.map((staff) => {
                        var link = `/${staff.username}`;
                        return (
                            <Route
                                key={staff.username}
                                path={link}
                                element={<StaffPage staff={staff} />}
                            />
                        );
                    })}
                </Routes>
            </div>
        </div>
    );
};

export default Staff;
