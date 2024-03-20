import "../Login.css";
import { TextField } from "@radix-ui/themes";
import "../../../index.css";
import { useState } from "react";
import { useRegister } from "../../../api/login";

export function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate: registerRequest } = useRegister();
  function handleSignUp() {
    console.log("sending");
    return registerRequest({ email, password });
  }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField.Input
                className="input"
                size="3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button_su" onClick={handleSignUp}>
              <span className="button-text_su">Login</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
