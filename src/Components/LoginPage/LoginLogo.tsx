import DarkLogo from "./../../assets/connection.svg";
import LightLogo from "./../../assets/connection-light.svg";
type darkThemeType = {
  darkTheme: boolean;
};
const LoginLogo = ({ darkTheme }: darkThemeType) => {
  return (
    <div className="image-container container">
      <img src={darkTheme ? LightLogo : DarkLogo} className="logo" alt="logo" />
      <p className={`description ${darkTheme ? "text-white" : "text-black"}`}>
        "PureLink offers a seamless social experience with essential features
        such as user profiles, post creation, interactive feeds, and messaging,
        all presented in a minimalist design, ensuring a clutter-free
        environment for genuine connections and pure content sharing."
      </p>
    </div>
  );
};

export default LoginLogo;
