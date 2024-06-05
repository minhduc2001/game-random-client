import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./index.scss";
import { Link } from "react-router-dom";
import { Form, FormProps } from "antd";
import useSystemStore from "@/store/login";

type FieldTypeLogin = {
  username: string;
  password: string;
};

function Login() {
  const {
    rememberPassword,
    password,
    username,
    setRememberPassword,
    setInfoLogin,
    removeInfoLogin,
  } = useSystemStore((state) => state);

  const onFinish: FormProps<FieldTypeLogin>["onFinish"] = (values) => {
    if (rememberPassword) {
      setInfoLogin(values.username, values.password);
    } else removeInfoLogin();
  };

  return (
    <div className="login-container">
      <div className="content-header">
        <h2 className="content-header-title">Đăng Nhập Người Dùng</h2>
      </div>
      <div className="row p-[23px] pb-0">
        <Form
          onFinish={onFinish}
          className="text-center"
          initialValues={{ username, password }}
        >
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
          <Form.Item
            className="form-group"
            name="username"
            rules={[
              { required: true, message: "Tên tài khoản không được để trống!" },
            ]}
          >
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Tên tài khoản"
            />
          </Form.Item>
          <Form.Item
            className="form-group"
            name="password"
            rules={[
              { required: true, message: "Mật khẩu không được để trống!" },
            ]}
          >
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <div className="form-group">
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={rememberPassword}
                  value={rememberPassword ? "on" : "off"}
                  onChange={() => {
                    setRememberPassword();
                  }}
                />
                Ghi nhớ tài khoản
              </label>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-info mr-0" type="submit">
              Đăng nhập
            </button>
          </div>
          <div className="row text-center m-3">---- hoặc ----</div>
          <div className="form-group">
            <Link to="/dang-ky" className="btn btn-danger" role="button">
              Tạo tài khoản
            </Link>
            <a href="#" className="btn btn-warning" role="button">
              Quên mật khẩu?
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
