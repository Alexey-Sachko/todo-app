import "react-sortable-tree/style.css";
import React, { useState } from "react";
import SortableTree, { TreeItem } from "react-sortable-tree";

const Tree = () => {
  const [treeData, setTreeData] = useState<TreeItem[]>([
    { title: "hello-bro" },
    { title: "hello-bro", children: [{ title: "child" }] },
  ]);
  return (
    <div style={{ height: 1000 }}>
      <input /> <button>Add</button>
      <SortableTree
        treeData={treeData}
        onChange={(treeData) => {
          setTreeData(treeData);
          console.log(treeData);
        }}
      />
    </div>
  );
};

export default Tree;
