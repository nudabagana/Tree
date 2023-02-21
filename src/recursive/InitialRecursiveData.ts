import { TreeNodeData } from "./RecursiveTreeNode";

export const RECURSIVE_TREE_NODES: TreeNodeData[] = [
  {
    text: "Lorem",
    children: [
      { text: "Ipsum" },
      {
        text: "Dolor",
        children: [
          {
            text: "Orco",
            children: [{ text: "Quis", children: [{ text: "Odio" }] }],
          },
        ],
      },
      { text: "Sit", children: [{ text: "Amet" }, { text: "Consectetur" }] },
      {
        text: "Adipiscing",
        children: [
          {
            text: "Elit",
            children: [{ text: "Vestibulum" }, { text: "Vitae" }],
          },
        ],
      },
    ],
  },
];
