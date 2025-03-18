import Header from "./components/Header";
import Footer from "./components/Footer";

function Services() {
    return (
        <div className="page">
            <Header />

            <main className="services-content">
                <section className="services-section">
                    <h1>Our Services</h1>
                    <p>We offer a range of high-quality services tailored to your needs.</p>

                    <div className="services-grid">
                        <div className="service-item">
                            <img src="https://via.placeholder.com/100" alt="Service 1" />
                            <h2>Service One</h2>
                            <p>High-quality solutions to help your business grow.</p>
                        </div>
                        <div className="service-item">
                            <img src="https://via.placeholder.com/100" alt="Service 2" />
                            <h2>Service Two</h2>
                            <p>Innovative strategies for success and efficiency.</p>
                        </div>
                        <div className="service-item">
                            <img src="https://via.placeholder.com/100" alt="Service 3" />
                            <h2>Service Three</h2>
                            <p>Expert guidance to enhance your workflow.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Services;