
interface Course {
  courseName?: string;
  teacherName?: string;
}

function RegisterCourse({ courseName = "ReactJS", teacherName = "Nguyễn Anh Kỳ" }: Course) {
  return (
    <div>
      <div >Khóa học: {courseName}</div>
      <div >Giảng viên: {teacherName}</div>
      <button onClick={() => alert("Chúc bạn học tốt!")}  >Bắt đầu học ngay</button>
    </div>
  );
}

export default RegisterCourse;

export interface Schedule {
  courseTime?: string;
  courseDate?: string;
}

export function ScheduleCourse({ courseTime = "3h-4h", courseDate = "24/1/2028" }: Schedule) {
  return (
    <div>
      <div>Thời gian: {courseTime}</div>
      <div>Ngày học: {courseDate}</div>
    </div>
  );
}

