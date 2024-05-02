import { useAuthStore } from "@/store/auth-store";

const LoginForm = () => {
  const { nickname, setNickname } = useAuthStore();
  const abc = () => {
    setNickname("kim");
  };
  return (
    <section>
      {nickname ? (
        <>
          <p>{nickname}님 환영합니다.</p>
          <button onClick={abc}>로그아웃</button>
        </>
      ) : (
        <>
          <div>로그인영역 ID</div>
          <div>로그인영역 PASSWORD</div>
          <button onClick={abc}>로그인</button>
        </>
      )}
    </section>
  );
};

export default LoginForm;
