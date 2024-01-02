type darkThemeType = {
  darkTheme: boolean;
};

const LoginOR = ({ darkTheme }: darkThemeType) => {
  return (
    <div className="or-container">
      <div
        className={`horizontal-line ${
          darkTheme ? "border-white" : "border-gray-200"
        }`}
      ></div>
      <p className={`or-text ${darkTheme ? "text-white" : "text-black"}`}>OR</p>
      <div
        className={`horizontal-line ${
          darkTheme ? "border-white" : "border-gray-200"
        }`}
      ></div>
    </div>
  );
};

export default LoginOR;
