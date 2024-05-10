import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUser {
  role: string | null;
  name: string | null;
  email: string | null;
  id: number | null;
}

interface IAuthStore {
  user: IUser;
  setUserData: (userData: IUser) => void;
}

export const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      user: { role: null, name: null, email: null, id: null },
      setUserData: (userData: IUser) =>
        set((state) => ({ ...state, user: userData })),
    }),
    {
      name: "accessToken",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
