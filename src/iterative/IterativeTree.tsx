import { useState } from "react";
import { ITERATIVE_TREE_NODES } from "./IterativeTreeData";
import IterativeTreeNode, { TreeNodeData } from "./IterativeTreeNode";

export const CHILD = "CHILD" as const;
export const SIBLING = "SIBLING" as const;
export type AddProps = {
  nodeData: TreeNodeData;
  newType: typeof CHILD | typeof SIBLING;
  newText: string;
};

function IterativeTree() {
  const [nodes, setNodes] = useState(ITERATIVE_TREE_NODES);

  const add = ({ newText, newType, nodeData }: AddProps) => {
    // TO DO: lookup by id, this might lead to errors on same name elements
    const idx = nodes.findIndex((x) => x.text === nodeData.text);

    if (idx !== -1) {
      const newItem: TreeNodeData = {
        text: newText,
        depth: nodeData.depth + (newType === CHILD ? 1 : 0),
      };
      const newChildren = [...nodes];
      newChildren.splice(idx + 1, 0, newItem);

      setNodes(newChildren);
    }
  };

  return (
    <div>
      <h2>Iterative</h2>
      {nodes.map((props, i) => (
        <IterativeTreeNode key={props.text + i} {...props} add={add} />
      ))}
    </div>
  );
}

export default IterativeTree;
