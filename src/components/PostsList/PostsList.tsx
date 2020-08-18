import React from "react";
import { createStore, createEffect, forward } from "effector";
import { useStore, createGate } from "effector-react";

import Post from "../Post/Post";
import { IPost } from "../../types/post.type";

const getPostFx = createEffect({
  async handler() {
    const req = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return req.json();
  },
});

const $posts = createStore<IPost[]>([]).on(
  getPostFx.doneData,
  (_, result) => result
);

export const PostsGate = createGate("gate with props");

forward({ from: PostsGate.state, to: getPostFx });

PostsGate.open.watch(() => {
  console.log("mounted");
});

PostsGate.close.watch(() => {
  console.log("unmounted");
});

const PostsList = () => {
  const posts = useStore($posts);
  const loading = useStore(getPostFx.pending);

  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <ul>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsList;
