import { useState } from "react";
import API from "../services/api";
import "./Auth.css";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const submit = async e => {
    e.preventDefault();
    await API.post("/auth/register", {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    });
    window.location = "/";
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Account</h2>
        <h4>Smart_JOB_community</h4>
        <form onSubmit={submit}>
          <div className="input-group">
            <input name="name" placeholder="Full Name" required />
          </div>

          <div className="input-group">
            <input name="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button>Register</button>
        </form>

        <div className="link">
          <a href="/">Back to Login</a>
        </div>
      </div>
    </div>
  );
}
