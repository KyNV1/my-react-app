import { useState, useEffect } from "react";
import type { User } from "./types";
import UserCard from "./components/UserCard";

function UserExplorer() {
    // 1. Quản lý State
    const [users, setUsers] = useState<User[]>([]);          // Danh sách gốc từ API
    const [searchTerm, setSearchTerm] = useState("");        // Từ khóa tìm kiếm
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]); // Danh sách sau khi lọc
    const [loading, setLoading] = useState(true);            // Trạng thái đang tải
    const [error, setError] = useState<string | null>(null); // Trạng thái lỗi

    // 2. useEffect để gọi API khi Component vừa hiển thị (Mount)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Không thể lấy dữ liệu từ máy chủ");
                const data = await response.json();

                setUsers(data);
                setFilteredUsers(data); // Ban đầu danh sách hiển thị = danh sách gốc
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Đã có lỗi xảy ra");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []); // Mảng rỗng đảm bảo chỉ chạy 1 lần duy nhất

    // 3. useEffect để xử lý tìm kiếm (Side Effect khi searchTerm thay đổi)
    useEffect(() => {
        const results = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(results);

        // Side effect: Cập nhật tiêu đề trang web
        document.title = searchTerm ? `Tìm kiếm: ${searchTerm}` : "User Explorer";

    }, [searchTerm, users]); // Chạy lại mỗi khi searchTerm hoặc users thay đổi

    return (
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
            <header style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1 style={{ color: "#2c3e50", fontSize: "2.5rem" }}>🕵️‍♂️ User Explorer</h1>
                <p style={{ color: "#7f8c8d" }}>Tìm kiếm và khám phá thông tin người dùng từ API</p>
            </header>

            {/* Thanh tìm kiếm */}
            <div style={{ marginBottom: "30px", position: "relative" }}>
                <input
                    type="text"
                    placeholder="Nhập tên hoặc email người dùng..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "15px 20px",
                        fontSize: "1.1rem",
                        borderRadius: "30px",
                        border: "2px solid #e0e0e0",
                        outline: "none",
                        transition: "border-color 0.3s",
                        boxSizing: "border-box"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#3498db"}
                    onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                />
                {searchTerm && (
                    <span style={{ position: "absolute", right: "20px", top: "15px", color: "#95a5a6" }}>
                        🔍 Tìm thấy {filteredUsers.length} kết quả
                    </span>
                )}
            </div>

            {/* Hiển thị trạng thái Loading / Error */}
            {loading && (
                <div style={{ textAlign: "center", padding: "50px", fontSize: "1.2rem", color: "#3498db" }}>
                    ⏳ Đang tải dữ liệu, vui lòng chờ...
                </div>
            )}

            {error && (
                <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#fff5f5", color: "#c53030", borderRadius: "8px" }}>
                    ❌ Lỗi: {error}
                </div>
            )}

            {/* Danh sách người dùng */}
            {!loading && !error && (
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "25px"
                }}>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map(user => (
                            <UserCard key={user.id} user={user} />
                        ))
                    ) : (
                        <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px", color: "#95a5a6" }}>
                            Không tìm thấy người dùng nào khớp với "<strong>{searchTerm}</strong>"
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default UserExplorer;
