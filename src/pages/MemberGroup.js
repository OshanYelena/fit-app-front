import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { createGroups } from "../actions/instructor";
import "./main.css";

const MeberGroup = ({ setAlert, createGroups, isAuthenticated }) => {
  const [verify, setVerify] = useState();
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    group: "",
  });

  const { email, group } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    createGroups({
      group,
      email,
    });
    setForm(false);
    alert("User Added to the group")
  };



  return (
    <>
      {" "}
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white me-2">
              <i className="mdi mdi-food"></i>
            </span>
        Add Member Group
          </h3>
        </div>
        <div className="card grid-margin">
          <div className="card-body">
            <h4 className="card-title"></h4>

            {form ? (
              <>
                <button onClick={() => setForm(false)}>Close</button>
              </>
            ) : (
              <>
                <button onClick={() => setForm(true)}>Create a group</button>
              </>
            )}
          </div>
          {form ? (
            <>
              {" "}
              <section className="container-fluid register py-4">
                <div className="container shadow p-5 register__form">
                  <div className="text-center">
                    <Link to="/" className="register__logo">
                      FITUS
                    </Link>
                  </div>
                  <h2 className="fs-4 title my-4 text-center">
                    Add Member to Groups
                  </h2>
                  <form className="row g-5" onSubmit={(e) => onSubmit(e)}>
                    <div className="col-md-6">
                      <label className="form-label fs-5">
                        Member Email Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
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
                        value={group}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className="d-grid gap-2 col-4 mx-auto">
                      <button type="submit" className="btn btn-primary">
                        Add To the Group
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

// Register.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };

const mapStateToProps = (state) => ({
 error : state.instructor.error
});

export default connect(mapStateToProps, {createGroups})(MeberGroup);

//  function data(){

//  }
