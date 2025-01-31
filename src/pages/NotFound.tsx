import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "var(--primary-color)" }}>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "var(--primary-color)",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}
