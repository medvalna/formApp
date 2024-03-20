import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App/App";
import { SignUp } from "../../pages/Login/SignUp/SignUp";
import { Landing } from "../../pages/Landing/Landing";
import { SignIn } from "../../pages/Login/SignIn/SignIn";
import { Homepage } from "../../pages/Homepage/Homepage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<Landing />} path="/" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<SignIn />} path="/sign-in" />
          <Route element={<Homepage />} path="/homepage" />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
