import React, { useState, useEffect } from "react";
import Axios from "axios";
import PostFormat from "./PostFormat";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get("https://api.darklordbazz.com/api/shottyapi/getposts").then(
      (response) => {
        setPosts(response.data.sort((a, b) => (a.date > b.date ? 1 : -1)));
      }
    );
  }, []);

  return (
    <div className="Posts">
      {posts.map((post) => {
        return (
          <PostFormat
            key={post.author+post.date+post.title}
            title={post.title}
            author={post.author}
            message={post.message}
            date={post.date}
          />
        );
      })}
    </div>
  );
};

export default Posts;
