const Home = () => {
    return (
        <div>
            <div className="hero-img"></div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={require("./images/amanda-marie-LCJ9iOli-uE-unsplash_11zon.webp")} alt="our philosophy" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3>Our Philosophy</h3>
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
                </div>
            </section>
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>OUR SERVICES</h3>
                            <ul>
                                <li>Architectural Design</li>
                                <li>Structural (RCC & PEB) Designs</li>
                                <li>MEP services</li>
                                <li>Landscape Architecture</li>
                                <li>Interior Design</li>
                                <li>Valuation, Charted Engineers</li>
                                <li>Construction</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h3>TRAINING COURSES</h3>
                            <ul>
                                <li>AUTOCAD</li>
                                <li>REVIT</li>
                                <li>ETABS</li>
                                <li>STAAD PRO</li>
                                <li>SKETCH UP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;