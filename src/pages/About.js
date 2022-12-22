import { FaCheckSquare } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import about from '../images/about.png';
import './main.css';

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <div className="container">
          <div className="row align-items-center flex-wrap-reverse">
            <div className="col-md-6">
              <h3 className="display-5 title">About Us</h3>
              <p className="about__description pt-1">
                We are a company that seeks to improve the quality of life of
                our clients, for this we have excellent teachers and dynamic
                classes to help you achieve your best physical condition. Fill
                your life with energy and motivation. Exceed your limits with
                training programs designed by professionals, according to your
                goals. We offer:
              </p>
              <ul className="text-white">
                <li className="pt-1">
                  {' '}
                  <FaCheckSquare className="me-1 about__icon" />
                  How to support your immune system.
                </li>
                <li className="pt-1">
                  {' '}
                  <FaCheckSquare className="me-1 about__icon" />
                  An exercise guide.
                </li>
                <li className="pt-1">
                  {' '}
                  <FaCheckSquare className="me-1 about__icon" />
                  Drinks and meals with a high protein content.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={about} className="w-100 mt-5 pt-4" alt="About FITUS" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
