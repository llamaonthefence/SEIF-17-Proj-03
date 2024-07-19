import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignInForm.css";
import logo from "../../assets/group-assembly.png";
import {
  hashDataWithSaltRounds,
  storeToken,
  getListingIdFromToken,
} from "../../util/security";
import { getSigninDetails, signinUser } from "../../service/users";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      if (!email) setEmailError("Email can't be blank");
      if (!password) setPasswordError("Password can't be blank");

      const formData = { email, password };

      const signinDetails = await getSigninDetails(formData.email);

      const hashedPassword = hashDataWithSaltRounds(
        formData.password,
        signinDetails.salt,
        signinDetails.iterations
      );
      formData.password = hashedPassword;
      console.log(formData);

      const token = await signinUser(formData);

      storeToken(token);

      const listing_id = getListingIdFromToken();

      window.location.href = `/profile/:${listing_id}`;
    } catch (error) {
      console.log(error);
      // display error message to the user?
    }
  }

  return (
    <div className="signin-form">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`input ${emailError ? "input-error" : ""}`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
        />
        {emailError && <div className="error">{emailError}</div>}

        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`input ${passwordError ? "input-error" : ""}`}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
        />
        {passwordError && <div className="error">{passwordError}</div>}

        <p>
          By providing us with your email, you agree to the terms of our{" "}
          <a href="/privacy-policy" style={{ textDecoration: "underline" }}>
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms-of-service" style={{ textDecoration: "underline" }}>
            Terms of Service
          </a>
          .
        </p>

        <p>
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "blue" }}>
            Sign up
          </a>
          .
        </p>

        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default SignInForm;
