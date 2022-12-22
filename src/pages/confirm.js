
// import { Link, Redirect } from "react-router-dom";
// import "./main.css";


// const Verification = () => {
//   <div>
//     <section>
//       <div className="container w-75 my-5 shadow">
//         <div className="row align-items-stretch">
//           <div className="col bg-white">
//             <div className="text-center pt-3">
//               <Link to="/" className="login__logo">
//                 FITUS
//               </Link>
//             </div>
//             <h2 className="fs-4 title text-center py-4">login as a Member</h2>
//             <div className="text-center d-grid gap-2 col-6 mx-auto py-4">
//               <Link to="/register" className="fs-6 login__register">
//                 Create an account
//                 {/* <FaArrowRight className="ps-2 fs-4" /> */}
//               </Link>
//             </div>
//           </div>
//           <div className="col login__bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 login"></div>
//         </div>
//       </div>
//     </section>
//   </div>;
// };

// export default Verification;




import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import './main.css';

const Confirm = ({ login, isAuthenticated }) => {


  return (
    <section>
      <div className="container w-75 my-5  shadow">
        <div className="row align-items-stretch">
          <div className="col bg-white">
            <div className="text-center pt-3">
              <Link to="/" className="login__logo">
                FITUS
              </Link>
            </div>
            <h2 className="fs-4 title text-center py-4">Welcome to FITUS</h2>
            <form >
              <div className="mb-3 py-4">
                <label className="text-center ">We're excited to have you get started. First, you need to confirm your account. Just press the button below.</label>
              </div>

              <div className="text-center d-grid gap-2 col-6 mx-auto py-3">
                <a href="https://www.gmail.com">
                <button type='button' className="btn login__btn btn-primary">
                  check your gmail
                </button>
                </a>
              </div>
            </form>
          </div>
          <div className="col login__bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 login"></div>
        </div>
      </div>
    </section>
  );
};



export default Confirm;
