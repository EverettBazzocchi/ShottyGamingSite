import React, { useState, useEffect } from "react";
import { api } from "../../../../api";

var icons = [];

icons.logo = "https://assets.darklordbazz.com/img/shottyAssets/MCIco.png";

const Minecraft = () => {
    const [minecraft, setMinecraft] = useState();
    useEffect(() => {
        api.db.servers.then(
            function (response) {
                var servers = response.documents;
                servers.map((server) => {
                    setMinecraft(server.count + minecraft)
                })
            },
            function (error) {

            }
        );
    }, []);
    useEffect(() => {}, []);
    var player = `1 player online`;

    if (minecraft === "1") {
        player = `${minecraft} player online`;
    } else if (minecraft === "0") {
        player = `no players online`;
    } else {
        player = `${minecraft} players online`;
    }

    return (
        <div className="minecraft">
            <img
                src={icons.logo}
                height="100px"
                alt="Minecraft Icon"
                className="minecraftIco"
            />
            <span className="minecraftContent">
                <div className="minecraftIP">
                    IP: <b>shotty.tech</b>
                </div>

                <span className="minecraftCount">{player}</span>
            </span>
        </div>
    );
};

export default Minecraft;
