import { useState } from "react";
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
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

      <button
        onClick={() => setCount(0)}
        className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
      >
        Reset
      </button>

      <div className="w-64 bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-red-500 h-4"
          style={{ width: `${(count / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default App;
