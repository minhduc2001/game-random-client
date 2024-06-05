import { create } from "zustand";
import { persist } from "zustand/middleware";

type LoginState = {
  rememberPassword: boolean;
  username?: string;
  password?: string;
};

type LoginAction = {
  setRememberPassword: () => void;
  setInfoLogin: (username: string, password: string) => void;
  removeInfoLogin: () => void;
};

const initialState: LoginState = {
  rememberPassword: false,
  password: undefined,
  username: undefined,
};

const useLoginStore = create(
  persist<LoginState & LoginAction>(
    (set, get) => ({
      ...initialState,
      setRememberPassword: () => {
        set(() => ({
          rememberPassword: !get().rememberPassword,
        }));
      },
      setInfoLogin: (username, password) => {
        set(() => ({
          username,
          password,
        }));
      },
      removeInfoLogin: () => {
        set(initialState);
      },
    }),
    { name: "login-store" }
  )
);

export default useLoginStore;
