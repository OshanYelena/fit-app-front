import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getExercises } from "../actions/instructor";


function DashboardExercisesPanel({ getExercises, exerData }) {
  useEffect(() => {
    getExercises();
  }, []);

  return (
    <>
      {exerData ? (
        <>
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                  <i className="mdi mdi-dumbbell"></i>
                </span>
                Exercises
              </h3>
            </div>
            <div className="card grid-margin">
              <div className="card-body">
                <h4 className="card-title"></h4>
                <Link to={"/instructor/exercies/add"}>
                  {" "}
                  Create new Exercies
                </Link>
              </div>
            </div>
            {exerData.map((exercise) => {
              return (
                <div className="card grid-margin">
                  <div className="card-body row">
                    <div className="col">
                      <h4 className="card-title">{exercise.name}</h4>
                      <a>target : {exercise.target}</a>
                      <br />
                      <a>bodypart : {exercise.bodyPart}</a>
                      <br />
                      <a>equipment : {exercise.equipment}</a>
                    </div>
                    <img className="exersice-image col" src={exercise.gifUrl} />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

DashboardExercisesPanel.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  exerData: state.instructor.exer,
});

export default connect(mapStateToProps, { getExercises })(
  DashboardExercisesPanel
);
