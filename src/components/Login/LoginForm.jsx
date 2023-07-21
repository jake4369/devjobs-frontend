import { login } from "./../../utils/api";

import BlueButton from "../Shared/BlueButton";

const LoginForm = ({ loginDetails, setLoginDetails, setRegister }) => {
  const handleChange = (e) => {
    setLoginDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Attempt to log in and get the token
      const token = await login(loginDetails.email, loginDetails.password);

      if (token) {
        // Redirect to the specified URL
        window.location.href = "http://localhost:5173/jobs";
      } else {
        // Handle login failure, show an error message, etc.
        console.log("Login failed. Please check your credentials.");
      }

      setLoginDetails({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login errors here or show a generic error message.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>
        Email:
        <input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          value={loginDetails.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginDetails.password}
          onChange={handleChange}
        />
      </label>

      <BlueButton btnClass="login-btn">Login In</BlueButton>

      <span>
        Don't have an account? Register{" "}
        <span className="register-link" onClick={() => setRegister(true)}>
          here
        </span>
      </span>
    </form>
  );
};

export default LoginForm;
