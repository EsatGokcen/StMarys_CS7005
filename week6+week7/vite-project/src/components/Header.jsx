function Header() {
    return (
        <>
            <h1 class="site-title">
                <a href="index.html">My Website</a>
            </h1>  
            <nav role="Navigation">
                <ul id="nav-list">
                    <li><a href="../src/Home.jsx" class="active">Home</a></li>
                    <li><a href="../src/About.jsx">About</a></li>
                    <li><a href="../src/Services.jsx">Services</a></li>
                    <li><a href="../src/Contact.jsx">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header