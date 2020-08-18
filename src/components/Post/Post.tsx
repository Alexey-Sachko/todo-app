import React from "react";
import { IPost } from "../../types/post.type";

type Props = {
  data: IPost;
};

const Post = ({ data: { title, body } }: Props) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
};

export default Post;
