import { FC, useState } from "react";
import IterativeTree from "./iterative/IterativeTree";
import RecursiveTree from "./recursive/RecursiveTree";

const REC = "REC";
const IT = "IT";

const App: FC = () => {
  const [tree, setTree] = useState<string>();

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Tree</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => setTree(REC)}
        >
          Recursive
        </button>
        <button style={{ backgroundColor: "cyan" }} onClick={() => setTree(IT)}>
          Iterative
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => setTree(undefined)}
        >
          Reset
        </button>
      </div>
      {tree === REC && <RecursiveTree />}
      {tree === IT && <IterativeTree />}
    </div>
  );
};

export default App;
