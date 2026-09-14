import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import "./LoginPage.css";

export default function LoginPage() {
  const { configured, user, signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to="/" replace />;

  if (!configured) {
    return (
      <div className="login-page">
        <div className="login-card">
          <h1>Login not configured</h1>
          <p>
            Cloud login isn&apos;t set up for this app yet. Ask the site owner to add
            Supabase credentials.
          </p>
        </div>
      </div>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setInfo("");
    setBusy(true);
    try {
      if (mode === "signIn") {
        await signIn(email, password);
        navigate("/");
      } else {
        await signUp(email, password);
        setInfo("Account created. Check your email to confirm, then sign in.");
        setMode("signIn");
      }
    } catch (err) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>{mode === "signIn" ? "Log in" : "Create an account"}</h1>
        <p className="login-subtitle">Sign in to keep your progress saved across devices.</p>

        <label className="login-field">
          <span>Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </label>

        <label className="login-field">
          <span>Password</span>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === "signIn" ? "current-password" : "new-password"}
          />
        </label>

        {error && <p className="login-error">{error}</p>}
        {info && <p className="login-info">{info}</p>}

        <button type="submit" className="login-submit" disabled={busy}>
          {busy ? "Please wait…" : mode === "signIn" ? "Log in" : "Sign up"}
        </button>

        <button
          type="button"
          className="login-switch"
          onClick={() => {
            setMode(mode === "signIn" ? "signUp" : "signIn");
            setError("");
            setInfo("");
          }}
        >
          {mode === "signIn" ? "Need an account? Sign up" : "Already have an account? Log in"}
        </button>
      </form>
    </div>
  );
}
