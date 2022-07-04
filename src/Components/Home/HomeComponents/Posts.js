import React, {useEffect, useState} from "react";
import PostFormat from "./PostFormat"
import { api }from "../../../api";

const Posts = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    api.db.posts.then(
        function (response) {
            var posts = response.documents;
            setPosts(posts.sort((a, b) => (a.date > b.date ? 1 : -1)));

        },
        function (error) {

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
