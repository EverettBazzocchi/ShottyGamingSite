import React, {useEffect} from "react";
import Axios from "axios";
import PostFormat from "./PostFormat";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const Posts = () => {
  const [posts, setPosts] = useStateIfMounted(0);
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
