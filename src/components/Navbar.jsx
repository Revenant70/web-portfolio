import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="App fixed">
      <nav className="flex flex-row gap-8 p-6 pl-8">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-serif text-2xl font-medium border-b-2 border-accent1"
              : "font-serif text-2xl font-medium"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-serif text-2xl font-medium border-b-2 border-accent1"
              : "font-serif text-2xl font-medium"
          }
          to="/Projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-serif text-2xl font-medium border-b-2 border-accent1"
              : "font-serif text-2xl font-medium"
          }
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-serif text-2xl font-medium border-b-2 border-accent1"
              : "font-serif text-2xl font-medium"
          }
          to="/Contact"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
