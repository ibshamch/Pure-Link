type propTypes = {
  darkTheme: boolean;
};
import AppleLight from "../../assets/Loginpage/apple-light.svg";
import Apple from "../../assets/Loginpage/apple.svg";
import Twitter from "../../assets/Loginpage/twitter.svg";
import Google from "../../assets/Loginpage/google.svg";
const SocialMediaLinks = ({ darkTheme }: propTypes) => {
  return (
    <nav className="sign-in-with-social-media">
      <div
        className={`social-media ${
          darkTheme ? "border-white" : "border-gray-200"
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
          darkTheme ? "border-white" : "border-gray-200"
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
          darkTheme ? "border-white" : "border-gray-200"
        }`}
      >
        <img
          src={Twitter}
          alt="social-media-link"
          className="social-media-link twitter"
        />
      </div>
    </nav>
  );
};

export default SocialMediaLinks;
