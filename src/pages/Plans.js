import { FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Plans = () => {
  return (
    <section className="container my-5 py-5">
      <div className="text-center mb-3">
        <span className="title">choose a plan</span>
        <h3 className="text-white">Find a perfect plan</h3>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                2500<small className="text-muted fw-light">/LKR</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Personal trainer
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  classes per week
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  access to the gymnasium
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaTimes className="me-1 plans__icon" />
                  protein powder
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaTimes className="me-1 plans__icon" />
                  personalized sessions
                </li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Choose the plan
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Standard</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                5000<small className="text-muted fw-light">/LKR</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Personal trainer
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  classes per week
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  access to the gymnasium
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  protein powder
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaTimes className="me-1 plans__icon" />
                  personalized sessions
                </li>
              </ul>
              <Link to={"/dashboard"}>
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Choose the plan
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Premium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                7500<small className="text-muted fw-light">/LKR</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Personal trainer
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  classes per week
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  access to the gymnasium
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  protein powder
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  personalized sessions
                </li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Choose the plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
