import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../actions/auth";
import "./main.css";
import { userConfirm } from "../actions/auth";

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/",
});

export const MemberActivation  = function () {
  const id = useParams();
  const [success, setSuccess] = useState(false);
  const verify = async (token) => {
 
      console.log("hello");
      const res = await api.post(`/member/activation/${token}`);
      console.log("data",res)
      if (res.data.msg === "Account has been activated") {
        setSuccess(true);
      }
  };

  useState(() => {
    const token = id.token;
    verify(token);

  }, []);

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
            <form>
              {success ? (
                <>
                  {" "}
                  <div className="mb-3 py-4">
                    <label className="text-center ">
                      Email Verification Completed.
                    </label>
                  </div>
                  <div className="text-center d-grid gap-2 col-6 mx-auto py-3">
                    <a href="/login">
                      <button
                        type="button"
                        className="btn login__btn btn-primary"
                      >
                        Login here
                      </button>
                    </a>
                  </div>
                </>
              ) : (
                <><>
                {" "}
                <div className="mb-3 py-4">
                  <label className="text-center ">
                    Email Verification Failed.
                  </label>
                </div>
                <div className="text-center d-grid gap-2 col-6 mx-auto py-3">
                  <a href="/">
                    <button
                      type="button"
                      className="btn login__btn btn-primary"
                    >
                      Check again later
                    </button>
                  </a>
                </div>
              </></>
              )}
            </form>
          </div>
          <div className="col login__bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 login"></div>
        </div>
      </div>
    </section>
  );
}

export const InstructorActivation  = function () {
  const id = useParams();
  const [success, setSuccess] = useState(false);
  const verify = async (token) => {
    try {
     
      const res = await api.post(`/instructor/activation/${token}`);
      if (res.data.msg === "Account has been activated") {
        setSuccess(true);
      }
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(err);
    }
  };

  useState(() => {
    const token = id.token;
    verify(token);
  }, []);

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
            <form>
              {success ? (
                <>
                  {" "}
                  <div className="mb-3 py-4">
                    <label className="text-center ">
                      Email Verification Completed.
                    </label>
                  </div>
                  <div className="text-center d-grid gap-2 col-6 mx-auto py-3">
                    <a href="/login">
                      <button
                        type="button"
                        className="btn login__btn btn-primary"
                      >
                        Login here
                      </button>
                    </a>
                  </div>
                </>
              ) : (
                <><>
                {" "}
                <div className="mb-3 py-4">
                  <label className="text-center ">
                    Email Verification Failed.
                  </label>
                </div>
                <div className="text-center d-grid gap-2 col-6 mx-auto py-3">
                  <a href="/">
                    <button
                      type="button"
                      className="btn login__btn btn-primary"
                    >
                      Check again later
                    </button>
                  </a>
                </div>
              </></>
              )}
            </form>
          </div>
          <div className="col login__bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 login"></div>
        </div>
      </div>
    </section>
  );
}
