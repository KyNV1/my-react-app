import type { User } from "../types";

interface UserCardProps {
    user: User;
}

function UserCard({ user }: UserCardProps) {
    const cardStyle: React.CSSProperties = {
        border: "1px solid #e1e4e8",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        transition: "transform 0.2s, boxShadow 0.2s",
        cursor: "pointer",
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 12px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
            }}
        >
            <h3 style={{ margin: "0 0 10px 0", color: "#24292e" }}>{user.name}</h3>
            <p style={{ margin: "5px 0", color: "#586069", fontSize: "0.9rem" }}>
                📧 {user.email}
            </p>
            <p style={{ margin: "5px 0", color: "#586069", fontSize: "0.9rem" }}>
                🏢 {user.company.name}
            </p>
            <div style={{
                marginTop: "15px",
                paddingTop: "10px",
                borderTop: "1px solid #f1f3f5",
                fontSize: "0.8rem",
                color: "#0366d6"
            }}>
                🌐 {user.website}
            </div>
        </div>
    );
}

export default UserCard;
