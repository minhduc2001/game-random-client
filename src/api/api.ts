import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

function getConfig() {
  return {
    baseURL: "http://localhost:8080/api/v1",
    headers: {
      ContentType: "application/json",
      Accept: "application/json",
    },
  };
}

async function axiosInstance(): Promise<AxiosInstance> {
  let instance: AxiosInstance;

  const config = getConfig();
  instance = axios.create(config);

  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const access_token = JSON.parse(localStorage.getItem("user-store") ?? "")
        ?.state?.access_token;

      if (access_token) {
        config.headers["Authorization"] = `Bearer ${access_token}`;
      }
      return config;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data;
    },
    async (error) => {
      const originalRequest = error?.config;
      if (error?.response?.status === 401 && !originalRequest._retry) {
        // Kiểm tra mã trạng thái 401 (Unauthorized) và chưa thử lại request
        // Gửi yêu cầu refresh token để lấy token mới
        const newToken = "";
        if (newToken) {
          // Thử lại request ban đầu với token mới
          originalRequest._retry = true;
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return axios(originalRequest);
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

async function GET<T>(url: string, params?: any): Promise<T> {
  const api = await axiosInstance();
  return api.get(url, { params: params });
}

async function POST<T>(url: string, data: any, params?: any): Promise<T> {
  const api = await axiosInstance();
  return api.post(url, data, { params: params });
}

async function PUT<T>(url: string, data: any, params?: any): Promise<T> {
  const api = await axiosInstance();
  return api.put(url, data, { params: params });
}

async function PATCH<T>(url: string, data: any, params?: any): Promise<T> {
  const api = await axiosInstance();
  return api.patch(url, data, { params: params });
}

async function DELETE<T>(url: string, params?: any): Promise<T> {
  const api = await axiosInstance();
  return api.delete(url, { params: params });
}

export { GET, POST, PUT, PATCH, DELETE };
