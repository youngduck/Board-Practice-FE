export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <>
      {error.message}에러가 발생했습니다!
      <div onClick={resetErrorBoundary}>이전으로</div>
    </>
  );
};

export default ErrorFallback;
