import { useState } from "react";
import { RECURSIVE_TREE_NODES } from "./InitialRecursiveData";
import RecursiveTreeNode, { TreeNodeData } from "./RecursiveTreeNode";

const RecursiveTree = () => {
  const [nodes, setNodes] = useState(RECURSIVE_TREE_NODES);
  const addNode = (data: TreeNodeData) => {
    setNodes([...nodes, data]);
  };

  return (
    <div>
      <h2>Recursive</h2>
      {nodes.map((props, i) => (
        <RecursiveTreeNode
          key={props.text + i}
          {...props}
          addSibling={addNode}
        />
      ))}
    </div>
  );
};

export default RecursiveTree;
