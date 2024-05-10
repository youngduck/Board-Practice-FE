import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth-store";

const PrivateRoute = () => {
  const isAuthenticated = useAuthStore((state) => !!state.user.name);

  if (!isAuthenticated) {
    alert("로그인이 필요한 기능입니다.");
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
