import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem(
        "Password",
        JSON.stringify(password)
      );
  

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group">
                <label>HỌ TÊN</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập Họ Tên"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>EMAIL</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>MẬT KHẨU</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập Mật Khẩu"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>SỐ ĐIỆN THOẠI</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Nhập Số Điện Thoại"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                ĐĂNG KÝ
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Đăng nhập
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  Vui lòng nhập đầy đủ vào form
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Registration;
