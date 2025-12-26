const ErrorPresenterCommon = ({ message, onRetry }) => {
  return (
    <div>
      <div style={{ color: "red" }}>{message}</div>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
};

export default ErrorPresenterCommon;
