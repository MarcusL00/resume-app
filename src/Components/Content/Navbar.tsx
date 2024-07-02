import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export type navbarLinks = { title: string; route: string }[];

interface NavbarProps {
  links: navbarLinks;
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <div className="navbar">
      <ul className="navbar-content">
        {links.map((link) => (
          <NavLink to={link.route} className="navbar--link">
            <p className="navbar--link__title">{link.title}</p>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
