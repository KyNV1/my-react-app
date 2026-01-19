import { useState } from "react";

/**
 * Counter Component
 * Demonstrates the use of React State (useState hook)
 */
function Counter() {
  // 1. Khai báo state 'count' với giá trị khởi tạo là 0
  // setCount là hàm dùng để cập nhật giá trị của count
  const [count, setCount] = useState<number>(0);

  // 2. Các hàm xử lý sự kiện (Event Handlers)
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // 3. Logic tính toán giao diện dựa trên state (Derived State)
  const getCountStyle = (): React.CSSProperties => {
    if (count > 10) return { color: "#e74c3c", fontWeight: "bold" }; // Màu đỏ
    if (count < 0) return { color: "#27ae60", fontWeight: "bold" };  // Màu xanh lá
    return { color: "#2c3e50" }; // Màu mặc định
  };

  const cardStyle: React.CSSProperties = {
    border: "2px solid #3498db",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    maxWidth: "300px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  };

  const buttonStyle: React.CSSProperties = {
    padding: "10px 15px",
    margin: "5px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "transform 0.1s"
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: "0 0 10px 0" }}>Máy đếm thông minh</h3>
      
      <div style={{ fontSize: "2rem", ...getCountStyle() }}>
        {count}
      </div>

      <div style={{ marginTop: "15px" }}>
        <button 
          style={{ ...buttonStyle, backgroundColor: "#e74c3c", color: "white" }}
          onClick={handleDecrement}
        >
          - Giảm
        </button>

        <button 
          style={{ ...buttonStyle, backgroundColor: "#95a5a6", color: "white" }}
          onClick={handleReset}
        >
          Reset
        </button>

        <button 
          style={{ ...buttonStyle, backgroundColor: "#2ecc71", color: "white" }}
          onClick={handleIncrement}
        >
          + Tăng
        </button>
      </div>

      <p style={{ fontSize: "0.8rem", color: "#7f8c8d", marginTop: "10px" }}>
        {count > 10 ? "🔥 Wow, số lớn quá!" : count < 0 ? "❄️ Đang bị âm rồi kìa!" : "Hãy thử bấm nút xem sao"}
      </p>
    </div>
  );
}

export default Counter;
