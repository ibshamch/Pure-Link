import "../LoginPage/LoginPageStyles.css";
import { useContext } from "react";
import ThemeContext from "../../services/ThemeContext";
import LoginForm from "./LoginForm";
import LoginOR from "./LoginOR";
import SocialMediaLinks from "./SocialMediaLinks";
import LoginLogo from "./LoginLogo";
import { motion } from "framer-motion";
const LoginPage = () => {
  const [darkTheme] = useContext(ThemeContext);
  
  return (
    <motion.section
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="main-container"
    >
      <LoginLogo darkTheme={darkTheme} />

      <div className="container moto-container">
        <p className={`moto-text ${darkTheme ? "text-white" : "text-black"}`}>
          "Connecting Simply, Sharing Purely."
        </p>
        <SocialMediaLinks darkTheme={darkTheme} />
        <LoginOR darkTheme={darkTheme} />
        <LoginForm />
      </div>
    </motion.section>
  );
};

export default LoginPage;
