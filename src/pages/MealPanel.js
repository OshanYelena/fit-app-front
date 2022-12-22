import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getMeals } from "../actions/instructor";

function DashboardMealPlansPanel({ getMeals, meals }) {
  useEffect(() => {
    getMeals();
  }, []);
  console.log(meals)

  return (
    <>
      {meals ? (
        
        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">
              <span className="page-title-icon bg-gradient-primary text-white me-2">
                <i className="mdi mdi-food"></i>
              </span>
              Meal Plans
            </h3>
          </div>
          <div className="card grid-margin">
            <div className="card-body">
              <h4 className="card-title"></h4>
              <Link to={"/instructor/meal-plan/add"}>
                {" "}
                Create new meal plan
              </Link>
            </div>
          </div>
          <div>
            {meals.map(
              (
                data
              ) => {
                {console.log(data)}
                return (
                  <div className="card grid-margin">
                    <div className="card-body">
                      <h4 className="card-title">Available meal plans</h4>
                      <div className="grid-margin">
                        <table
                          className="table table-bordered"
                          id="mealPlansTable"
                        >
                          <thead>
                            <tr>
                              <th colSpan={7}>
                                <h3 className="text-center">
                                 {data.mealName}
                                </h3>
                              </th>
                            </tr>
                            <tr>
                              <th scope="col">Monday</th>
                              <th scope="col">Tuesday</th>
                              <th scope="col">Wednesday</th>
                              <th scope="col">Thursaday</th>
                              <th scope="col">Friday</th>
                              <th scope="col">Saturady</th>
                              <th scope="col">Sunday</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {data.mondayPlan && (
                                <>
                                  {" "}
                                  
                                      <th className="p-1">
                                        <ul className="p-0">
                                        {data.mondayPlan.map((data) => {
                                    return (
                                        <li>{data.name}</li>
                                        );
                                    })}
                                        </ul>
                                      </th>
                                
                                </>
                              )}
                                     {data.tuesdayPlan && (
                                <>
                                  {" "}
                                  
                                      <th className="p-1">
                                        <ul className="p-0">
                                        {data.tuesdayPlan.map((data) => {
                                    return (
                                        <li>{data.name}</li>
                                        );
                                    })}
                                        </ul>
                                      </th>
                                
                                </>
                              )}
                                 {data.wednesdayPlan && (
                                <>
                                  {" "}
                                  
                                      <th className="p-1">
                                        <ul className="p-0">
                                        {data.wednesdayPlan.map((data) => {
                                    return (
                                        <li>{data.name}</li>
                                        );
                                    })}
                                        </ul>
                                      </th>
                                
                                </>
                              )}
                                 {data.thursdayPlan && (
                                <>
                                  {" "}
                                  
                                      <th className="p-1">
                                        <ul className="p-0">
                                        {data.thursdayPlan.map((data) => {
                                    return (
                                        <li>{data.name}</li>
                                        );
                                    })}
                                        </ul>
                                      </th>
                                
                                </>
                              )}
                                 {data.fridayPlan && (
                                <>
                                  {" "}
                                  
                                      <th className="p-1">
                                        <ul className="p-0">
                                        {data.fridayPlan.map((data) => {
                                    return (
                                        <li>{data.name}</li>
                                        );
                                    })}
                                        </ul>
                                      </th>
                                
                                </>
                              )}
                                 {data.saturdayPlan && (
                                <>
                                  {" "}
                                  
                                      <th className="p-1">
                                        <ul className="p-0">
                                        {data.saturdayPlan.map((data) => {
                                    return (
                                        <li>{data.name}</li>
                                        );
                                    })}
                                        </ul>
                                      </th>
                                
                                </>
                              )}
                              {data.sundayPlan && (
                                <>
                                  {" "}
                                  
                                      <th className="p-1">
                                        <ul className="p-0">
                                        {data.sundayPlan.map((data) => {
                                    return (
                                        <li>{data.name}</li>
                                        );
                                    })}
                                        </ul>
                                      </th>
                                
                                </>
                              )}
                              


               
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

DashboardMealPlansPanel.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  meals: state.instructor.meal,
});

export default connect(mapStateToProps, { getMeals })(DashboardMealPlansPanel);
