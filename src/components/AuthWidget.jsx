import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

export default function AuthWidget() {
  const { configured, user, loading, signOut } = useAuth();

  if (!configured || loading) return null;

  if (user) {
    return (
      <div className="site-header-auth">
        <span className="site-header-auth-email">{user.email}</span>
        <button type="button" className="site-header-auth-btn" onClick={() => signOut()}>
          Log out
        </button>
      </div>
    );
  }

  return (
    <Link to="/login" className="site-header-auth-btn">
      Log in
    </Link>
  );
}
