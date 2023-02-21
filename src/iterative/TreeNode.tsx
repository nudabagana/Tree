import { FC, useState } from "react";

export type TreeNodeProps = {
  text: string;
  depth: number;
  add: (props: TreeNodeProps, type: "CHILD" | "SIBLING", text: string) => void;
};

const TreeNode: FC<TreeNodeProps> = (props) => {
  const { add, depth, text } = props;
  const [showBtns, setShowBtns] = useState(false);
  const [inputText, setInputText] = useState("");

  const onAddChild = () => {
    add(props, "CHILD", inputText);
    setInputText("");
  };

  const onAddSibling = () => {
    add(props, "SIBLING", inputText);
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

export default TreeNode;
