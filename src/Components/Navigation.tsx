import Moon from "./../assets/moon.svg";
import Sun from "./../assets/sun.svg";
import { useContext } from "react";
import ThemeContext from "../services/ThemeContext";
const Navigation = (): JSX.Element => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);
  function handleTheme(): void {
    setDarkTheme(!darkTheme);
  }

  return (
    <nav className="flex justify-end">
      <img
        src={darkTheme ? Sun : Moon}
        onClick={handleTheme}
        alt="theme"
        className="theme w-9  mr-4 cursor-pointer mt-5"
      />
    </nav>
  );
};

export default Navigation;
