import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/"></Link>

          <div>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
