import React, { useState, useEffect } from "react";
import Axios from "axios";
// eslint-disable-next-line
const List = (props) => {
  const [rank, setRank] = useState([]);
  useEffect(() => {
  if (props.player === '[]') {setRank('Null')} else {
    Axios.get(
      `https://api.darklordbazz.com/api/shottyapi/getrole?username=${props.player}`
    ).then((response) => {
      setRank(response.data);
    });}
  }, []);
  
  return <div className={`rank` + rank}>{props.player}</div>;
};

export default List;
