import { useEffect } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { getMessages } from "../actions/instructor";

function Messages({ getMessages, data }) {
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-account-multiple"></i>
          </span>
          Messages
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
                  <th scope="col">Send By</th>
                  <th scope="col">Message</th>
                  <th scope="col">Created At</th>
                  {/* <th scope="col">Gender</th>
                  <th scope="col">Email</th> */}
                  {/* <th scope="col">Avatar</th> */}
                </tr>
              </thead>
              <tbody>
                {data ? (
                  <>
                    {console.log(data)}
                    {data.map((data) => {
                      return (
                        <>
                          <tr>
                            <th scope="row">{data.sender}</th>
                            <th>{data.msgBody}</th>

                            <th>
                              {" "}
                              <Moment date={data.avatarLink}></Moment>
                            </th>
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
  data: state.instructor.messages,
});

export default connect(mapStateToProps, { getMessages })(Messages);
