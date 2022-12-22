import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./main.css";
import { createMealPlan } from "../actions/instructor";
let nextId = 0;

const MealPlan = ({ createMealPlan, userId, stateUp }) => {
  const [def, setDef] = useState(false);
  const [mealName, setmealName] = useState();
  const [verify, setVerify] = useState();
  const [group, setGroup] = useState();

  const [name, setName] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });
  const [formData, setFormData] = useState({
    mealName: "",
    monday: [],
    tuesday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });
  let id;
  if (userId) {
    id = userId._id;
  }

  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
    formData;

  //   const onChange = (e) => {
  //     console.log(e);
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //     console.log(formData);
  //   };
  const onSubmit = async (e) => {
    e.preventDefault();
    createMealPlan({
      id,
      mealName,
      group,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    });
    setVerify(true);
  };

  if (verify) {
    return <Redirect to={"/mealPlans"} />;
  }

  return (
    <>
      {userId ? (
        <>
          {" "}
          <section className="container-fluid register py-4">
            <div className="container shadow p-5 register__form">
              <div className="text-center">
                <Link to="/" className="register__logo">
                  FITUS
                </Link>
              </div>

              <h2 className="fs-4 title my-4 text-center">Add A Meal Plan</h2>
              <form
                className="row g-5"
                onSubmit={(e) => {
                  onSubmit(e);
                }}
              >
                <div className="col-md-6">
                  <label className="form-label fs-5">Meal Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Meal Name"
                    onChange={(e) => setmealName(e.target.value)}
                  />{" "}
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-5">Group No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Meal Name"
                    onChange={(e) => setGroup(e.target.value)}
                  />{" "}
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-5">For monday</label>
                  <input
                    type="text"
                    className="form-control"
                    name="monday"
                    placeholder="Monday Meal"
                    onChange={(e) => setName({ monday: e.target.value })}
                  />{" "}
                  <button
                    type="button"
                    onClick={() => {
                      console.log(formData);
                      setName({ monday: "" });
                      formData.monday.push({
                        id: nextId++,
                        name: name.monday,
                      });
                    }}
                  >
                    Add
                  </button>
                  <ul>
                    {formData.monday.map((artist) => (
                      <li key={artist.id}>
                        {artist.name}
                        {/* <button
                      onClick={() => {
                        const index = formData.monday.indexOf(artist.id-1);
                        const x = formData.monday.splice(index, 1);
                        console.log(x)
                      }}
                    >
                      {" "}
                      remove
                    </button> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-5">For Tuesday</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tuesday"
                    placeholder="Tuesday Meal"
                    onChange={(e) => setName({ tuesday: e.target.value })}
                  />{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setName({ tuesday: "" });

                      formData.tuesday.push({
                        id: nextId++,
                        name: name.tuesday,
                      });
                    }}
                  >
                    Add
                  </button>
                  <ul>
                    {formData.tuesday.map((artist) => (
                      <li key={artist.id}>
                        {artist.name}
                        {/* <button
                      onClick={() => {
                        const index = formData.monday.indexOf(artist.id-1);
                        const x = formData.monday.splice(index, 1);
                        console.log(x)
                      }}
                    >
                      {" "}
                      remove
                    </button> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-5">For Wednesday</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Wednesday"
                    placeholder="Wednesday Meal"
                    onChange={(e) => setName({ wednesday: e.target.value })}
                  />{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setName({ wednesday: "" });

                      formData.wednesday.push({
                        id: nextId++,
                        name: name.wednesday,
                      });
                    }}
                  >
                    Add
                  </button>
                  <ul>
                    {formData.wednesday.map((artist) => (
                      <li key={artist.id}>
                        {artist.name}
                        {/* <button
                      onClick={() => {
                        const index = formData.monday.indexOf(artist.id-1);
                        const x = formData.monday.splice(index, 1);
                        console.log(x)
                      }}
                    >
                      {" "}
                      remove
                    </button> */}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-md-6">
                  <label className="form-label fs-5">For Thursday</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tuesday"
                    placeholder="Thursday Meal"
                    onChange={(e) => setName({ thursday: e.target.value })}
                  />{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setName({ thursday: "" });

                      formData.thursday.push({
                        id: nextId++,
                        name: name.thursday,
                      });
                    }}
                  >
                    Add
                  </button>
                  <ul>
                    {formData.thursday.map((artist) => (
                      <li key={artist.id}>
                        {artist.name}
                        {/* <button
                      onClick={() => {
                        const index = formData.monday.indexOf(artist.id-1);
                        const x = formData.monday.splice(index, 1);
                        console.log(x)
                      }}
                    >
                      {" "}
                      remove
                    </button> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-5">For Friday</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Friday Meal"
                    onChange={(e) => setName({ friday: e.target.value })}
                  />{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setName({ friday: "" });

                      formData.friday.push({
                        id: nextId++,
                        name: name.friday,
                      });
                    }}
                  >
                    Add
                  </button>
                  <ul>
                    {formData.friday.map((artist) => (
                      <li key={artist.id}>
                        {artist.name}
                        {/* <button
                      onClick={() => {
                        const index = formData.monday.indexOf(artist.id-1);
                        const x = formData.monday.splice(index, 1);
                        console.log(x)
                      }}
                    >
                      {" "}
                      remove
                    </button> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-5">For Saturday</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Saturday Meal"
                    onChange={(e) => setName({ saturday: e.target.value })}
                  />{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setName({ saturday: "" });

                      formData.saturday.push({
                        id: nextId++,
                        name: name.saturday,
                      });
                    }}
                  >
                    Add
                  </button>
                  <ul>
                    {formData.saturday.map((artist) => (
                      <li key={artist.id}>
                        {artist.name}
                        {/* <button
                      onClick={() => {
                        const index = formData.monday.indexOf(artist.id-1);
                        const x = formData.monday.splice(index, 1);
                        console.log(x)
                      }}
                    >
                      {" "}
                      remove
                    </button> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-5">For Sunday</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sunday Meal"
                    onChange={(e) => setName({ sunday: e.target.value })}
                  />{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setName({ sunday: "" });

                      formData.sunday.push({
                        id: nextId++,
                        name: name.sunday,
                      });
                    }}
                  >
                    Add
                  </button>
                  <ul>
                    {formData.sunday.map((artist) => (
                      <li key={artist.id}>
                        {artist.name}
                        {/* <button
                      onClick={() => {
                        const index = formData.monday.indexOf(artist.id-1);
                        const x = formData.monday.splice(index, 1);
                        console.log(x)
                      }}
                    >
                      {" "}
                      remove
                    </button> */}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="d-grid gap-2 col-4 mx-auto">
                  <button type="submit" className="btn btn-primary">
                    Create Meal Plan
                  </button>
                </div>
              </form>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

MealPlan.propTypes = {
  //   setAlert: PropTypes.func.isRequired,
  //   register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user,
  stateUp: state.instructor.profile,
});

export default connect(mapStateToProps, { createMealPlan })(MealPlan);
