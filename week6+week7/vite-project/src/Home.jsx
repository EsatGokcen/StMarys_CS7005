import Header from './components/Header'
import Footer from './components/Footer'

function Home() {
    return (
        <div className='page'>
            <Header />

            <main className="home-content">
                <section className="hero">
                    <h1>Welcome to My Website</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse varius enim in eros elementum tristique. Duis 
                        cursus, mi quis viverra ornare, eros dolor interdum nulla, 
                        ut commodo diam libero vitae erat.
                    </p>
                    <button className="cta-button">Learn More</button>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Home