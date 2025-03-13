import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <h1 class="site-title">
                <Link to="/" className="active">My Website</Link>
            </h1>

            <nav role="Navigation">
            <ul id="nav-list">
                <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                    About
                </NavLink>
                </li>
                <li>
                <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
                    Services
                </NavLink>
                </li>
                <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                    Contact
                </NavLink>
                </li>
            </ul>
            </nav>

        </>
    )
}

export default Header