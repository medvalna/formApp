import "./SignUp.css";
import { TextField } from "@radix-ui/themes";
import "../../index.css";
export function SignUp() {
  return (
    <>
      <div className="layout">
        <div className="placing">
          <h4 className="title_signup">Sign up</h4>
          <div className="inputs">
            <div>
              <TextField.Input
                color="indigo"
                className="input"
                size="2"
                placeholder="Email"
              />
            </div>
            <div>
              <TextField.Input
                className="input"
                size="3"
                placeholder="Password"
              />
            </div>
            <button className="button_su">
              <span className="button-text_su">Login</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
