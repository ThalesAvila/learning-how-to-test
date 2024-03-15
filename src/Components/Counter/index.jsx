import { useState } from 'react';

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <header>
        <h1>Days Since Our Last Commit to Master</h1>
      </header>
      <div className="text-center text-8xl" data-testid="current-count">
        {count}
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="bg-red-500 text-white	"
          name="reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="bg-blue-500 text-white	"
          name="increment"
          onClick={() => setCount((n) => n + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
