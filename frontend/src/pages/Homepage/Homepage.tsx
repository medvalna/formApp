import { useNavigate } from "react-router-dom";
import "../../index.css";
import { useEffect } from "react";
import { useMe } from "../../hooks/useMe";

export function Homepage() {
  const navigator = useNavigate();
  const isAuth = useMe();
  useEffect(() => {
    if (!isAuth) {
      navigator("/sign-up");
    }
  }, [isAuth]);
  return (
    <div>
      <h1>Homepage!</h1>
    </div>
  );
}
