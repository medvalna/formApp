import "./App.css";
import Cover from "./assets/Cover.png";
function App() {
  return (
    <>
      <div className="container">
        <div className="layout">
          <div className="cover_container">
            <img src={Cover} className="cover" alt="Image" />
          </div>
          <button className="button">
            <span className="button-text">Login</span>
          </button>
          <div className="title">
            <h1>Form App</h1>
            <h3>best app for creating your forms</h3>
          </div>
        </div>
        <h2 className="question-title"> What Can You Do?</h2>
        <div className="pros">
          <div className="points">
            <div>
              <h3>Create form</h3>
              <h4>
                Effortlessly create your new form with our powerful and
                intuitive form app
              </h4>
            </div>
            <div>
              <h3>Answer on forms</h3>
              <h4>
                Discover insightful critiques and share your thoughts on diverse
                literary masterpieces effortlessly
              </h4>
            </div>
            <div>
              <h3>See results</h3>
              <h4>
                Easily visualize your form submission data with our built-in
                analytics tools
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
