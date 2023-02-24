import { TreeNodeData } from "./recursive/RecursiveTreeNode";
import { TreeNodeData as IterativeTreeNodeData } from "./iterative/IterativeTreeNode";
import { generateId } from "./utils";

export const TREE_NODES: TreeNodeData[] = [
  {
    text: "Lorem",
    id: generateId(),
    children: [
      { text: "Ipsum", id: generateId() },
      {
        text: "Dolor",
        id: generateId(),
        children: [
          {
            text: "Orco",
            id: generateId(),
            children: [
              {
                text: "Quis",
                id: generateId(),
                children: [{ id: generateId(), text: "Odio" }],
              },
            ],
          },
        ],
      },
      {
        text: "Sit",
        id: generateId(),
        children: [
          { id: generateId(), text: "Amet" },
          { id: generateId(), text: "Consectetur" },
        ],
      },
      {
        text: "Adipiscing",
        id: generateId(),
        children: [
          {
            text: "Elit",
            id: generateId(),
            children: [
              { id: generateId(), text: "Vestibulum" },
              { id: generateId(), text: "Vitae" },
            ],
          },
        ],
      },
    ],
  },
];

export const flatTreeData = (nodes: TreeNodeData[]) => {
  const parsedNodes: IterativeTreeNodeData[] = [];
  const nodeStack = nodes.map((node) => ({ ...node, depth: 0 }));

  while (nodeStack.length > 0) {
    const { children, depth, ...firstItem } = nodeStack.shift()!;
    parsedNodes.push({ ...firstItem, depth });

    if (children && children.length > 0) {
      nodeStack.unshift(
        ...children.map((node) => ({ ...node, depth: depth + 1 }))
      );
    }
  }
  return parsedNodes;
};
