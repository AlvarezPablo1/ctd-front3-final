import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { removeTokenFromStorage } from "./utils/localStorage.service";
import styles from "./modules/Navbar.module.css";

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme, login, setLogout } =
    useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const changeTheme = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };

  const logout = () => {
    setLogout();
    removeTokenFromStorage();
  };

  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm ${
          isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
            DH Odonto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/favs">
                  Favs
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                {login ? (
                  <button
                    onClick={() => logout()}
                    className={`btn btn-${isDarkMode ? "dark" : "light"}`}
                  >
                    Logout
                  </button>
                ) : (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
              <li className={`nav-item`}>
                <button
                  className={`btn btn-${isDarkMode ? "light" : "dark"} ${
                    styles.btnStyle
                  }`}
                  onClick={changeTheme}
                >
                  {isDarkMode ? "☀" : "🌙"}{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
