import React, { useState } from "react";
import PostsList from "./components/PostsList";
import { PostsGate } from "./components/PostsList/PostsList";
import TodosContainer from "./containers/TodosContainer";

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
      <TodosContainer />
    </div>
  );
}

export default App;
