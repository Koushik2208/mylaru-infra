import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={require('../pages/images/logo.png')} alt="logo" className="img-fluid" />
                </Link>
                <ul className="navbar-links">
                    <li>
                        <a href="#about-us">About Us</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#training">Courses</a>
                    </li>
                    <li>
                        <a href="#footer">Contact Us</a>
                    </li>
                </ul>

                <img src={require('./images/menu.webp')} className="toggler" alt="toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" />

                <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul className="mobile-links">
                            <li data-bs-dismiss="offcanvas">
                                <a href="#about-us">About Us</a>
                            </li>
                            <li data-bs-dismiss="offcanvas">
                                <a href="#services">Services</a>
                            </li>
                            <li data-bs-dismiss="offcanvas">
                                <a href="#training">Courses</a>
                            </li>
                            <li data-bs-dismiss="offcanvas">
                                <a href="#contact-us">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;