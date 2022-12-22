import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import Chart from "chart.js/auto"; // Do not remove. Crucial for operation
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

import DashboardNavBar from "./DashboardNavBar.js";

// import "../assets/vendors/mdi/css/materialdesignicons.min.css"
// import "../assets/css/style.css"

// import "./tempStyles.css"

// Written scripts
import "../assets/js/off-canvas.js";
import "../assets/js/hoverable-collapse.js";
import "../assets/js/misc.js";
import "../assets/js/table-select.js";

import { logout } from "../actions/auth.js";

import Logo from "../assets/images/logo-temp.png";
import LogoMini from "../assets/images/logo.png";
import AvatarAdmin from "../assets/images/faces/face3.jpg";
import AvatarInstructor from "../assets/images/faces/face1.jpg";
import AvatarMember from "../assets/images/faces/face2.jpg";

import Circle from "../assets/images/dashboard/circle.svg";

import ExerciseData from "./exercises.json";
import AllInstructorsData from "./Instructors.json";
import AllMembersData from "./members.json";
import MembersOfInstructor from "./membersOfInstructor.json";

import MemberDashboard from "./DashboardMember.js";
import TrainorDashboard from "./DashboardIns.js";

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
  name = "Sally Seinfield";
}

/**
 * Creates the Dashboard for given role by using global variable "role"
 *
 * role can be either "Admin", "Trainor" or "Member"
 */
const Dashboard = ({isAuthenticated, type, userData }) => {
  require("../assets/vendors/mdi/css/materialdesignicons.min.css");
  require("../assets/css/style.css");
  require("./tempStyles.css");

  return (
    <>
      {type && userData ?  (
        <>
 
          {type === 3 && <AdminDashboard   userData={userData}  type={type} isAuthenticated={isAuthenticated}/>}
          {type === 1 && <TrainorDashboard  type={type} userData={userData} isAuthenticated={isAuthenticated}/>}
          {type === 2 && <MemberDashboard  userData={userData} isAuthenticated={isAuthenticated} />}
        </>
      ) : (
        <>
          {" "}
          <div>... Loading</div>
        </>
      )}
    </>
  );
};

Dashboard.propTypes = {
  type: PropTypes.number,
  userData: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  type: state.auth.role,
  userData: state.auth.user,
  dt: console.log(state.auth),
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Dashboard);

/**
 * Handles the routing for internal panels of Admin dashboard
 * @returns Admin Dashboard as JSX
 */
