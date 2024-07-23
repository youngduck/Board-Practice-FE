import LoginForm from "@/components/login/LoginForm";
import TodoList from "@/components/json-test/TodoList";
import AlbumList from "@/components/json-test/AlbumList";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import Loading from "@/shared/layout/Loading";
import ErrorFallback from "@/components/json-test/ErrorFallback";

import { QueryErrorResetBoundary } from "@tanstack/react-query";

const HomePage = () => {
  console.log("홈페이지렌더링", Date.now());
  return (
    <main className="w-full h-auto">
      <section className="flex w-[1200px] h-auto mx-auto m-2">
        <div className="flex-center-row-column shrink-0 m-2 w-[250px] h-[300px] border-2 border-medium-orange rounded-b-lg">
          <LoginForm />
        </div>
        <div className="h-full w-full border-2 m-2 border-medium-orange">
          <TodoList />
        </div>
      </section>
      <section className="flex w-[1200px] h-auto mx-auto my-2">
        <div className="h-[full] w-full border-2 m-2 border-medium-orange">
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
                <Suspense fallback={<Loading />}>
                  <AlbumList />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
