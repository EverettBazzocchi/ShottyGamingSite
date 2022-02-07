import React from "react";

const PostFormat = (props) => {
  return (
    <div className="postFormat">
    <div className="title">{props.title}</div>

      <div className="postHeader">
        <span className="author">{props.author}</span>
        <span className="date">about {props.date.toString()}</span>
      </div>

      <div className="message">{props.message}</div>
    </div>
  );
};

export default PostFormat;