function AdminDashboard({isAuthenticated, type , userData }) {

  if(!isAuthenticated){
    return <Redirect to={"/"} />
  }
  const {avatar, lastname, name, } =
  userData;
  return (
    <div className="container-scroller">
      <DashboardNavBar type={type} name={name} lastName={lastname} avatar={avatar}  />
      <div className="container-fluid page-body-wrapper">
        <DashboardAdminSideBar />
        <div className="main-panel">
          <Switch>
            <Route exact path="/admin">
              <DashboardAdminPanel />
            </Route>
            <Route exact path="/dashboard">
              <AdminDashboardPanel />
            </Route>
            <Route exact path="/instructors">
              <DashboardInstructorsPanel />
            </Route>
            <Route exact path="/members">
              <DashboardMembersPanel />
            </Route>
            <Route exact path="/payment">
              <DashboardPaymentPanel />
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

/**
 * Create the Exercises panel for all dashboards
 * @returns Exercises panel for all dashboards as JSX
 */
function DashboardExercisesPanel() {
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

      <ExercisesLayout />
    </div>
  );
}

/**
 * Creates the Navigation bar for all dashboards
 * @returns Navigation bar as JSX
 */

/**
 * Creates the Side bar for Admin dashboard
 * @returns side bar of Admin dashboard as JSX
 */
function DashboardAdminSideBar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="../admin">
            <span className="menu-title">Admin</span>
            <i className="mdi mdi-triangle-outline menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../dashboard">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-view-dashboard menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../instructors">
            <span className="menu-title">Instructors</span>
            <i className="mdi mdi-account-star menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../members">
            <span className="menu-title">Members</span>
            <i className="mdi mdi-account-multiple menu-icon"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../payment">
            <span className="menu-title">Payment</span>
            <i className="mdi mdi-cash-usd menu-icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

/**
 * Creates the Dashboard main panel for admin dashboard
 * @returns Dashboard panel for Admins as JSX
 */
function AdminDashboardPanel() {
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
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body">
              <img
                src={Circle}
                className="card-img-absolute"
                alt="circle-image"
              />
              <h2 className="mb-3 text-center">70</h2>
              <h4 className="font-weight-normal text-center mb-5">
                Members{" "}
                <i className="mdi mdi-account-multiple mdi-24px float-right"></i>
              </h4>
              {/* <h6 className="card-text">Increased by 60%</h6> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-info card-img-holder text-white">
            <div className="card-body">
              <img
                src={Circle}
                className="card-img-absolute"
                alt="circle-image"
              />
              <h2 className="mb-3 text-center">5</h2>
              <h4 className="font-weight-normal text-center mb-5">
                Instructors{" "}
                <i className="mdi mdi-account-star mdi-24px float-right"></i>
              </h4>
              {/* <h6 className="card-text">Decreased by 10%</h6> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img
                src={Circle}
                className="card-img-absolute"
                alt="circle-image"
              />
              <h2 className="mb-3 text-center">Rs. 103,000</h2>
              <h4 className="font-weight-normal text-center mb-5">
                Earnings{" "}
                <i className="mdi mdi-diamond mdi-24px float-right"></i>
              </h4>
              {/* <h6 className="card-text">Increased by 5%</h6> */}
            </div>
          </div>
        </div>
      </div>
      <div className="card grid-margin">
        <div className="card-body">
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand">
              <div className=""></div>
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className=""></div>
            </div>
          </div>
          {/* <h4 className="card-title">Line chart</h4> */}
          <RevenueGraph />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand">
              <div className=""></div>
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className=""></div>
            </div>
          </div>
          {/* <h4 className="card-title">Line chart</h4> */}
          <NewUsersGraph />
        </div>
      </div>
    </div>
  );
}

/**
 * Create the Admin panel for all dashboards
 * @returns Admin panel for all dashboards as JSX
 */
function DashboardAdminPanel() {
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-view-dashboard"></i>
          </span>
          Admin Panel
        </h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            <i className="mdi mdi-worker"></i> Admin Panel Under Construction{" "}
            <i className="mdi mdi-worker"></i>
          </h4>
        </div>
      </div>
    </div>
  );
}

/**
 * Create the Instructors panel for all dashboards
 * @returns Instructors panel for all dashboards as JSX
 */
function DashboardInstructorsPanel() {
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-account-star"></i>
          </span>
          Instructors
        </h3>
      </div>
      <div className="card">
        <div className="card-body">
          <AllInstructorsTable />
        </div>
      </div>
    </div>
  );
}

/**
 * Create the Members panel for all dashboards
 * @returns Members panel for all dashboards as JSX
 */
function DashboardMembersPanel() {
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-account-multiple"></i>
          </span>
          Members
        </h3>
      </div>
      <div className="card">
        <div className="card-body">
          {/* <h4 className="card-title">Members</h4> */}
          <AllMembersTable />
        </div>
      </div>
    </div>
  );
}

/**
 * Create the Payment panel for all dashboards
 * @returns Payment panel for all dashboards as JSX
 */
function DashboardPaymentPanel() {
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-cash-usd"></i>
          </span>
          Payment
        </h3>
      </div>
    </div>
  );
}

/**
 * Create the MealPlan panel for all dashboards
 * @returns MealPlan panel for all dashboards as JSX
 */
