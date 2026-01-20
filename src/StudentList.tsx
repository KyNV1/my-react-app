import { useState } from "react";
import type { Student } from "./types";
import StudentCard from "./StudentCard";
import AddStudentForm from "./AddStudentForm";

function StudentList() {
    // 1. Quản lý State chính (Danh sách sinh viên)
    const [students, setStudents] = useState<Student[]>([
        { id: 1, name: "Nguyễn Anh Kỳ", age: 20, major: "ReactJS" },
        { id: 2, name: "Trần Thị Bé", age: 21, major: "Java" },
    ]);

    // 2. Hàm thêm sinh viên (Sẽ truyền qua Props)
    const handleAddStudent = (name: string, age: number, major: string) => {
        const newStudent: Student = {
            id: Date.now(), // Tạo ID duy nhất bằng timestamp
            name,
            age,
            major
        };
        setStudents([...students, newStudent]);
    };

    // 3. Hàm xóa sinh viên (Sẽ truyền qua Props)
    const handleDeleteStudent = (id: number) => {
        const updatedStudents = students.filter(student => student.id !== id);
        setStudents(updatedStudents);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ textAlign: "center", color: "#2d3436" }}>Hệ Thống Quản Lý Sinh Viên</h2>

            {/* Truyền hàm qua Props cho Form */}
            <AddStudentForm onAdd={handleAddStudent} />

            <div style={{ marginTop: "20px" }}>
                <h3>Danh Sách Sinh Viên ({students.length})</h3>
                {students.length === 0 ? (
                    <p style={{ color: "#b2bec3", fontStyle: "italic" }}>Chưa có sinh viên nào.</p>
                ) : (
                    students.map(student => (
                        // Truyền dữ liệu và hàm qua Props cho Card
                        <StudentCard
                            key={student.id}
                            student={student}
                            onDelete={handleDeleteStudent}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default StudentList;
