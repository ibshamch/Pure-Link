import ThemeContext from "./services/ThemeContext.jsx";
import Homepage from "./Components/Homepage/Homepage.tsx";
import { useState } from "react";
import Navigation from "./Components/Navigation.tsx";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage.tsx";
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
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
