import Header from './components/Header';
import Footer from './components/Footer';

function Terms() {
    return (
        <div className="page">
            <Header />

            <main className="terms-content">
                <section className="terms-section">
                    <h1>Terms & Conditions</h1>
                    <p>Last updated: March 2025</p>

                    <h2>1. Introduction</h2>
                    <p>
                        These Terms & Conditions govern the use of our website and services. 
                        By accessing our website, you agree to comply with these terms.
                    </p>

                    <h2>2. User Responsibilities</h2>
                    <p>
                        Users must provide accurate information, respect other users, and 
                        comply with all applicable laws while using our services.
                    </p>

                    <h2>3. Acceptable Use</h2>
                    <p>
                        You agree not to misuse our platform, engage in illegal activities, 
                        or attempt to compromise our security systems.
                    </p>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        All content on this website, including text, graphics, and logos, 
                        is the property of our company and is protected by copyright laws.
                    </p>

                    <h2>5. Limitation of Liability</h2>
                    <p>
                        We are not responsible for any damages or losses resulting from 
                        the use of our services.
                    </p>

                    <h2>6. Changes to These Terms</h2>
                    <p>
                        We reserve the right to update these terms at any time. 
                        Continued use of our services implies acceptance of the latest version.
                    </p>

                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms & Conditions, 
                        please contact us at <strong>support@ourcompany.com</strong>.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Terms;