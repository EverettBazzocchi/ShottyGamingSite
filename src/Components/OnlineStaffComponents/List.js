import React, { useState, useEffect } from "react";
import Axios from "axios";

const List = (props) => {
  const [rank, setRank] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://api.darklordbazz.com/api/shottyapi/getrole?username=${props.player}`
    ).then((response) => {
      setRank(response.data);
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      Axios.get(
        `https://api.darklordbazz.com/api/shottyapi/getrole?username=${props.player}`
      ).then((response) => {
        setRank(response.data);
      });
    }, 3500);
  }, []);
  
  return <div className={`rank` + rank}>{props.player}</div>;
};

export default List;
