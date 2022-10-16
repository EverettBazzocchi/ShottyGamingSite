import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import List from "./OnlineStaffComponents/List";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function OnlineStaff() {
  return (
    <QueryClientProvider client={queryClient}>
      <Render />
    </QueryClientProvider>
  );
}
function Render() {
  /*
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
  }, []);*/
  
  const { isLoading, error, data: servers, isFetching } = useQuery("repoData", () =>
    fetch(
      "https://api.darklordbazz.com/api/shottyapi/mcserver/playerlist"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (isFetching) return "Loading...";

  if (error) return "An error has occurred: " + error.message;


  var run = 1;

  return (
    <div className="onlineStaff">
      <h1>Staff Online</h1>
      <NavLink end to="/status" style={{ textDecoration: "none" }}>
        <div className="staffHomeList">
          {servers.map((server) => {
            if (
              run < 7 &&
              (server.players === "[]" || server.players === "offline")
            ) {
              run = run + 1;
              console.log(run)
              if (run === 7) {
                console.log(run)
                run = "nothing";
                return <div key={server.id} className="staffHomeList">No Staff Online</div>;
              }
              return null;
            } else {
              return server.players.map((players) => {
                return <List player={players} key={server.id} />;
              });
            }
          })}
        </div>
      </NavLink>
    </div>
  );
};

export default OnlineStaff;
