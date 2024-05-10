import { useAuthStore } from "@/store/auth-store";

const useCheckRole = (targetId: number | null) => {
  const clientUserId = useAuthStore((state) => state.user.id);
  const clientUserName = useAuthStore((state) => state.user.name);
  const clientRole = useAuthStore((state) => state.user.role);

  const isAuthor = clientUserId === targetId;
  const isAdmin = clientRole === "Admin";

  return { clientUserName, clientRole, isAuthor, isAdmin };
};

export default useCheckRole;
