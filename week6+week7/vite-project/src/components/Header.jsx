import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <h1 class="site-title">
                <Link to="/" className="active">My Website</Link>
            </h1>
            <nav role="Navigation">
                <ul id="nav-list">
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header