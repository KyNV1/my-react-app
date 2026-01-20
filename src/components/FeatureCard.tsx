interface FeatureProps {
    icon: string;
    title: string;
    description: string;
    color: string;
}

function FeatureCard({ icon, title, description, color }: FeatureProps) {
    return (
        <div style={{
            padding: "30px",
            borderRadius: "15px",
            backgroundColor: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            textAlign: "center",
            flex: 1,
            minWidth: "250px",
            borderTop: `5px solid ${color}`
        }}>
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{icon}</div>
            <h3 style={{ color: "#2c3e50", marginBottom: "15px" }}>{title}</h3>
            <p style={{ color: "#7f8c8d", lineHeight: "1.6" }}>{description}</p>
        </div>
    );
}

export default FeatureCard;