function DashboardMealPlanPanel() {
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

      <div className="card grid-margin">
        <div className="card-body">
          <div className="grid-margin">
            <table className="table table-bordered" id="mealPlansTable">
              <thead>
                <tr>
                  <th colSpan={7}>
                    <h3 className="text-center">Light diet</h3>
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
                  <th className="p-1">
                    <ul className="p-0">
                      <li>Rice 120g</li>
                      <li>Meat 50g</li>
                      {/* <li>egg 1</li> */}
                      <li>Vegetable 200g</li>
                      <li>Yogurt</li>
                    </ul>
                  </th>
                  <th className="p-1">
                    <ul className="p-0">
                      <li>Rice 120g</li>
                      <li>Fish 50g</li>
                      <li>eggs 1</li>
                      <li>Vegetable 200g</li>
                    </ul>
                  </th>
                  <th className="p-1">
                    <ul className="p-0">
                      <li>Rice 120g</li>
                      <li>Meat 50g</li>
                      {/* <li>eggs 2</li> */}
                      <li>Vegetable 200g</li>
                      <li>Yogurt</li>
                    </ul>
                  </th>
                  <th className="p-1">
                    <ul className="p-0">
                      <li>Rice 120g</li>
                      <li>Fish 50g</li>
                      <li>eggs 1</li>
                      <li>Vegetable 200g</li>
                    </ul>
                  </th>
                  <th className="p-1">
                    <ul className="p-0">
                      <li>Rice 120g</li>
                      <li>Meat 50g</li>
                      {/* <li>eggs 2</li> */}
                      <li>Vegetable 200g</li>
                      <li>Yogurt</li>
                    </ul>
                  </th>
                  <th className="p-1">
                    <ul className="p-0">
                      <li>Rice 120g</li>
                      <li>Fish 50g</li>
                      <li>eggs 1</li>
                      <li>Vegetable 200g</li>
                    </ul>
                  </th>
                  <th className="p-1">
                    <ul className="p-0">
                      <li>Rice 120g</li>
                      <li>Meat 50g</li>
                      {/* <li>eggs 2</li> */}
                      <li>Vegetable 200g</li>
                      <li>Yogurt</li>
                    </ul>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Creates the footer for all dashboards
 * @returns Footer for all dashboards as JSX
 */
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

function AllMembersTable() {
  let panel = [];

  AllMembersData.forEach((instructor) => {
    panel.push(
      <tr>
        <th scope="row">{instructor.number}</th>
        <th>{instructor.id || Math.floor(Math.random() * 100000) % 10000}</th>
        <th>{instructor.firstName + " " + instructor.lastName}</th>
        <th>{instructor.gender}</th>
        <th>
          {instructor.email ||
            instructor.firstName.toLowerCase() +
              instructor.lastName.toLowerCase() +
              "@gmail.com"}
        </th>
        {/* <th>{instructor.avatarLink || "Empty image"}</th> */}
      </tr>
    );
  });

  return (
    <div className="table-wrapper-scroll-y custom-scrollbar">
      <table
        className="table table-bordered table-striped"
        id="instructorsTable"
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Avatar</th> */}
          </tr>
        </thead>
        <tbody>{panel}</tbody>
      </table>
    </div>
  );
}

function AllInstructorsTable() {
  let panel = [];

  AllInstructorsData.forEach((instructor) => {
    panel.push(
      <tr>
        <th scope="row">{instructor.number}</th>
        <th>{instructor.id || Math.floor(Math.random() * 100000) % 10000}</th>
        <th>{instructor.firstName + " " + instructor.lastName}</th>
        <th>{instructor.gender}</th>
        <th>{instructor.email}</th>
        {/* <th>{instructor.avatarLink || "Empty image"}</th> */}
      </tr>
    );
  });

  return (
    <div className="table-wrapper-scroll-y custom-scrollbar">
      <table
        className="table table-bordered table-striped"
        id="instructorsTable"
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Avatar</th> */}
          </tr>
        </thead>
        <tbody>{panel}</tbody>
      </table>
    </div>
  );
}

function RevenueGraph() {
  const labels = ["June", "July", "August", "September", "October", "November"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Revenue in last 6 months",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [55_000, 78_000, 72_000, 89_000, 98_000, 103_000],
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        precision: 0,
      },
    },
    scales: {
      y: {
        suggestedMin: 50_000,
        suggestedMax: 16,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

function NewUsersGraph() {
  const labels = ["June", "July", "August", "September", "October", "November"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "New users in last 6 months",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [12, 10, 11, 13, 15, 12],
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        precision: 0,
      },
    },
    scales: {
      y: {
        suggestedMin: 9,
        suggestedMax: 16,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

function ExercisesLayout() {
  let panel = [];

  ExerciseData.forEach((exercise) => {
    panel.push(
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
  });

  return <>{panel}</>;
}
