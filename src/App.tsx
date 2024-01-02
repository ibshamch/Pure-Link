import ThemeContext from "./services/ThemeContext.jsx";
import Homepage from "./Components/Homepage.tsx";
import { useState } from "react";
import Navigation from "./Components/Navigation.tsx";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
      <div
        className={`main-container-app ${
          darkTheme ? "bg-black" : "bg-white"
        } min-h-screen`}
      >
        <Navigation />
        <Homepage />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
