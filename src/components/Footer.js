import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { IoPersonOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io5";
const Footer = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5F5DC" fill-opacity="1" d="M0,192L80,170.7C160,149,320,107,480,128C640,149,800,235,960,256C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="footer" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/" className="footer-logo">
                                <img src={require('../pages/images/logo.png')} alt="logo" className="img-fluid" />
                            </Link>
                            <div className="info">
                                <p><IoPersonOutline />Krishna Sai</p>
                                <p><SlLocationPin />Proddatur, 516360</p>
                                <p><GoMail />mylaruinfra@gmail.com</p>
                                <p><FiPhone />+(91) 7207209227</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>Quick Links</h3>
                            <ul className="list-styled">
                                <li>Home</li>
                                <li>About us</li>
                                <li>Services</li>
                                <li>Courses</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Follow us</h3>
                            <div className="social-links">
                                <a href="#" target="_blank"><IoLogoWhatsapp size={30} color="#333333" /></a>
                                <a href="#" target="_blank"><IoLogoInstagram size={30} color="#333333" /></a>
                                <a href="#" target="_blank"><IoLogoLinkedin size={30} color="#333333" /></a>
                                <a href="#" target="_blank"><IoLogoFacebook size={30} color="#333333" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;