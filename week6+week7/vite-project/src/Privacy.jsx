import Header from './components/Header';
import Footer from './components/Footer';

function Privacy() {
    return (
        <div className="page">
            <Header />

            <main className="privacy-content">
                <section className="privacy-section">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: March 2025</p>

                    <h2>1. Introduction</h2>
                    <p>
                        We value your privacy and are committed to protecting your personal data. 
                        This Privacy Policy outlines how we collect, use, and safeguard your information.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <p>
                        We may collect personal information such as your name, email address, and any 
                        other details you provide when using our services.
                    </p>

                    <h2>3. How We Use Your Information</h2>
                    <p>
                        Your information is used to improve our services, provide customer support, 
                        and enhance user experience. We do not sell or share your data with third parties.
                    </p>

                    <h2>4. Cookies & Tracking</h2>
                    <p>
                        Our website may use cookies to enhance functionality and analyze site traffic. 
                        You can choose to disable cookies in your browser settings.
                    </p>

                    <h2>5. Your Rights</h2>
                    <p>
                        You have the right to access, modify, or delete your personal information. 
                        Contact us if you have any concerns.
                    </p>

                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at 
                        <strong>privacy@ourcompany.com</strong>.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Privacy;
