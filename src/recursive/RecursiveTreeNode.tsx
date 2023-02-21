import { FC, useState } from "react";

export type TreeNodeProps = {
  text: string;
  children?: TreeNodeData[];
  addSibling(childProps: TreeNodeData): void;
};

export type TreeNodeData = Omit<TreeNodeProps, "addSibling">;

const RecursiveTreeNode: FC<TreeNodeProps> = ({
  text,
  addSibling,
  ...props
}) => {
  const [showBtns, setShowBtns] = useState(false);
  const [inputText, setInputText] = useState("");
  const [children, setChildren] = useState(props.children);

  const addChild = (childProps: TreeNodeData) => {
    setChildren([...(children ?? []), childProps]);
  };

  const onAddChild = () => {
    addChild({ text: inputText });
    setInputText("");
  };

  const onAddSibling = () => {
    addSibling({ text: inputText });
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
        <RecursiveTreeNode
          key={props.text + i}
          {...props}
          addSibling={addChild}
        />
      ))}
    </div>
  );
};

export default RecursiveTreeNode;
