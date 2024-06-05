import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./index.scss";

function Login() {
  return (
    <div className="login-container">
      <div className="content-header">
        <h2 className="content-header-title">Đăng Nhập Người Dùng</h2>
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
          <div className="mb-3">hoặc sử dụng tài khoản</div>
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
              type="password"
              className="form-control"
              name="password"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="form-group">
            <div className="checkbox">
              <label>
                <input type="checkbox" />
                Ghi nhớ tài khoản
              </label>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-info mr-0">Đăng nhập</button>
          </div>
          <div className="row text-center m-3">---- hoặc ----</div>
          <div className="form-group">
            <a
              href="https://nsocltx.com/dang-ky"
              className="btn btn-danger"
              role="button"
            >
              Tạo tài khoản
            </a>
            <a href="" className="btn btn-warning" role="button">
              Quên mật khẩu?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
