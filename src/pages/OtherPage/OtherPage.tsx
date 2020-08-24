import React, { useState } from "react";
import PostsList from "../../components/PostsList/PostsList";
import { PostsGate } from "../../components/PostsList/PostsList";
import TodosContainer from "../../containers/TodosContainer/TodosContainer";
import BoardContainer from "../../containers/BoardContainer/BoardContainer";
import Tree from "../../containers/Tree/Tree";

const OtherPage = () => {
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
      <Tree />
    </div>
  );
};

export default OtherPage;
