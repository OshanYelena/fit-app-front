import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllMembers } from "../actions/member";

function DashboardMembersPanel({ getAllMembers, data }) {
  useEffect(() => {
    getAllMembers();
  }, []);

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
                 
                      {data.map((data) => {
                        return (
                          <>
                            <tr>
                            <th scope="row">{data.number}</th>
                            <th>
                              {data.id ||
                                Math.floor(Math.random() * 100000) % 10000}
                            </th>
                            <th>
                              {data.name + " " + data.lastname}
                            </th>
                            <th>{data.gender}</th>
                            <th>
                              {data.email ||
                           
                                  "@gmail.com"}
                            </th>
                            {/* <th>{data.avatarLink || "Empty image"}</th> */}
                            </tr>
                          </>
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
  data: state.instructor.members,
});

export default connect(mapStateToProps, { getAllMembers })(
  DashboardMembersPanel
);
