import LoginForm from "@/components/login/LoginForm";

const HomePage = () => {
  return (
    <main className="w-full h-auto">
      <section className="flex w-[1200px] h-[800px] mx-auto m-2">
        <div className="flex-center-row-column shrink-0 m-2 w-[250px] h-[300px] border-2 border-medium-orange rounded-b-lg">
          <LoginForm />
        </div>
        <div className="h-full w-full border-2 m-2 border-medium-orange flex-center-row-column">
          홈페이지 컨텐츠영역
        </div>
      </section>
      <section className="flex w-[1200px] h-[800px] mx-auto my-2">
        <div className="h-[full] w-full border-2 m-2 border-medium-orange flex-center-row-column">
          하단영역
        </div>
      </section>
    </main>
  );
};

export default HomePage;
