import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        בית
      </NavLink>

      {" | "}

      <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        אודות
      </NavLink>

      {" | "}

      <NavLink
        to="/characters"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        דמויות
      </NavLink>
    </div>
  );
}
