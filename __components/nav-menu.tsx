const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Service", href: "#service" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Portfolios", href: "#portfolios" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const NavMenu = () => {
  const renderedNavItems = navItems.map((navItem) => (
    <li key={navItem.name}>
      <a className="text-tertiary text-lg">{navItem.name}</a>
    </li>
  ));

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Hasibur Rahman</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{renderedNavItems}</ul>
      </div>
    </nav>
  );
};

export default NavMenu;
