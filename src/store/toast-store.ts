import { create } from "zustand";

interface ToastStore {
  toastList: Set<number>;
  show(toastId: number): void;
  close(toastId: number): void;
  closeAll(): void;
}

export const useToastStore = create<ToastStore>((set, get) => ({
  toastList: new Set(),
  show(toastId) {
    const { toastList } = get();
    const newToastList = new Set(toastList);
    newToastList.add(toastId);
    set({
      toastList: newToastList,
    });
  },
  close(toastId) {
    const { toastList } = get();
    const newToastList = new Set(toastList);
    newToastList.delete(toastId);
    set({
      toastList: newToastList,
    });
  },
  closeAll() {
    const newToastList: Set<number> = new Set();
    set({
      toastList: newToastList,
    });
  },
}));
