import { useState } from "react";
const Home = () => {
    const images = [
        require("./images/banner-1.webp"),
        require("./images/banner-2.webp"),
        require("./images/banner-3.webp"),
        require("./images/banner-4.webp")
    ]

    const [serviceImg, setServiceImg] = useState(null);
    return (
        <div>
            <section className="hero-img">
                <div className="hero">
                    <div className="container">
                        <h1>Building Dreams, Crafting Legacies.</h1>
                        <p>Creating spaces where innovation meets craftsmanship, and every structure tells a story.</p>
                        <button>Contact us</button>
                    </div>
                </div>
            </section>
            <section id="about-us">
                <div className="container">
                    <h3>Our Philosophy</h3>
                    <div className="philosophy">
                        <img src={require("./images/our-philosophy.webp")} alt="our philosophy" />
                        <p>
                            Our philosophy centers on the belief that a home is more than just a
                            structure. It's a sanctuary that embodies comfort, beauty and functionality.
                            We are dedicated to creating spaces that meet and exceed our client's
                            expectations through innovative and effective design. Our commitment to
                            excellence ensures that every project is built with the highest quality
                            materials and craftsmanship, fostering environments where people can
                            thrive. We strive to transform architectural dreams into reality, one
                            meticulously designed home at a time.
                        </p>
                    </div>
                </div>
            </section>
            <section id="training">
                <div className="container">
                    <h3>Training Courses</h3>
                    <ul>
                        <li>AUTOCAD</li>
                        <li>REVIT</li>
                        <li>ETABS</li>
                        <li>STAAD PRO</li>
                        <li>SKETCH UP</li>
                    </ul>
                </div>
            </section>
            <section id="services">
                <div className="container">
                    <h3>Our Services</h3>
                    <div className="cards">
                        <div className="service-card">
                            <div className="overlay"></div>
                            <div className="holder">
                                <img src={require('./images/blueprint.webp')} alt="architectural" />
                            </div>
                            <div className="title">Architectural Design</div>
                        </div>
                        <div className="service-card">
                            <div className="overlay"></div>
                            <div className="holder">
                                <img src={require('./images/beam.webp')} alt="structural" />
                            </div>
                            <div className="title">Structural (RCC & PEB) Designs</div>
                        </div>
                        <div className="service-card">
                            <div className="overlay"></div>
                            <div className="holder">
                                <img src={require('./images/wrench.webp')} alt="mep" />
                            </div>
                            <div className="title">MEP services</div>
                        </div>
                        <div className="service-card">
                            <div className="overlay"></div>
                            <div className="holder">
                                <img src={require('./images/park.webp')} alt="landscape" />
                            </div>
                            <div className="title">Landscape Architecture</div>
                        </div>
                        <div className="service-card">
                            <div className="overlay"></div>
                            <div className="holder">
                                <img src={require('./images/furbishing.webp')} alt="interior" />
                            </div>
                            <div className="title">Interior Design</div>
                        </div>
                        <div className="service-card">
                            <div className="overlay"></div>
                            <div className="holder">
                                <img src={require('./images/documentation.webp')} alt="valuation" />
                            </div>
                            <div className="title">Valuation, Charted Engineers</div>
                        </div>
                        <div className="service-card">
                            <div className="overlay"></div>
                            <div className="holder">
                                <img src={require('./images/crane.webp')} alt="construction" />
                            </div>
                            <div className="title">Construction</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;