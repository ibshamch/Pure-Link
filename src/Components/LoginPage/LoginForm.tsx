import { useState } from "react";
type DatabaseTypes = {
  username: string;
  password: string;
};
type User = DatabaseTypes[];

const LoginForm = () => {
  const [database] = useState<User>([
    { username: "ibsham", password: "123" },
    { username: "aisham", password: "456" },
    { username: "bobby", password: "789" },
  ]);
  const [userData, setUserData] = useState<DatabaseTypes>({
    username: "",
    password: "",
  });
  const checkCredentials = (userData: DatabaseTypes) => {
    const user = database.filter((user) => {
      return (
        userData.username.toLowerCase() === user.username.toLowerCase() &&
        String(userData.password) === String(user.password)
      );
    });
    const userFound = user[0] || null;
    if (userFound) {
      console.log("User Found: ", user[0]);
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

        const obj: { username: string; password: string } = {
          username: String(formData.get("username")) || "",
          password: String(formData.get("password")) || "",
        };

        setUserData(obj);
        checkCredentials(userData);
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
