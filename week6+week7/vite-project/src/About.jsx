import Header from "./components/Header";
import Footer from "./components/Footer";
import ToggleVisibility from "./components/ToggleVisibility";

function About() {
    return (
        <div className="page">
            <Header />

            <main className="about-content">
                <section className="about-section">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Praesent commodo cursus magna, vel scelerisque nisl 
                        consectetur et. Curabitur blandit tempus porttitor.
                    </p>
                    <p>
                        Our mission is to provide top-quality services and create 
                        innovative solutions for our clients. With a passionate team 
                        and a commitment to excellence, we strive to make a 
                        difference in everything we do.
                    </p>
                    <img 
                        src="https://via.placeholder.com/600x300" 
                        alt="About Us" 
                        className="about-image"
                    />
                </section>
            </main>

            <ToggleVisibility />
            <Footer />
        </div>
    );
}

export default About