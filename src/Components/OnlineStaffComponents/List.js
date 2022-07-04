import React from "react";

const List = (props) => {
    var player = props.player

    return <div className={`rank` + player.rank}>{player.username}</div>;
};

export default List;
