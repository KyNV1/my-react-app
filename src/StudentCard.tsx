import type { Student } from "./types";

interface StudentCardProps {
    student: Student;
    onDelete: (id: number) => void;
}

function StudentCard({ student, onDelete }: StudentCardProps) {
    const cardStyle: React.CSSProperties = {
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
    };

    return (
        <div style={cardStyle}>
            <div>
                <h4 style={{ margin: "0 0 5px 0", color: "#2c3e50" }}>{student.name}</h4>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#7f8c8d" }}>
                    Tuổi: {student.age} | Chuyên ngành: <strong>{student.major}</strong>
                </p>
            </div>
            <button
                onClick={() => onDelete(student.id)}
                style={{
                    backgroundColor: "#ff7675",
                    color: "white",
                    border: "none",
                    padding: "5px 12px",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Xóa
            </button>
        </div>
    );
}

export default StudentCard;
