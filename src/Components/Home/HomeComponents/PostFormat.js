import React from "react";

const PostFormat = (props) => {
  return (
    <div className="postFormat">
    <div className="title">{props.title}</div>

      <div className="postHeader">
        <span className="author">{props.author}</span>
        <span className="date">{props.date.toString()}</span>
      </div>

      <pre className="message">{props.message}</pre>
    </div>
  );
};

export default PostFormat;

