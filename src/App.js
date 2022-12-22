import { useEffect } from "react";
//Redux
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { loadUser } from "./actions/auth";
import Alert from "./components/Alert";
import CreateProfile from "./components/profile-forms/CreateProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
import About from "./pages/About";
import {MemberActivation,   InstructorActivation} from "./pages/activation";
import Cart from "./pages/Cart";
import Confirm from "./pages/confirm";
import Contact from "./pages/Contact";
import Dashboard from "./pages/DashoboardComponents";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Login_I from "./pages/Login_I";
import MemberDashboard from "./pages/DashboardMember";
import MealPlans from "./pages/MealPlans";
import Exercies from "./pages/Exercies";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import RegisterInstructor from "./pages/RegisterInstructor";
import Services from "./pages/Services";
import UserGuide from "./pages/UserGuide";
import Verification from "./pages/verification";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Alert />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/products">
            <CartProvider>
              <Products />
            </CartProvider>
          </Route>
          <Route path="/userguide">
            <UserGuide />
          </Route>
          <Route path="/cart">
            <CartProvider>
              <Cart />
            </CartProvider>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/instructor/login">
            <Login_I />
          </Route>
          <Route path="/user/verification">
            <Verification />
          </Route>
          <Route path="/user/comfirm">
            <Confirm />
          </Route>
          <Route path={`/member/activation/:token`}>
            <MemberActivation />
          </Route>
          <Route path={`/instructor/activation/:token`}>
            <InstructorActivation />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/instructor/register">
            <RegisterInstructor />
          </Route>
          <Route path="/instructor/meal-plan/add">
            <MealPlans />
          </Route>
          <Route path="/instructor/exercies/add">
            <Exercies />
          </Route>
          <PrivateRoute exact path="/profile" component={Profile} />

          {/* <PrivateRoute exact path={["/dashboard", "/admin", "/instructors", "/instructor", "/members", "/payment", "/mealplans", "/mealplan", "/exercises"]} component={Dashboard}/> */}
          <Route
            path={[
              "/dashboard",
              "/admin",
              "/instructor",
              "/members",
              "/instructors",
              "/payment",
              "/mealplans",
              "/mealplan",
              "/exercises",
            ]}
          >
            <Dashboard />
          </Route>



          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
