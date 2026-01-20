import RegisterCourse, { ScheduleCourse } from "./WelcomeCard";


function App() {
  return (
    <div className="App">
      <h1>Ứng dụng đầu tiên của tôi</h1>
      <hr />
      {/* Sử dụng component như một thẻ HTML tự đóng */}
      <RegisterCourse />
      <ScheduleCourse />
    </div>
  );
}

export default App;