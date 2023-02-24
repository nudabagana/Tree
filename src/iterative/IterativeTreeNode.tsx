import { FC, useState } from "react";
import { AddProps, CHILD, SIBLING } from "./IterativeTree";

export type TreeNodeProps = {
  id: string;
  text: string;
  depth: number;
  addNode: (parentId: string, text: string) => void;
};

export type TreeNodeData = Omit<TreeNodeProps, "addNode">;

const IterativeTreeNode: FC<TreeNodeProps> = (props) => {
  const { addNode, depth, text, id } = props;
  const [showBtns, setShowBtns] = useState(false);
  const [inputText, setInputText] = useState("");

  const onAddChild = () => {
    addNode(id, inputText);
    setInputText("");
  };

  const onAddSibling = () => {
    addNode(id, inputText);
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
