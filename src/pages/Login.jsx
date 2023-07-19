import { useState } from "react";

import LoginForm from "../components/Login/LoginForm";
import RegisterationForm from "../components/Login/RegisterationForm";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [registrationDetails, setRegistrationDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    role: "",
  });

  const [register, setRegister] = useState(false);

  return (
    <div className="login-page">
      <h1>
        {!register
          ? "Log in to discover you dream dev job"
          : "Register with devjobs"}
      </h1>

      {!register ? (
        <LoginForm
          loginDetails={loginDetails}
          setLoginDetails={setLoginDetails}
          setRegister={setRegister}
        />
      ) : (
        <RegisterationForm
          registrationDetails={registrationDetails}
          setRegistrationDetails={setRegistrationDetails}
        />
      )}
    </div>
  );
};

export default Login;
