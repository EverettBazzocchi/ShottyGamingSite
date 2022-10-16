import React, {useEffect} from "react";
import Axios from "axios";
import { Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

import SideBar from "./StaffComponents/SideBar";
import StaffPage from "./StaffComponents/StaffPage";

const Staff = () => {
  const [staff, setStaff] = useStateIfMounted(0);
  useEffect(() => {
    Axios.get("https://api.darklordbazz.com/api/shottyapi/getstaff").then(
      (response) => {
        setStaff(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
      }
    );
  }, []);
  useEffect(() => {
    setTimeout(() => {
      Axios.get("https://api.darklordbazz.com/api/shottyapi/getstaff").then(
        (response) => {
          setStaff(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
        }
      );
    }, 3500);
  }, []);
  return (
    <div className="staffPage">
      <SideBar staff={staff} />
      <div className="profile">
        <Routes>
          {staff.map((staff) => {
            var link = `/${staff.username}`;
            return (
              <Route key={staff.username}
                path={link}
                element={<StaffPage username={staff.username} />}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Staff;
