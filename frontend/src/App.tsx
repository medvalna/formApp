import "./App.css";
import Cover from "./assets/Cover.png";
function App() {
  return (
    <>
      <img src={Cover} alt="Logo" className="cover" />;
      <div className="navbar">
        <button className="button">
          <span className="button-text">Login</span>
        </button>
      </div>
      <div className="title">
        <h1>Form App</h1>
        <h3>best app for creating your forms</h3>
      </div>
      <div className="question">
        <h2>What can you do?</h2>
      </div>
    </>
  );
}

export default App;
