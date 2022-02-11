import React from "react";

const Navbar = () => {
  const [scrollLevel, setScrollLevel] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setScrollLevel(true);
      } else {
        setScrollLevel(false);
      }
    });
    // window.scrollTo(0, 0);
  });
  return (
    <>
      <nav
        className={
          scrollLevel
            ? "navbar navbar-expand-lg navbar-dark layer-blur fixed-top shadow-none"
            : "navbar navbar-expand-lg navbar-dark shadow-none"
        }
        id="navbar"
      >
        <div className="container pt-2 pb-2">
          <a className="navbar-brand fw-bold" href="/">
            Code Space
          </a>
          <hr />
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link fw-bold active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
