
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AvatarAdmin from "../assets/images/faces/face3.jpg";
import AvatarInstructor from "../assets/images/faces/face1.jpg";
import AvatarMember from "../assets/images/faces/face2.jpg";

import Circle from "../assets/images/dashboard/circle.svg";

import axios from "axios";
import DashboardNavBar from "./DashboardNavBar";


const api = axios.create({
  baseURL: "http://localhost:5001/",
});
const role = "Member"; // Authentication is not working. Change This To See Other Dashboards ("Admin", "Trainor", "Memeber")

let Avatar;
let name;
if (role == "Admin") {
  Avatar = AvatarAdmin;
  name = "Admin Advantage";
} else if (role == "Trainor") {
  Avatar = AvatarInstructor;
  name = "David Greymaax";
} else {
  Avatar = AvatarMember;
  //   name = "Sally Seinfield";
}

export default function MemberDashboard({ userData, type, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Redirect to={"/"} />;
  }

  const { _id, avatar, height, lastname, name, weight, email, phone } =
    userData;
  return (
    <div className="container-scroller">
      <DashboardNavBar type={type} name={name} avatar={avatar} />
      <div className="container-fluid page-body-wrapper">
        <DashboardMembersSideBar />
        <div className="main-panel">
          <Switch>
            <Route exact path="/dashboard">
              <MemberDashboardPanel  userData={userData} />
            </Route>
            <Route exact path="/instructor">
              <DashboardInstructorPanel />
            </Route>
            <Route exact path="/mealplan">
              <DashboardMealPlanPanel />
            </Route>
            <Route exact path="/exercises">
              <DashboardExercisesPanel />
            </Route>
            <Redirect to="/dashboard" />
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function DashboardMembersSideBar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="../dashboard">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-view-dashboard menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../mealplan">
            <span className="menu-title">Meal Plan</span>
            <i className="mdi mdi-food menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../exercises">
            <span className="menu-title">Exercises</span>
            <i className="mdi mdi-dumbbell menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../instructor">
            <span className="menu-title">Instructor</span>
            <i className="mdi mdi-account-star menu-icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

function MemberDashboardPanel({ userData }) {
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-view-dashboard"></i>
          </span>
          Dashboard
        </h3>
      </div>
      <div className="row">
        <div className="col-5 stretch-card">
          <div className="card">
            <div className="card-body">
              <h1 className="grid-margin">{userData.name}</h1>
              <div className="row">
                <div className="col">
                  <img src={userData.avatar} className="avatar" />
                </div>

                <div className="col">
                  <h6 className="row"></h6>
                  <h6 className="row">Profile</h6>
                  <p>@{userData.lastname}</p>
                  <h6 className="row">Birthday</h6>
                  <p>
                    19<sup>th</sup> September 1998
                  </p>
                  <h6 className="row">Contact number</h6>
                  <p>{userData.phone}</p>
                </div>
              </div>
              <div className="row">
                <h6 className="row"></h6>
                <h6 className="row">Email</h6>
                <p>{userData.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row grid-margin">
                <div className="card card-img-holder bg-gradient-danger col mmr">
                  <div className="card-body">
                    <h4>Height</h4>
                    <h1>{userData.height} cm</h1>
                    <h6 className="normal-text"></h6>
                    <img
                      src={Circle}
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                  </div>
                </div>
                <div className="card card-img-holder bg-gradient-danger col mml">
                  <div className="card-body">
                    <h4>Weight</h4>
                    <h1>{userData.weight} kg</h1>
                    <h6 className="warning-text">increased by 1kg</h6>
                    <img
                      src={Circle}
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col card card-img-holder bg-gradient-danger stretch-card mmr">
                  <div className="card-body">
                    <h6>You had</h6>
                    <h1 className="warning-text">6 hours</h1>
                    <h6>
                      {" "}
                      of exercises this week{" "}
                      <i className="mdi mdi-dumbbell"></i>
                    </h6>
                    <img
                      src={Circle}
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                  </div>
                </div>
                <div className="col card card-img-holder bg-gradient-danger stretch-card mml">
                  <div className="card-body m-0">
                    <h6>You are</h6>
                    <h1 className="warning-text">431 calories behind</h1>
                    <h6>on your meal plan</h6>
                    <img
                      src={Circle}
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function DashboardInstructorPanel() {
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-account-star"></i>
          </span>
          Instructor
        </h3>
        {/* <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav> */}
      </div>
      <div className="row">
        <div className="col-5 stretch-card">
          <div className="card">
            <div className="card-body">
              <h1 className="grid-margin">David Greymaax</h1>
              <div className="row">
                <div className="col">
                  <img src={AvatarInstructor} className="avatar" />
                </div>

                <div className="col">
                  <h6 className="row"></h6>
                  <h6 className="row">Profile</h6>
                  <p>@DGreyM</p>
                  <h6 className="row">Birthday</h6>
                  <p>
                    12<sup>th</sup> October 1998
                  </p>
                  <h6 className="row">Contact number</h6>
                  <p>+94 77 30 30 300</p>
                </div>
              </div>
              <div className="row">
                <h6 className="row"></h6>
                <h6 className="row">Email</h6>
                <p>greymaaxD@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row grid-margin">
                <div className="card card-img-holder bg-gradient-danger col mmr">
                  <div className="card-body">
                    <h4>Height</h4>
                    <h1>165cm</h1>
                    <h6 className="normal-text"></h6>
                    <img
                      src={Circle}
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                  </div>
                </div>
                <div className="card card-img-holder bg-gradient-danger col mml">
                  <div className="card-body">
                    <h4>Weight</h4>
                    <h1>68kg</h1>
                    <img
                      src={Circle}
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col card card-img-holder bg-gradient-danger stretch-card mmr">
                  <div className="card-body">
                    <h1 className="warning-text">4 years</h1>
                    <h6>
                      {" "}
                      of experience <i className="mdi mdi-dumbbell"></i>
                    </h6>
                    <img
                      src={Circle}
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                  </div>
                </div>
                <div className="col card card-img-holder bg-gradient-danger stretch-card mml">
                  <div className="card-body m-0">
                    {/* <h6>You are</h6> */}
                    <h1 className="warning-text">800+ hours</h1>
                    <h6>of exercises</h6>
                    <img
                      src={Circle}
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMealPlanPanel() {
  const [meals, setMeals] = useState([])

  
   const getMeals = async function () {
        console.log("hello");
        let data =  await api.get('/member/meal_plan',{
          headers:{
            "Authorization" : localStorage.getItem("token")
          }
        }).then(({ data }) => setMeals(data));;
       console.log(data)
 
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-food"></i>
          </span>
          Meal Plan
        </h3>
      </div>

      <div>
        {meals.map((data) => {
          {
            console.log(data);
          }
          return (
            <div className="card grid-margin">
              <div className="card-body">
                <h4 className="card-title">Available meal plans</h4>
                <div className="grid-margin">
                  <table className="table table-bordered" id="mealPlansTable">
                    <thead>
                      <tr>
                        <th colSpan={7}>
                          <h3 className="text-center">{data.mealName}</h3>
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
                                  return <li>{data.name}</li>;
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
                                  return <li>{data.name}</li>;
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
                                  return <li>{data.name}</li>;
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
                                  return <li>{data.name}</li>;
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
                                  return <li>{data.name}</li>;
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
                                  return <li>{data.name}</li>;
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
                                  return <li>{data.name}</li>;
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
        })}
      </div>
    </div>
  );
}

/**
 * Create the Exercises panel for all dashboards
 * @returns Exercises panel for all dashboards as JSX
 */
function DashboardExercisesPanel() {

  const [exerData , setExerData] = useState([]);

  const getExer = async function () {
    console.log("hello");
    let data =  await api.get('/member/workout',{
      headers:{
        "Authorization" : localStorage.getItem("token")
      }
    }).then(({ data }) => setExerData(data));;
   console.log(data)

}

useEffect(() => {
  getExer();
}, []);

  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-dumbbell"></i>
          </span>
          Exercises
        </h3>
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
  );
}


function Footer() {
  return (
    <footer className="footer dashboard-footer">
      <div className="container-fluid d-flex justify-content-between">
        <span className="text-muted d-block text-center text-sm-start d-sm-inline-block">
          Copyright © FITUS 2022
        </span>
        {/* <span className="float-none float-sm-end mt-1 mt-sm-0 text-end"> Free <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin template</a> from Bootstrapdash.com</span> */}
      </div>
    </footer>
  );
}
