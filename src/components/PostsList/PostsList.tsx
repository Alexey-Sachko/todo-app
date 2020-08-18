import React from "react";
import { postList } from "../../data/posts-list";
import Post from "../Post/Post";

const PostsList = () => {
  return (
    <div>
      <ul>
        {postList.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
