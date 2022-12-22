import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllInstructors } from "../actions/instructor";
function DashboardInstructorsPanel({ getAllInstructors, data }) {
  useEffect(() => {
    getAllInstructors();
  }, []);

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
              <tbody>
                {data ? (
                  <>
                  {console.log(data)}
                    {data.map((instructor) => {
                      return (
                        <tr>
                          <th scope="row">{instructor.number}</th>
                          <th>
                            {instructor.id ||
                              Math.floor(Math.random() * 100000) % 10000}
                          </th>
                          <th>
                            {instructor.name + " " + instructor.lastname}
                          </th>
                          <th>{instructor.gender}</th>
                          <th>{instructor.email}</th>
                          {/* <th>{instructor.avatarLink || "Empty image"}</th> */}
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.instructor.instructors,
});

export default connect(mapStateToProps, { getAllInstructors })(
  DashboardInstructorsPanel
);
