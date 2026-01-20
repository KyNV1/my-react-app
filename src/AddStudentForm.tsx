import { useState } from "react";

interface AddStudentFormProps {
    onAdd: (name: string, age: number, major: string) => void;
}

function AddStudentForm({ onAdd }: AddStudentFormProps) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [major, setMajor] = useState("ReactJS");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !age) {
            alert("Vui lòng nhập đủ tên và tuổi!");
            return;
        }
        onAdd(name, parseInt(age), major);
        setName("");
        setAge("");
    };

    const formStyle: React.CSSProperties = {
        backgroundColor: "#f1f2f6",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
    };

    const inputStyle: React.CSSProperties = {
        padding: "8px",
        marginRight: "10px",
        marginBottom: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc"
    };

    return (
        <div style={formStyle}>
            <h3 style={{ marginTop: 0 }}>Thêm Sinh Viên Mới</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tên sinh viên..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="number"
                    placeholder="Tuổi..."
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={{ ...inputStyle, width: "60px" }}
                />
                <select
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    style={inputStyle}
                >
                    <option value="ReactJS">ReactJS</option>
                    <option value="Java">Java</option>
                    <option value="Design">Design</option>
                </select>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#0984e3",
                        color: "white",
                        border: "none",
                        padding: "8px 20px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    Thêm
                </button>
            </form>
        </div>
    );
}

export default AddStudentForm;
