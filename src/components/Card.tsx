import { ReactNode } from "react";

interface CardProps {
    title: string;
    children: ReactNode; // Chấp nhận mọi nội dung (JSX, Text, Components)
    footer?: ReactNode;  // Bạn cũng có thể tạo thêm các "lỗ hổng" khác ngoài children
}

function Card({ title, children, footer }: CardProps) {
    const cardStyle: React.CSSProperties = {
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        overflow: "hidden",
        maxWidth: "500px",
        margin: "20px auto",
        border: "1px solid #eee",
        fontFamily: "sans-serif"
    };

    const headerStyle: React.CSSProperties = {
        padding: "15px 20px",
        backgroundColor: "#3498db",
        color: "#white",
        margin: 0,
        fontSize: "1.2rem",
        color: "white"
    };

    const bodyStyle: React.CSSProperties = {
        padding: "20px",
        lineHeight: "1.6",
        color: "#34495e"
    };

    const footerStyle: React.CSSProperties = {
        padding: "10px 20px",
        backgroundColor: "#f9f9f9",
        borderTop: "1px solid #eee",
        fontSize: "0.9rem",
        textAlign: "right"
    };

    return (
        <div style={cardStyle}>
            <h3 style={headerStyle}>{title}</h3>

            {/* Nơi nội dung bên trong được render */}
            <div style={bodyStyle}>
                {children}
            </div>

            {footer && (
                <div style={footerStyle}>
                    {footer}
                </div>
            )}
        </div>
    );
}

export default Card;
