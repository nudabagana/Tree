import { FC, useState } from "react";
import { flatTreeData, TREE_NODES } from "./InitialData";
import IterativeTree from "./iterative/IterativeTree";
import RecursiveTree from "./recursive/RecursiveTree";
import { TreeNodeData } from "./recursive/RecursiveTreeNode";
import { generateId } from "./utils";

const REC = "REC";
const IT = "IT";

const App: FC = () => {
  const [tree, setTree] = useState<string>();
  const [nodes, setNodes] = useState(TREE_NODES);

  const addNode = (parentId: string, text: string) => {
    const newNodes = JSON.parse(JSON.stringify(nodes));
    const newNode = findNode(newNodes, parentId);
    if (newNode) {
      newNode.children ??= [];
      newNode.children.push({ id: generateId(), text });
    }
    setNodes(newNodes);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Tree</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => setTree(REC)}
        >
          Recursive
        </button>
        <button style={{ backgroundColor: "cyan" }} onClick={() => setTree(IT)}>
          Iterative
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => setTree(undefined)}
        >
          Reset
        </button>
      </div>
      {tree === REC && <RecursiveTree nodes={nodes} addNode={addNode} />}
      {tree === IT && (
        <IterativeTree nodes={flatTreeData(nodes)} addNode={addNode} />
      )}
    </div>
  );
};

export default App;

const findNode = (nodes: TreeNodeData[], id: string): TreeNodeData | null => {
  for (const node of nodes) {
    if (node.id === id) {
      return node;
    }
    const nodeToReturn = findNode(node.children ?? [], id);
    if (nodeToReturn) {
      return nodeToReturn;
    }
  }
  return null;
};
