import React, {useEffect} from "react";
import Axios from "axios";
import Layout from "./StatusComponents/Layout";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const Status = () => {
  const [servers, setServers] = useStateIfMounted(0);
  useEffect(() => {
    Axios.get(
      "https://api.darklordbazz.com/api/shottyapi/mcserver/playerlist"
    ).then((response) => {
      setServers(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
    });
  });
  useEffect(() => {
    setTimeout(() => {
      Axios.get(
        "https://api.darklordbazz.com/api/shottyapi/mcserver/playerlist"
      ).then((response) => {
        setServers(response.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
      });
    }, 3500);
  }, []);
  return (
    <div className="status">
      {servers.map((server) => {
        return (
          <Layout
          key ={server.id}
            name={server.name}
            online={server.count}
            players={server.players}
          />
        );
      })}
    </div>
  );
};

export default Status;
