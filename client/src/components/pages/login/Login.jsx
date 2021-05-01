import { useContext, useRef } from "react";
import "./login.css";
import { CircularProgress } from "@material-ui/core";
import "../homecss.css";
export default function Login() {
  const email = useRef();
  const password = useRef();
 

  const handleClick = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Savior</h3>
          <span className="loginDesc">
            Ứng dụng hỗ trợ sức khỏe, tâm lý sinh viên.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input 
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput mt-20"
              ref={password}
            />
            <button className="loginButton" type="submit" >
              Đăng nhập
            </button>
            <span className="loginForgot mt-20">Quên mật khẩu?</span>
            <button className="loginRegisterButton mb5">
              Tạo tài khoản
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
