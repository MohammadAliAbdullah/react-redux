import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFirstName, updateLastName } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const nameReducer = useSelector((state) => state.nameReducer);
  const { firstName, lastName, message } = nameReducer;

  const handleFirstName = () => {
    dispatch(updateFirstName("Jason"));
  };
  const handleLastName = () => {
    dispatch(updateLastName("Stathan"));
  };
  const handleReset = () => {
    dispatch({ type: "", action: {} });
  };

  return (
    <div>
      <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
        <h1>React Redux </h1>
        <p>Redux is a powerfull library.</p>
        <p>{firstName}</p>
      </div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-sm-4">
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div className="fakeimg">Fake Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3>Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-8">
            <h2>TITLE HEADING</h2>
            <React.Fragment>
              <div className="container">
                <label>First Name : {firstName}</label>
                <button onClick={handleFirstName}>Update First Name</button>
                <br />
                <br />
                <label>Last Name : {lastName}</label>
                <button type="submit" onClick={handleLastName}>
                  Update First Name
                </button>

                <br />
                <br />
                <br />
                {message && (
                  <label style={{ background: "lightgreen" }}>{message}</label>
                )}
                <br />
                <button
                  style={{ background: "red" }}
                  type="submit"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
      <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
