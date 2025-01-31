import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(password);
      navigate("/");
    } catch (err) {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Medialab AI Tools</h1>
      <p>Please enter the password to access the tools hub.</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        <button type="submit">Access Tools</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
