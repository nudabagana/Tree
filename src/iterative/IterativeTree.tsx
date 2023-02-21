import { useState } from "react";
import TreeNode, { TreeNodeProps } from "./TreeNode";

const TREE_ELEMENTS: Omit<TreeNodeProps, "add">[] = [
  {
    depth: 0,
    text: "Lorem",
  },
  { text: "Ipsum", depth: 1 },
  {
    text: "Dolor",
    depth: 1,
  },
  {
    text: "Orco",
    depth: 2,
  },
  { text: "Quis", depth: 3 },
  { text: "Odio", depth: 4 },
  { text: "Sit", depth: 1 },
  { text: "Amet", depth: 2 },
  { text: "Consectetur", depth: 2 },
  {
    text: "Adipiscing",
    depth: 1,
  },
  {
    text: "Elit",
    depth: 2,
  },
  { text: "Vestibulum", depth: 3 },
  { text: "Vitae", depth: 3 },
];

function IterativeTree() {
  const [children, setChildren] = useState(TREE_ELEMENTS);
  const add = (
    props: Omit<TreeNodeProps, "add">,
    type: "CHILD" | "SIBLING",
    text: string
  ) => {
    const idx = children.findIndex((x) => x.text === props.text);
    console.log(idx);

    if (idx !== -1) {
      const newItem: Omit<TreeNodeProps, "add"> = {
        text,
        depth: props.depth + (type === "CHILD" ? 1 : 0),
      };
      const newChildren = [...children];
      newChildren.splice(idx + 1, 0, newItem);

      setChildren(newChildren);
    }
  };

  return (
    <div>
      <h2>Iterative</h2>
      {children.map((props, i) => (
        <TreeNode key={props.text + i} {...props} add={add} />
      ))}
    </div>
  );
}

export default IterativeTree;
