import { useState } from "react";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card ">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="p-2 bg-blue-400 rounded-lg m-3 hover:bg-blue-900 transition-colors ease-in-out transform duration-300 hover:text-white border border-blue-400 border-b-white"
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
