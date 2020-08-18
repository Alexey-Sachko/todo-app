import React from "react";
import PostsList from "./components/PostsList";
import { PostsGate } from "./components/PostsList/PostsList";

function App() {
  return (
    <div>
      <PostsList />
      <PostsGate />
    </div>
  );
}

export default App;
