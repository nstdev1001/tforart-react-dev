import { useState } from "react";

const BuggyComponent = () => {
  const [count, setCount] = useState(0);

  if (count === 5) {
    // Cố tình tạo lỗi
    throw new Error("Simulated error: Count reached 5!");
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h3>Count: {count}</h3>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          padding: "8px 16px",
          background: "#333",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Increment Count
      </button>
      <p>Component sẽ crash khi count = 5</p>
    </div>
  );
};

export default BuggyComponent;
