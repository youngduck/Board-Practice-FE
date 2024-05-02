import { create } from "zustand";

interface IAuthStore {
  nickname: string;
  setNickname: (newNickname: string) => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  nickname: "",
  setNickname: (newNickname) =>
    set(() => ({
      nickname: newNickname,
    })),
}));
