import "../LoginPage/LoginPageStyles.css";
import DarkLogo from "./../../assets/connection.svg";
import LightLogo from "./../../assets/connection-light.svg";
import AppleLight from "../../assets/Loginpage/apple-light.svg";
import Apple from "../../assets/Loginpage/apple.svg";
import Twitter from "../../assets/Loginpage/twitter.svg";
import Google from "../../assets/Loginpage/google.svg";
import { useContext } from "react";
import ThemeContext from "../../services/ThemeContext";

const LoginPage = () => {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <section>
      <div className="image-container container">
        <img
          src={darkTheme ? LightLogo : DarkLogo}
          className="logo"
          alt="logo"
        />
        <p className="description">Desc</p>
      </div>
      {/*  */}

      <div className="container moto-container">
        <p className="moto-text" hidden>
          Moto
        </p>

        <nav className="sign-in-with-social-media">
          <div
            className={`social-media ${
              darkTheme ? "border-blue-400" : "border-gray-200"
            }`}
          >
            <img
              src={Google}
              alt="social-media-link"
              className="social-media-link google"
            />
          </div>
          <div
            className={`social-media ${
              darkTheme ? "border-blue-400" : "border-gray-200"
            }`}
          >
            <img
              src={darkTheme ? AppleLight : Apple}
              alt="social-media-link"
              className="social-media-link apple"
            />
          </div>
          <div
            className={`social-media ${
              darkTheme ? "border-blue-400" : "border-gray-200"
            }`}
          >
            <img
              src={Twitter}
              alt="social-media-link"
              className="social-media-link twitter"
            />
          </div>
        </nav>
        {/*  */}
        <div className="or-container">
          <div
            className={`horizontal-line ${
              darkTheme ? "border-blue-400" : "border-gray-200"
            }`}
          ></div>
          <p className={`or-text ${darkTheme ? "text-white" : "text-black"}`}>
            OR
          </p>
          <div
            className={`horizontal-line ${
              darkTheme ? "border-blue-400" : "border-gray-200"
            }`}
          ></div>
        </div>
        {/*  */}

        <form className="form">
          <label className="label" htmlFor="username">
            <input
              className="user-input"
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter Username"
            />
          </label>

          <label className="label" htmlFor="password">
            <input
              className="user-input"
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter Password"
            />
          </label>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
