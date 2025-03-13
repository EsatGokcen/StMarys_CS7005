function Footer() {
    return (
        <small>
            <h3 class="FooterTitle">Contact Us</h3>
            
            <p class="FooterP">
                If you would like to contact us, visit our 
                <a href="contact.html" class="footer-link">Contact Us</a> page.
            </p>
        
            <div class="footer-links">
                <a href="privacy.html">Privacy Policy</a> |
                <a href="terms.html">Terms of Service</a>
            </div>
        
            <div class="footer-social">
                <a href="https://facebook.com" target="_blank">
                    <img src="assets/facebook_icon.png" alt="Facebook"/>
                </a>
                <a href="https://twitter.com" target="_blank">
                    <img src="assets/twitter_icon.png" alt="Twitter"/>
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img src="assets/instagram_icon.png" alt="Instagram"/>
                </a>
            </div>
        
            <p class="FooterP">&copy; 2025 My React Website</p>
        </small>
    )
}

export default Footer;