import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./index.scss";
import { Link } from "react-router-dom";
import { Form, FormProps } from "antd";
import { useMutation } from "@tanstack/react-query";
import { POST } from "@/api/api";
import useUserStore from "@/store/user";

type FieldTypeRegister = {
  username: string;
  password: string;
  full_name: string;
  email: string;
};

function Register() {
  const { setToken } = useUserStore((state) => state);

  const registerMutation = useMutation({
    mutationFn: (data: FieldTypeRegister) => {
      return POST<ResponseForm<LoginResponse>>("auth/register", data);
    },
  });

  const onFinish: FormProps<FieldTypeRegister>["onFinish"] = (values) => {
    registerMutation.mutate(values, {
      onSuccess(data) {
        if (data.data) {
          setToken(data.data);
        }
      },
    });
  };

  return (
    <div className="register-container">
      <div className="content-header">
        <h2 className="content-header-title">Đăng Ký Tài Khoản</h2>
      </div>
      <div className="row p-[23px] pb-0">
        <Form className="text-center" onFinish={onFinish}>
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
          <Form.Item
            className="form-group"
            name={"username"}
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
            name={"full_name"}
            rules={[{ required: true, message: "Họ tên không được để trống!" }]}
          >
            <input
              type="text"
              className="form-control"
              name="full_name"
              placeholder="Họ tên"
            />
          </Form.Item>
          <Form.Item
            className="form-group"
            name={"email"}
            rules={[{ required: true, message: "Email không được để trống!" }]}
          >
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            className="form-group"
            name={"password"}
            rules={[
              { required: true, message: "Password không được để trống!" },
            ]}
          >
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <Form.Item className="form-group" name={"password_confirmation"}>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              placeholder="Xác nhận mật khẩu"
            />
          </Form.Item>

          <div className="form-group">
            <button className="btn btn-info mr-0" type="submit">
              Tạo tài khoản
            </button>
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
        </Form>
      </div>
    </div>
  );
}

export default Register;
