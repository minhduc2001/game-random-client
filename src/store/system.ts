import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SystemState = {
  isRenderNotificationHome: boolean;
};

type SystemAction = {
  setRenderNotificationHome: () => void;
};

const initialState: SystemState = {
  isRenderNotificationHome: true,
};

const useSystemStore = create(
  persist<SystemState & SystemAction>(
    (set) => ({
      ...initialState,
      setRenderNotificationHome: () => {
        set(() => ({ isRenderNotificationHome: false }));
      },
    }),
    { name: "system-store", storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useSystemStore;
