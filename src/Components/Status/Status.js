import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Layout from "./StatusComponents/Layout";

const Status = () => {
    const [servers, setServers] = useState();
    useEffect(() => {
        api.db.servers.then(
            function (response) {
                var servers = response.documents;
                setServers(servers);
            },
            function (error) {}
        );
    }, []);

    return (
        <div className="status">
            {servers.map((server) => {
                return (
                    <Layout
                        key={server.$id}
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
