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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
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
