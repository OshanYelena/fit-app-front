import { connect } from "react-redux";

import Logo from "../assets/images/logo-temp.png";
import LogoMini from "../assets/images/logo.png";
import {patchInstructorRole} from '../actions/instructor.js'
import { logout } from "../actions/auth.js";
import { Redirect } from "react-router-dom";

const DashboardNavBar = ({ avatar, name,  type,userId, logout, patchInstructorRole }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    logout();
  };

  const onChaneRole = async (index) => {
   if(userId)
    patchInstructorRole(userId._id, index);
    window.location.reload(false);
  };

  return (
    <nav className="navbar navbar-dashboard default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row bg-white">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="../../">
          <img src={Logo} alt="logo" />
        </a>
        {/* <a className="navbar-brand navbar-logo" href="/">FITUS</a> */}
        <a className="navbar-brand brand-logo-mini" href="../../">
          <img src={LogoMini} alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="profileDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="nav-profile-img">
                <img src={avatar} alt="avatar" />
                <span className="availability-status online"></span>
              </div>
              <div className="nav-profile-text">
                <p className="mb-1 text-black">{name}</p>
              </div>
            </a>
            <div
              className="dropdown-menu navbar-dropdown"
              aria-labelledby="profileDropdown"
            >
              <div className="dropdown-item">
                <a className="dropdown-item namefield" href="../profile/">
                  <img className="me-1 avatar dropdown-item" src={avatar} />
                  {name}
                  <br />
                  {/* {role} */}
                </a>
              </div>

              {type && (
                <>
                  {" "}
                  {type === 3 && (
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={ ()=> onChaneRole(4)}
                    >
                      <i className="mdi mdi-login me-2 text-primary"></i> Sign
                      As Admin{" "}
                    </button>
                    
                  )}{" "}
                   {type === 4 && (
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={ ()=> onChaneRole(3)}
                    >
                      <i className="mdi mdi-login me-2 text-primary"></i> Sign
                      As Instructor{" "}
                    </button>
                  )}
                 
                </>
              )}

              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <i className="mdi mdi-cached me-2 text-success"></i> Activity
                Log{" "}
              </a>
              <div className="dropdown-divider"></div>
              <button
                className="dropdown-item"
                type="button"
                onClick={onSubmit}
              >
                <i className="mdi mdi-logout me-2 text-primary"></i> Signout{" "}
              </button>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
};


const mapStateToProps = (state) => ({
  userId: state.auth.user,

});
export default connect(mapStateToProps, { logout, patchInstructorRole })(DashboardNavBar);
