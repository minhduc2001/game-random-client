import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  id: number;
};

const useUserStore = create(
  persist<Partial<UserState>>(
    (set) => ({
      createUser: (user: any) => {
        set(() => user);
      },
      removeUser: () => set(() => ({})),
    }),
    { name: "user-store", storage: createJSONStorage(() => localStorage) }
  )
);

export default useUserStore;
