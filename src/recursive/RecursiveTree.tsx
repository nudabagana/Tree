import { useState } from "react";
import TreeNode, { TreeNodeProps } from "./TreeNode";

const TREE_ELEMENTS: TreeNodeProps[] = [
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

function RecursiveTree() {
  const [children, setChildren] = useState(TREE_ELEMENTS);
  const addChild = (childProps: TreeNodeProps) => {
    setChildren([...children, childProps]);
  };

  return (
    <div>
      <h2>Recursive</h2>
      {children.map((props, i) => (
        <TreeNode key={props.text + i} {...props} addSibling={addChild} />
      ))}
    </div>
  );
}

export default RecursiveTree;
