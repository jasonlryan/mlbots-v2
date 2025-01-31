import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Layout() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <div className="app-container">
      <nav className="nav-global">
        <div className="nav-left">
          <Link to="/" className="nav-logo-link">
            <img
              src="/images/medialab-logo.png"
              alt="Medialab Logo"
              className="nav-logo"
            />
          </Link>
          <div className="nav-divider"></div>
          <Link to="/" className="nav-title">
            Tools Index
          </Link>
        </div>
        <div className="nav-links">
          <button onClick={handleLogout} className="nav-button">
            Logout
          </button>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
