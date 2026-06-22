import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const token =
    localStorage.getItem("token");

  let role = "";

  if (token) {
    role = JSON.parse(
      atob(token.split(".")[1])
    ).role;
  }

  return (
    <nav>
      <h2>College Discovery</h2>

      <div className="nav-links">

        {location.pathname !==
          "/colleges" && (
          <Link to="/colleges">
            Colleges
          </Link>
        )}

        {location.pathname !==
          "/saved" && (
          <Link to="/saved">
            Saved
          </Link>
        )}

        {role === "admin" &&
          location.pathname !==
            "/add-college" && (
            <Link to="/add-college">
              Add College
            </Link>
          )}

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem(
              "token"
            );

            window.location = "/";
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}