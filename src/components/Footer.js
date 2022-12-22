import { Link } from 'react-router-dom';
import './main.css';

const Footer = () => {
  return (
    <footer className="footer font-small text-white pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="fs-6">©2022 FITUS. All Right Reserved.</h5>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="fs-6">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Start
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/userguide" className="footer-link">
                  User's Guide
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3 footer__icons"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
