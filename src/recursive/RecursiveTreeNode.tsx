import { FC, useState } from "react";

export type TreeNodeProps = {
  id: string;
  text: string;
  children?: TreeNodeData[];
  addNode: (parentId: string, text: string) => void;
};

export type TreeNodeData = Omit<TreeNodeProps, "addNode">;

const RecursiveTreeNode: FC<TreeNodeProps> = ({
  text,
  addNode,
  id,
  children,
}) => {
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
        paddingLeft: "20px",
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
      {children?.map((props, i) => (
        <RecursiveTreeNode key={props.text + i} {...props} addNode={addNode} />
      ))}
    </div>
  );
};

export default RecursiveTreeNode;
