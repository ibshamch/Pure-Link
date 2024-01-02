import BlackLogo from "./../../assets/connection.svg";
import LightLogo from "./../../assets/connection-light.svg";
import ThemeContext from "../../services/ThemeContext.jsx";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Homepage = (): JSX.Element => {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <section
      className={`${
        darkTheme ? "text-white" : "text-black"
      }  lg:flex lg:flex-col lg:justify-center   `}
    >
      <div className="flex flex-col justify-between lg:flex-row ">
        <div
          className={`logo-container flex flex-col gap-8 p-12  lg:basis-1/2 lg:border-r-2 ${
            darkTheme ? "border-gray-700" : "border-black"
          }`}
        >
          <motion.img
            initial={{ x: -200 }} // Initial position is 100 pixels above
            animate={{ x: 0 }} // Animation moves it to the final position (y: 0)
            transition={{ duration: 1 }} // Duration of the animation
            className="w-60 my-0 mx-auto mt-12"
            src={darkTheme ? LightLogo : BlackLogo}
            alt="logo"
          />

          <h1 className="hidden lg:block text-center text-4xl font-Poppin font-bold">
            PureLink
          </h1>
          <p className="w-9/12 my-0 mx-auto  hidden lg:block font-Poppin font-extralight">
            PureLink is a minimalist social media platform designed for
            straightforward connections and pure content sharing. Stripping away
            the complexities, PureLink fosters a clean and uncluttered space
            where users effortlessly link up, communicate, and share their
            moments with authenticity and simplicity. Embrace a digital
            environment that values the essence of genuine connections and
            unfiltered expression.
          </p>
        </div>
        <section className="moto-section self-center lg:basis-1/2">
          <div className="flex flex-col lg:justify-center gap-8">
            <main className="moto  text-center ">
              <p className="text-2xl font-Poppin font-thin">
                "Connecting Simply, Sharing Purely."
              </p>
            </main>
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="btn-container mt-5 text-center"
            >
              <Link
                to="/login"
                className="get-started  hover:bg-blue-800 text-white bg-blue-500 self-center py-3 px-12 rounded-full"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Homepage;
