import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./main.css";
import { register } from "../actions/auth";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [verify, setVerify] = useState();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    height: "",
    weight: "",
    address: "",
    occupation: "",
    dob: "",
    gender: "",
  });

  const {
    name,
    lastname,
    email,
    phone,
    password,
    password2,
    height,
    weight,
    address,
    dob,
    gender,
    occupation,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Password do not match", "danger");
    } else {
      register({
        name,
        lastname,
        email,
        phone,
        password,
        height,
        weight,
        address,
        occupation,
        dob,
        gender,
      });
      setVerify(true);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  if (verify) {
    return <Redirect to="/user/verification" />;
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
          <h2 className="fs-4 title my-4 text-center">Register as a Member</h2>
          <form className="row g-5" onSubmit={(e) => onSubmit(e)}>
            <div className="col-md-6">
              <label className="form-label fs-5">First Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={phone}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minlenght="6"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                value={password2}
                onChange={(e) => onChange(e)}
                minlenght="6"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Height(cm)</label>
              <input
                type="tel"
                className="form-control"
                name="height"
                value={height}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Weight(kg)</label>
              <input
                type="text"
                className="form-control"
                name="weight"
                value={weight}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={address}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Occupation</label>
              <input
                type="text"
                className="form-control"
                name="occupation"
                value={occupation}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dob"
                value={dob}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5">Gender</label>
              <input
                type="gender"
                className="form-control"
                name="gender"
                value={gender}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className="d-grid gap-2 col-4 mx-auto">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
