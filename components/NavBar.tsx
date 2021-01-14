const NavBar = ({ categories, setCurrentCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">Warehouse</a>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          {/* Navigations between available categories */}
          {categories.map((category: string, index: number) => (
            <li className="nav-item" key={index}>
              <a
                className="nav-link"
                onClick={() => setCurrentCategory(category)}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
