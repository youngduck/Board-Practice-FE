import React from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "@/shared/route/PrivateRoute";
import PublicRoute from "@/shared/route/PublicRoute";
import AdminRoute from "@/shared/route/AdminRoute";

const HomePage = React.lazy(() => import("@/pages/HomePage"));
const SignupPage = React.lazy(() => import("@/pages/SignupPage"));
const BoardListPage = React.lazy(() => import("@/pages/BoardListPage"));
const BoardDetailPage = React.lazy(() => import("@/pages/BoardDetailPage"));
const BoardEditorPage = React.lazy(() => import("@/pages/BoardEditorPage"));
const AdminPage = React.lazy(() => import("@/pages/AdminPage"));

const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Board/List" element={<BoardListPage />} />
        <Route path="/Board/Detail/:boardId" element={<BoardDetailPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/Board/Write" element={<BoardEditorPage />} />
        </Route>
      </Route>
      <Route element={<AdminRoute />}>
        <Route path="/Admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
