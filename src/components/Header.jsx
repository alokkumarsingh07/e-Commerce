import { Link, NavLink } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <header
      id="header"
      // style={{
      //   display: "flex",
      //   justifyContent: "space-around",
      //   alignItems: "center",
      //   // listStyle: "none",
      //   // textDecoration: "none"
      // }}
    >
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
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
