import React, { useState } from "react";
import PostsList from "./components/PostsList";
import { PostsGate } from "./components/PostsList/PostsList";
import TodosContainer from "./containers/TodosContainer";
import BoardContainer from "./containers/BoardContainer";

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
      <BoardContainer />
    </div>
  );
}

export default App;
