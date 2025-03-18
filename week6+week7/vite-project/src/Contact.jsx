import Header from './components/Header';
import Footer from './components/Footer';

function Contact() {
    return (
        <div className="page">
            <Header />

            <main className="contact-content">
                <section className="contact-section">
                    <h1>Contact Us</h1>
                    <p>Have any questions? Reach out to us using the form below.</p>

                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>

                        <button type="submit" className="submit-button">Send Message</button>
                    </form>

                    <div className="contact-info">
                        <h2>Our Office</h2>
                        <p>123 Business Street, London, UK</p>
                        <p>Email: contact@ourcompany.com</p>
                        <p>Phone: +44 123 456 789</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Contact;