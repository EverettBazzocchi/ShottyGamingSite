import React from "react";
import OnlineStaff from "../OnlineStaff";
import Posts from "./HomeComponents/Posts";

const Home = () => {
  return (
    <div className="home">
      <Posts />
      <OnlineStaff />
    </div>
  );
};

export default Home;
