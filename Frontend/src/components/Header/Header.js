import { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import "./Header.css";

function Header() {
  const [toggled, updateToggle] = useState(false);
  console.log("toggled: ", toggled);

  const onClickShowMenu = () => {
    updateToggle((prevState) => !prevState);
  };
  return (
    <div className="header-container">
      <Link to="/" className="logo-link-style">
        <h1 className="title">
          Portf<span className="title-sub">olio</span>
        </h1>
      </Link>

      <div className="screen-nav">
        <Link to="/" className="screen-nav-link">
          <h1 className="screen-nav-link-item">Home</h1>
        </Link>

        <Link to="/about" className="screen-nav-link">
          <h1 className="screen-nav-link-item">About</h1>
        </Link>

        <Link to="/projects" className="screen-nav-link">
          <h1 className="screen-nav-link-item">Projects</h1>
        </Link>

        <Link to="/contact" className="screen-nav-link">
          <h1 className="screen-nav-link-item">Contact</h1>
        </Link>
      </div>

      <div className="mobile-nav">
        <div onClick={onClickShowMenu} aria-hidden="true">
          <Hamburger
            easing="ease-in"
            duration={0.2}
            color="#1e1e30"
            size={22}
          />
        </div>
        {toggled ? (
          <ul className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link">
              <h1 className="screen-nav-link-item">Home</h1>
            </Link>

            <Link to="/about" className="mobile-nav-link">
              <h1 className="screen-nav-link-item">About</h1>
            </Link>

            <Link to="/projects" className="mobile-nav-link">
              <h1 className="screen-nav-link-item">Projects</h1>
            </Link>

            <Link to="/contact" className="mobile-nav-link">
              <h1 className="screen-nav-link-item">Contact</h1>
            </Link>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Header;
