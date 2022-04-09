import React, { useContext } from "react";
import CommonInput from "../components/UI/input/CommonInput";
import CommonButton from "../components/UI/button/CommonButton";
import { AuthContext } from "../context";

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const login = event => {
    event.preventDefault();
    setIsAuth(true)
    localStorage.setItem('auth', true)
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <CommonInput type="text" placeholder="Enter login"></CommonInput>
        <CommonInput type="password" placeholder="Enter login"></CommonInput>
        <CommonButton>Enter</CommonButton>
      </form>
    </div>
  );
};

export default Login;
