import React from "react";
import ReactDOM from "react-dom";
import "./login.css";
import { TextField } from "@radix-ui/themes";
import "./../index.css";
ReactDOM.render(
  <React.StrictMode>
    <div className="layout">
      <div className="container">
        <h4 className="title">Sign up</h4>
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
          <button className="button">
            <span className="button-text">Login</span>
          </button>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
