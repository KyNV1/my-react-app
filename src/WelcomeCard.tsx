
interface WelcomeCardProps {
  courseName?: string;
  teacherName?: string;
}

function WelcomeCard({courseName = "ReactJS",teacherName= "Nguyễn Anh Kỳ"}:WelcomeCardProps) {
  return (
   <div>
    <div >Khóa học: {courseName}</div>  
    <div >Giảng viên: {teacherName}</div>
    <button onClick={() => alert("Chúc bạn học tốt!")}  >Bắt đầu học ngay</button>
   </div> 
  );
}

export default WelcomeCard;
