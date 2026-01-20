import Layout from "./components/Layout";
import Card from "./components/Card";

function App() {
  return (
    // 1. Dùng Layout làm "Khung" bao bọc toàn bộ
    <Layout>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <h2 style={{ textAlign: "center", color: "#2c3e50" }}>
          Demo: Sức mạnh của Children Props
        </h2>

        {/* 2. Dùng Card để bao bọc một đoạn văn thông thường */}
        <Card title="Chuyện kể về React">
          <p>
            React được phát triển bởi Facebook. Một trong những khái niệm quan trọng
            nhất là <strong>Composition</strong> (Sự kết hợp).
          </p>
          <p>
            Thay vì tạo ra các component khổng lồ, ta tạo ra các "Wrapper" như cái Card này.
          </p>
        </Card>

        {/* 3. Dùng Card để bao bọc một Cấu trúc HTML phức tạp hơn */}
        <Card
          title="Đăng ký nhận tin"
          footer={<button style={{ padding: "5px 15px", cursor: "pointer" }}>Gửi ngay</button>}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <label>Email của bạn:</label>
            <input type="email" placeholder="email@example.com" style={{ padding: "8px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">Tôi đồng ý với điều khoản</label>
            </div>
          </div>
        </Card>

        {/* 4. Thậm chí có thể lồng các Card vào nhau nếu muốn */}
        <Card title="Thông báo hệ thống">
          <div style={{ backgroundColor: "#fff9db", padding: "10px", borderRadius: "4px" }}>
            ⚠️ Đây là một thông báo nằm trong Card.
          </div>
        </Card>

      </div>
    </Layout>
  );
}

export default App;
