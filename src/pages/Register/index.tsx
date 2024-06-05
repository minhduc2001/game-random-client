import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./index.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <div className="content-header">
        <h2 className="content-header-title">Đăng Ký Tài Khoản</h2>
      </div>
      <div className="row p-[23px] pb-0">
        <form method="post" action="" className="text-center">
          <div className="form-group">
            <a
              href="https://nsocltx.com/login/facebook"
              className="btn btn-social btn-facebook"
            >
              <FaFacebookF />
              Đăng nhập với Facebook
            </a>
            <a
              href="https://nsocltx.com/login/google"
              className="btn btn-social btn-google"
            >
              <FaGoogle />
              Đăng nhập với Google
            </a>
          </div>
          <div className="mb-3">hoặc tạo tài khoản</div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Tên tài khoản"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="full_name"
              placeholder="Họ tên"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              placeholder="Xác nhận mật khẩu"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-info mr-0">Tạo tài khoản</button>
          </div>
          <div className="row text-center m-3">---- hoặc ----</div>
          <div className="form-group">
            <Link to="/dang-nhap" className="btn btn-danger" role="button">
              Đăng nhập
            </Link>
            <a href="#" className="btn btn-warning" role="button">
              Quên mật khẩu?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
