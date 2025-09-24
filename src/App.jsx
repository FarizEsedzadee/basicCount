import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count <= 0 ? 0 : count - 1)}
          className="px-4 py-2 border text-xl"
        >
          -
        </button>

        <span className="text-2xl min-w-[40px] text-center">{count}</span>

        <button
          onClick={() => setCount(count >= 10 ? 10 : count + 1)}
          className="px-4 py-2 border text-xl"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
