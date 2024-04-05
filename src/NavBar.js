import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar({ snacks }) {
  return (
    <nav className="NavBar">
        <NavLink to="/">home</NavLink>
        {snacks.map(snack => (
            <NavLink to={`/${snack}`}>{snack}</NavLink>
        ))}
    </nav>
  );
}

export default NavBar;