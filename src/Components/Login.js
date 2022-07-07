import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>ĐĂNG NHẬP</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="ĐIỀN EMAIL"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="ĐIỀN PASSWORD"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            ĐĂNG NHẬP
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
             SAI THÔNG TIN ĐĂNG NHẬP
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
