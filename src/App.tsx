import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Loading from "./components/layout/Loading";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const HomePage = React.lazy(() => import("@/pages/HomePage"));
const SignupPage = React.lazy(() => import("@/pages/SignupPage"));
const BoardListPage = React.lazy(() => import("@/pages/BoardListPage"));
const BoardDetailPage = React.lazy(() => import("@/pages/BoardDetailPage"));
const BoardEditorPage = React.lazy(() => import("@/pages/BoardEditorPage"));

const queryClient = new QueryClient();

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/Board/List" element={<BoardListPage />} />
      <Route path="/Board/Detail/:id" element={<BoardDetailPage />} />
      <Route path="/Board/Write" element={<BoardEditorPage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Suspense fallback={<Loading />}>
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </Suspense>
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
