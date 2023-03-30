import "./menu.css";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg mx-auto p-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img className="animals-image" src="../assets/animals.png" alt="" />
        </a>
        <div
          className="collapse navbar-collapse menu-items center-style"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-5">
            <li className="nav-item">
              <a
                className="nav-link  home-page-text"
                aria-current="page"
                href="#Home"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link home-page-text" href="#About">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link home-page-text" href="#timeline">
                TIMELINE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link home-page-text" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Menu };
