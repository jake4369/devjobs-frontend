import BlueButton from "../Shared/BlueButton";

const CompanyRegistrationForm = ({ registrationDetails, handleChange }) => {
  console.log(registrationDetails);
  return (
    <div className="company-registration-form">
      <label>
        Company Name:
        <input
          type="text"
          placeholder="Company"
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

      <BlueButton btnClass="register-btn">Register</BlueButton>
    </div>
  );
};

export default CompanyRegistrationForm;
