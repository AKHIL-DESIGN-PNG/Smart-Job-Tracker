import { useState } from "react";
import API from "../services/api";
import "./Auth.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const submit = async e => {
    e.preventDefault();
    const res = await API.post("/auth/login", {
      email: e.target.email.value,
      password: e.target.password.value
    });
    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Smart Job Tracker</h2>

        <form onSubmit={submit}>
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

          <button>Login</button>
        </form>

        <div className="link">
          <a href="/register">Create an account</a>
        </div>
      </div>
    </div>
  );
}
