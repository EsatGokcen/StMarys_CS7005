import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1 className="site-title">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        My Website
                    </NavLink>
                </h1>
                <nav>
                    <ul className="nav-list">
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
            </div>
        </header>
    );
}

export default Header;
