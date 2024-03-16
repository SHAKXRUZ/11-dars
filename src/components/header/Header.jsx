import "./Header.css";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";
const Header = ({ language, setLanguage, setSidebar }) => {
  const [active, setActive] = useState(false);

  function uzFunc(data) {
    localStorage.removeItem("language");
    localStorage.setItem("language", data);
    setLanguage(localStorage.getItem("language"));
    setActive(false);
  }
  function ruFunc(data) {
    localStorage.removeItem("language");
    localStorage.setItem("language", data);
    setLanguage(localStorage.getItem("language"));
    setActive(false);
  }

  return (
    <div className="container">
      <header className="header">
        <Link to="/">LOGO</Link>
        <nav className="navbar">
          <Link to="/" className="navbar_list">
            Bosh sahifa
          </Link>
          <Link to="/leaders" className="navbar_list">
            Shifokorlar
          </Link>
          <Link to="/bulimlar" className="navbar_list">
            Bo'limlar
          </Link>
          <Link to="/yangiliklar" className="navbar_list">
            Yangiliklar
          </Link>
          <Link to="/vacancy" className="navbar_list">
            Bo'sh ish o'rni
          </Link>
          <Link to="/qvp" className="navbar_list">
            QVP
          </Link>
          <Link to="/aloqa" className="navbar_list">
            Aloqa
          </Link>
        </nav>
        <div className="language_content">
          <p onClick={() => setActive(true)} className="language_value">
            {language}
            <TiArrowSortedDown />
          </p>

          {active ? (
            <div className="language_all">
              <button className="language_btn" onClick={() => uzFunc("uz")}>
                Uz
              </button>
              <button className="language_btn" onClick={() => ruFunc("ru")}>
                Ру
              </button>
            </div>
          ) : null}
        </div>

        <CgMenuGridR
          onClick={() => setSidebar(true)}
          className="header_menu_active"
        />
      </header>
    </div>
  );
};

export default Header;
