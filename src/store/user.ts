import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type UserState = {
  id: number;
  full_name: string;
  phone: any;
  email: string;
  avatar: any;
  coin: number;
  role: number;
};

type UserAction = {
  setToken: (value: LoginResponse) => void;
  createUser: (value: UserState) => void;
};

const useUserStore = create(
  persist<Partial<UserState & LoginResponse> & UserAction>(
    (set) => ({
      createUser: (user: any) => {
        set(() => user);
      },
      removeUser: () => set(() => ({})),
      setToken: (data) => set(() => ({ ...data })),
    }),
    { name: "user-store", storage: createJSONStorage(() => localStorage) }
  )
);

export default useUserStore;
