import { useState } from "react";

export default function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const login = (username, password) => {
    // simple validation example
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return { isLoggedIn, error, login, logout };
}