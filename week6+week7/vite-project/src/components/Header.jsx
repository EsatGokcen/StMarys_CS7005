function Header() {
    return (
        <>
            <h1 class="site-title">
                <a href="index.html">My Website</a>
            </h1>  
            <nav role="Navigation">
                <ul id="nav-list">
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="gallery.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header