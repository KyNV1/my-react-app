import WelcomeCard from './WelcomeCard'; // Import component vừa tạo

function App() {
  return (
    <div className="App">
      <h1>Ứng dụng đầu tiên của tôi</h1>
      <hr />
      {/* Sử dụng component như một thẻ HTML tự đóng */}
      <WelcomeCard />
    </div>
  );
}

export default App;