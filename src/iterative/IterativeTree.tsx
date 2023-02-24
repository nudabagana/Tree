import { generateId } from "../utils";
import IterativeTreeNode, { TreeNodeData } from "./IterativeTreeNode";

export const CHILD = "CHILD" as const;
export const SIBLING = "SIBLING" as const;
export type AddProps = {
  nodeData: TreeNodeData;
  newType: typeof CHILD | typeof SIBLING;
  newText: string;
};

type Props = {
  nodes: TreeNodeData[];
  addNode: (parentId: string, text: string) => void;
};

function IterativeTree({ nodes, addNode }: Props) {
  return (
    <div>
      <h2>Iterative</h2>
      {nodes.map((props, i) => (
        <IterativeTreeNode key={props.text + i} {...props} addNode={addNode} />
      ))}
    </div>
  );
}

export default IterativeTree;
