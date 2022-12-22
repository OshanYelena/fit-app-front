import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import services1 from '../images/services-1.jpg';
import services2 from '../images/services-2.jpg';
import services3 from '../images/services-3.jpg';
import './main.css';

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="container services my-5">
        <h2 className="display-5 title text-center py-4">Services</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services1}
                  className="card-img-top"
                  alt="Card Services"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">smart training</h5>
                <p className="card-text">
                  Personalized advice on your routine.
                </p>
                <Button title="More Information" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services2}
                  className="card-img-top"
                  alt="Card Services"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">dumbbell area</h5>
                <p className="card-text">Space with lots of dumbbells.</p>
                <Button title="More Information" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="overflow-hidden">
                <img
                  src={services3}
                  className="card-img-top"
                  alt="Card Services"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title title">cardio zone</h5>
                <p className="card-text">
                  Space with different cardio machines.
                </p>
                <Button title="More Information" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
