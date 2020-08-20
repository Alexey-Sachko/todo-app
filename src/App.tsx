import React, { useState } from "react";
import PostsList from "./components/PostsList";
import { PostsGate } from "./components/PostsList/PostsList";

function App() {
  const [postsIsOpen, setPostsIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setPostsIsOpen((prev) => !prev)}>posts</button>
      {postsIsOpen && (
        <div>
          <PostsList />
          <PostsGate />
        </div>
      )}
    </div>
  );
}

export default App;
