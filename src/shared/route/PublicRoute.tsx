import { Outlet } from "react-router-dom";
import Header from "@/shared/layout/Header";
import Footer from "@/shared/layout/Footer";

function PublicRoute() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PublicRoute;
