
import { Redirect, Route, Switch, Link } from "react-router-dom";
import Logo from "../assets/images/logo-temp.png"
import LogoMini from "../assets/images/logo.png"

import Circle from "../assets/images/dashboard/circle.svg"
import { logout } from "../actions/auth.js";

import DashboardExercisesPanel from "./ExercisesPanel"
import DashboardNavBar from "./DashboardNavBar";
import DashboardMealPlansPanel from'./MealPanel'

import MembersOfInstructor from "./membersOfInstructor.json"
import { connect } from "react-redux";



const role = "Member";         // Authentication is not working. Change This To See Other Dashboards ("Admin", "Trainor", "Memeber")

// let Avatar;
// let name;
// if (role == "Admin") {
//   Avatar = AvatarAdmin;
//   name = "Admin Advantage";
// } else if (role == "Trainor"){
//   Avatar = AvatarInstructor;
//   name = "David Greymaax";
// } else {
//   Avatar = AvatarMember;
//   name = "Sally Seinfield";
// }

/**
 * Handles the routing for internal panels of Trainor dashboard
 * @returns Trainor Dashboard as JSX
 */
 export default function TrainorDashboard ({userData , type, isAuthenticated}) {

  if(!isAuthenticated){
    return <Redirect to={"/"} />
  }


  const { name, lastname, email, avatar} = userData
    return (
      <div className="container-scroller"> 
      <DashboardNavBar type={type} name={name} lastName={lastname} avatar={avatar} />
          <div className="container-fluid page-body-wrapper">
              <DashboardTrainorSideBar />
              <div className="main-panel">
                  <Switch>
                      <Route exact path="/dashboard">
                          <TrainorDashboardPanel  />
                      </Route>
                      <Route exact path="/mealplans">
                          <DashboardMealPlansPanel />
                      </Route>
                      <Route exact path="/exercises">
                          <DashboardExercisesPanel />
                      </Route>
                      <Redirect to="/dashboard"/>
                  </Switch>  
                <Footer />
              </div>
          </div>
      </div>
  )
  }

//   function DashboardNavBar({name, lastname, avatar}) {


//     const onSubmit = async (e) => {
//       e.preventDefault();
//       logout();
//     };


//     return (
//       <nav className="navbar navbar-dashboard default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row bg-white">
//         <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
//           <a className="navbar-brand brand-logo" href="../../"><img src={Logo} alt="logo" /></a>
//           {/* <a className="navbar-brand navbar-logo" href="/">FITUS</a> */}
//           <a className="navbar-brand brand-logo-mini" href="../../"><img src={LogoMini} alt="logo" /></a>
//         </div>
//         <div className="navbar-menu-wrapper d-flex align-items-stretch">
          
          
//           <ul className="navbar-nav navbar-nav-right">
//             <li className="nav-item nav-profile dropdown">
//               <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
//                 <div className="nav-profile-img">
//                   <img src={avatar} alt="avatar" />
//                   <span className="availability-status online"></span>
//                 </div>
//                 <div className="nav-profile-text">
//                   <p className="mb-1 text-black">{name} {lastname}</p>
//                 </div>
//               </a>
//               <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
//                 <div className="dropdown-item">
//                   <a className="dropdown-item namefield" href="../profile/">
//                     <img className="me-1 avatar dropdown-item" src={avatar} />{name}<br/>{role}</a>
//                 </div>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item" href="#">
//                   <i className="mdi mdi-cached me-2 text-success"></i> Activity Log </a>

//                 <div className="dropdown-divider"></div>
//                 <button className="dropdown-item" type="button" onClick={onSubmit}>
//                 <i className="mdi mdi-logout me-2 text-primary"></i> Signout{" "}
//               </button>
//               </div>
//             </li>
                        
//           </ul>
//           <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
//             <span className="mdi mdi-menu"></span>
//           </button>
//         </div>
//       </nav>
//     )
    
