import WelcomeCard from './WelcomeCard';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="glass-card">
        <h1>Học React Level Up 🚀</h1>
        <p className="subtitle">Thực hành Props & State</p>
        
        <hr style={{ margin: "20px 0", border: "0.5px solid #eee" }} />

        {/* 1. Phần thực hành Props */}
        <WelcomeCard courseName="ReactJS Master" teacherName="Antigravity Detective" />

        <hr style={{ margin: "20px 0", border: "0.5px solid #eee" }} />

        {/* 2. Phần thực hành State */}
        <Counter />

      </div>
    </div>
  );
}

export default App;
