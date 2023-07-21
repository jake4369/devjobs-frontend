import { signUp } from "./../../utils/api";

import BlueButton from "../Shared/BlueButton";

const RegisterationForm = ({ registrationDetails, setRegistrationDetails }) => {
  const handleChange = (e) => {
    setRegistrationDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the signUp function with the form data
      const token = await signUp(
        registrationDetails.name,
        registrationDetails.email,
        registrationDetails.password,
        registrationDetails.passwordConfirm,
        registrationDetails.role
      );

      if (token) {
        // Redirect to the specified URL
        window.location.href = "http://localhost:5173/jobs";
      } else {
        // Handle login failure, show an error message, etc.
        console.log("Login failed. Please check your credentials.");
      }
      // Optionally, you can handle successful registration here (e.g., show a success message).
      console.log("Successfully registered and logged in.");

      // Clear the registration details after successful registration
      setRegistrationDetails({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        role: "",
      });
    } catch (error) {
      // Handle any errors that occurred during registration (e.g., display an error message).
      console.error("Registration failed:", error);
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          placeholder="Full name"
          name="name"
          value={registrationDetails.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          value={registrationDetails.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={registrationDetails.password}
          onChange={handleChange}
        />
      </label>

      <label>
        Confirm password:
        <input
          type="password"
          placeholder="Password"
          name="passwordConfirm"
          value={registrationDetails.passwordConfirm}
          onChange={handleChange}
        />
      </label>

      <label>
        Are you here to:
        <select
          name="role"
          value={registrationDetails.role}
          onChange={handleChange}
        >
          <option value="" disabled>
            ---
          </option>
          <option value="user">Find a job</option>
          <option value="employer">Hire employees</option>
        </select>
      </label>

      <BlueButton btnClass="register-btn">Register</BlueButton>
    </form>
  );
};

export default RegisterationForm;
