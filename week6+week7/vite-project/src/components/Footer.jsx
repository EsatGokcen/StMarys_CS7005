import { Link } from 'react-router-dom'
import facebookIcon from '../assets/facebook_icon.png'
import twitterIcon from '../assets/twitter_icon.png'
import instagramIcon from '../assets/instagram_icon.png'

function Footer() {
    return (
        <small>
            <h3 class="FooterTitle">Contact Us</h3>
            
            <p class="FooterP">
                If you would like to contact us, visit our 
                <Link to="/contact">Contact Us</Link> page.
            </p>
        
            <div class="footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
            </div>
        
            <div class="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook"/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter"/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
        
            <p class="FooterP">&copy; 2025 My React Website</p>
        </small>
    )
}

export default Footer;