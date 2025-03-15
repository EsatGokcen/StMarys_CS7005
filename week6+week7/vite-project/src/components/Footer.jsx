import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebook_icon.png';
import twitterIcon from '../assets/twitter_icon.png';
import instagramIcon from '../assets/instagram_icon.png';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <h3 className="FooterTitle">Contact Us</h3>

                <p className="FooterP">
                    If you would like to contact us, visit our 
                    <Link to="/contact" className="footer-link"> Contact Us</Link> page.
                </p>

                <div className="footer-links">
                    <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                    <span>|</span>
                    <Link to="/terms" className="footer-link">Terms of Service</Link>
                </div>

                <div className="footer-social">
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

                <p className="FooterP">&copy; 2025 My React Website</p>
            </div>
        </footer>
    );
}

export default Footer;
