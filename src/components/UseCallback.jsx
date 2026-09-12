import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");

  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <>
      <h1>useCallback example</h1>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Child onClick={handleClick} />
    </>
  );
};

export default UseCallback;