// }
// connect(null, {logout})(DashboardNavBar)

/**
 * Creates the Side bar for Trainor dashboard
 * @returns side bar of Trainor dashboard as JSX
 */
 function DashboardTrainorSideBar() {
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
              <a className="nav-link" href="../mealplans">
                <span className="menu-title">Meal Plans</span>
                <i className="mdi mdi-food menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../exercises">
                <span className="menu-title">Exercises</span>
                <i className="mdi mdi-dumbbell menu-icon"></i>
              </a>
            </li>
          </ul>
        </nav>
    )
  }
  

  /**
 * Creates the Dashboard main panel for trainor dashboard
 * @returns Dashboard panel for Trainor as JSX
 */
function TrainorDashboardPanel () {
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
                  <img src={Circle} className="card-img-absolute" alt="circle-image" />
                  <h2 className="mb-3 text-center">3</h2>
                  <h4 className="font-weight-normal text-center mb-5">Groups <i className="mdi mdi-account-multiple mdi-24px float-right"></i></h4>
                  {/* <h6 className="card-text">Increased by 60%</h6> */}
                </div>
              </div>
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-info card-img-holder text-white">
                <div className="card-body">
                  <img src={Circle} className="card-img-absolute" alt="circle-image" />
                  <h2 className="mb-3 text-center">8</h2>
                  <h4 className="font-weight-normal text-center mb-5">Members <i className="mdi mdi-account-star mdi-24px float-right"></i></h4>
                  {/* <h6 className="card-text">Decreased by 10%</h6> */}
                </div>
              </div>
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-success card-img-holder text-white">
                <div className="card-body">
                  <img src={Circle} className="card-img-absolute" alt="circle-image" />
                  <h2 className="mb-3 text-center">Rs. 23,000</h2>
                  <h4 className="font-weight-normal text-center mb-5">Earnings <i className="mdi mdi-diamond mdi-24px float-right"></i></h4>
                  {/* <h6 className="card-text">Increased by 5%</h6> */}
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Members</h4>
              <MembersOfInstructorTable />
            </div>
          </div>
        </div>
    )
  }

  /**
 * Create the MealPlans panel for all dashboards
 * @returns MealPlans panel for all dashboards as JSX
 */



/**
 * Create the Exercises panel for all dashboards
 * @returns Exercises panel for all dashboards as JSX
 */




function Footer() {
    return (
      <footer className="footer dashboard-footer">
        <div className="container-fluid d-flex justify-content-between">
          <span className="text-muted d-block text-center text-sm-start d-sm-inline-block">Copyright © FITUS 2022</span>
          {/* <span className="float-none float-sm-end mt-1 mt-sm-0 text-end"> Free <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin template</a> from Bootstrapdash.com</span> */}
        </div>
      </footer>
    )
  }
  
  function MembersOfInstructorTable() {
    let panel = [];
  
    MembersOfInstructor.forEach((instructor) => {panel.push(
      <tr>
        <th scope="row">{instructor.number}</th>
        <th>{instructor.id || Math.floor(Math.random() * 100000) % 10000}</th>
        <th>{instructor.firstName + " " + instructor.lastName}</th>
        <th>{instructor.gender}</th>
        <th>{instructor.email || (instructor.firstName.toLowerCase() + instructor.lastName.toLowerCase() + "@gmail.com")}</th>
        <th>{Math.ceil(Math.random() * 9)}</th>
        <th>{["Heavy", "Moderate", "Light"][Math.floor(Math.random() * 3)]}</th>
      </tr>)});
  
    return (
      <div className="table-wrapper-scroll-y custom-scrollbar">
        <table className="table table-bordered table-striped" id="instructorsTable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Workout hours</th>
              <th scope="col">Meal plan</th>
            </tr>
          </thead>
          <tbody>
          {panel}
          </tbody>
        </table>
      </div>
    )
  }
  
  
  

