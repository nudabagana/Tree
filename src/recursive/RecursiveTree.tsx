import { useState } from "react";
import { TREE_NODES } from "../InitialData";
import RecursiveTreeNode, { TreeNodeData } from "./RecursiveTreeNode";

type Props = {
  nodes: TreeNodeData[];
  addNode: (parentId: string, text: string) => void;
};

const RecursiveTree = ({ nodes, addNode }: Props) => {
  return (
    <div>
      <h2>Recursive</h2>
      {nodes.map((props, i) => (
        <RecursiveTreeNode addNode={addNode} key={props.text + i} {...props} />
      ))}
    </div>
  );
};

export default RecursiveTree;
