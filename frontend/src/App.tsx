import "./App.css";
import Cover from "./assets/Cover.png";
import Cover_mob from "./assets/Cover_mob.png";
import IconPlus from "./assets/IconPlus.png";
import IconMessage from "./assets/IconMessage.png";
import IconFile from "./assets/IconFile.png";
function App() {
  return (
    <>
      <div className="container">
        <div className="layout">
          <div className="cover_container">
            <img src={Cover} className="cover" alt="Image" />
            <img src={Cover_mob} className="cover_mob" alt="Image" />
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
        <div className="points">
          <div className="pros">
            <img src={IconPlus} className="icon" alt="Image" />
            <h3 className="h3title">Create form</h3>
            <h4>
              Effortlessly create your new form with our powerful and intuitive
              form app
            </h4>
          </div>
          <div className="pros">
            <img src={IconMessage} className="icon" alt="Image" />
            <h3 className="h3title">Answer on forms</h3>
            <h4>
              Discover insightful critiques and share your thoughts on diverse
              literary masterpieces effortlessly
            </h4>
          </div>
          <div className="pros">
            <img src={IconFile} className="icon" alt="Image" />
            <h3 className="h3title">See results</h3>
            <h4>
              Easily visualize your form submission data with our built-in
              analytics tools
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
