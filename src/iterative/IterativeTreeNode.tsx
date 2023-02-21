import { FC, useState } from "react";
import { AddProps, CHILD, SIBLING } from "./IterativeTree";

export type TreeNodeProps = {
  text: string;
  depth: number;
  add: (props: AddProps) => void;
};

export type TreeNodeData = Omit<TreeNodeProps, "add">;

const IterativeTreeNode: FC<TreeNodeProps> = (props) => {
  const { add, depth, text } = props;
  const [showBtns, setShowBtns] = useState(false);
  const [inputText, setInputText] = useState("");

  const onAddChild = () => {
    add({ nodeData: props, newType: CHILD, newText: inputText });
    setInputText("");
  };

  const onAddSibling = () => {
    add({ nodeData: props, newType: SIBLING, newText: inputText });
    setInputText("");
  };

  return (
    <div
      style={{
        paddingLeft: `${20 * (depth + 1)}px`,
        color: "blue",
        cursor: "pointer",
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (!showBtns) {
          setShowBtns(true);
        }
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          height: "35px",
        }}
      >
        <span>- {text}</span>
        {showBtns && (
          <>
            <button
              style={{ background: "cyan", padding: "3px" }}
              onClick={onAddChild}
            >
              Add child
            </button>
            <button
              style={{ background: "orange", padding: "3px" }}
              onClick={onAddSibling}
            >
              Add sibling
            </button>
            <input
              style={{ height: "20px" }}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default IterativeTreeNode;
