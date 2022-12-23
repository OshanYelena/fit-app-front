import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./main.css";
import { createExercies } from "../actions/instructor";

const Exercies = ({ setAlert, createExercies, stateUp }) => {
  const [formData, setFormData] = useState({
    bodyPart: "",
    equipment: "",
    group:"",
    gifUrl: "",
    id: "",
    name: "",
    target: "",
  });

  const {
    bodyPart,
    equipment,
    gifUrl,
    group,
    name,
    target,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const [rdrct, setRedict] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
 
    createExercies({
        bodyPart,
        group,
        equipment,
        gifUrl,
        name,
        target,
    }) 
    setRedict(true);
}
  if (rdrct) {
    return <Redirect to="/exercises" />;
  }

  return (
    <>
      {" "}
      <section className="container-fluid register py-4">
        <div className="container shadow p-5 register__form">
          <div className="text-center">
            <Link to="/" className="register__logo">
              FITUS
            </Link>
          </div>
          <h2 className="fs-4 title my-4 text-center">Create New Exercise</h2>
          <form className="row g-5" onSubmit={(e) => onSubmit(e)}>
            <div className="col-md-6">
              <label className="form-label fs-5">Exercise Name</label>
              <input
                type="text"
                className="form-control"
                name="name"

                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Group No</label>
              <input
                type="text"
                className="form-control"
                name="group"
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Body Part</label>
              <input
                type="text"
                className="form-control"
                name="bodyPart"
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Equipment</label>
              <input
                type="text"
                className="form-control"
                name="equipment"
       
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">GifUrl</label>
              <input
                type="text"
                className="form-control"
                name="gifUrl"
   
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Target Body Part</label>
              <input
                type="text"
                className="form-control"
                name="target"
           
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="d-grid gap-2 col-4 mx-auto">
              <button type="submit" className="btn btn-primary">
                Create New Exercise
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

Exercies.propTypes = {
  setAlert: PropTypes.func.isRequired,
  createExercies: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  stateUp: state.instructor.profile,
});

export default connect(mapStateToProps, { createExercies })(Exercies)
