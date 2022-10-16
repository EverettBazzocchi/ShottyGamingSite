import React, {useEffect} from "react";
import Axios from "axios";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
// eslint-disable-next-line
const List = (props) => {
  const [rank, setRank] = useStateIfMounted(0);
  useEffect(() => {
  if (props.player == '[]') {setRank('Null')} else {
    Axios.get(
      `https://api.darklordbazz.com/api/shottyapi/getrole?username=${props.player}`
    ).then((response) => {
      setRank(response.data);
    });}
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (props.player == '[]') {setRank('Null')} else {
        Axios.get(
          `https://api.darklordbazz.com/api/shottyapi/getrole?username=${props.player}`
        ).then((response) => {
          setRank(response.data);
        });}
    }, 3500);
  });
  
  return <div className={`rank` + rank}>{props.player}</div>;
};

export default List;
