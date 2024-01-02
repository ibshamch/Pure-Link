import { useState } from "react";
import DatabaseData from "../Data/Database/database";
import { useNavigate } from "react-router-dom";
type Post = string;
type DatabaseTypes = {
  username: string;
  password: string;
  posts?: Post[];
  id?: number;
};
type User = DatabaseTypes[];
const LoginForm = () => {
  const [database] = useState<User>(DatabaseData);

  const navigate = useNavigate();
  const checkCredentials = (userData: DatabaseTypes) => {
    const user = database.find((user) => {
      return (
        userData.username.toLowerCase() === user.username.toLowerCase() &&
        String(userData.password) === String(user.password)
      );
    });
    if (user) {
      console.log("User Found: ", user);
      navigate(`/feed/${user.id}`);
    } else {
      console.log("User not found");
    }

    return user;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData: FormData = new FormData(e.target as HTMLFormElement);

        const userCredentials: { username: string; password: string } = {
          username: String(formData.get("username")) || "",
          password: String(formData.get("password")) || "",
        };

        checkCredentials(userCredentials);
      }}
      className="form"
    >
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
  );
};

export default LoginForm;
