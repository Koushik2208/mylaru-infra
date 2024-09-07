import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { IoPersonOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io5";
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/" className="footer-logo">Mylaru</Link>
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
                            <li>Projects</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Follow us</h3>
                        <div className="social-links">
                            <a href="#" target="_blank"><IoLogoWhatsapp size={30} /></a>
                            <a href="#" target="_blank"><IoLogoInstagram size={30} /></a>
                            <a href="#" target="_blank"><IoLogoLinkedin size={30} /></a>
                            <a href="#" target="_blank"><IoLogoFacebook size={30} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;