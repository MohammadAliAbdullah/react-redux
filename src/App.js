import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { updateFirstName, updateLastName } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const nameReducer = useSelector((state) => state.nameReducer);
  const { firstName, lastName, message } = nameReducer;
  const [fName, setfName] = useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  const handleFirstName = () => {
    dispatch(updateFirstName("Ayesha"));
  };
  const handleLastName = () => {
    dispatch(updateLastName("Abdullah"));
  };
  const handleReset = () => {
    dispatch({ type: "", action: {} });
  };

  return (
    <div>
      <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
        <h1>React Redux </h1>
        <p>React Redux is a library that allows React developers to use the Redux state management library with their React applications. It provides a set of hooks and utilities that make it easier to connect React components to the Redux store and manage state updates.</p>
        <p></p>
      </div>
      <div className="bg-secondary text-center" style={{ fontWeight: 'bold', fontSize: '25px', color: 'white' }}>
        {firstName} || {lastName} 
      </div>
      <div className="container" style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-sm-4">
            <h2>Useing Simple Button</h2>
            <React.Fragment>
              <div className="container">
                <label>First Name : {firstName}</label>
                <br />
                <button onClick={handleFirstName} className="btn btn-info">Update First Name</button>
                <br />
                <hr />
                <label>Last Name : {lastName}</label>
                <br />
                <button type="submit" onClick={handleLastName} className="btn btn-success">
                  Update First Name
                </button>

                <br />
                <br />
                {message && (
                  <label style={{ background: "lightgreen" }}>{message}</label>
                )}
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  type="submit"
                  onClick={handleReset}
                >
                  Reset
                </button>
                <br />
                <br />
              </div>
            </React.Fragment>
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-8">
            <h2>USEING FORM</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>First Name</label>
              <input className='form-control' {...register("firstName", { required: true, maxLength: 20 })} onChange={(e) => { dispatch(updateFirstName(e.target.value)) }} />
              <label>Last Name</label>
              <input className='form-control'  {...register("lastName", { pattern: /^[A-Za-z]+$/i })} onChange={(e) => { dispatch(updateLastName(e.target.value)) }} />
              <br />
              <input className='btn btn-primary' type="submit" />
            </form>
          </div>
        </div>
      </div >
      <div className="jumbotron" style={{ marginBottom: 0, textAlign: 'left' }}>
        <h5>workflow : </h5>
        Here is a simplified workflow of how React Redux works:

        1. Store creation: The Redux store is created and holds the state of the application.
        <br />
        2. Dispatching actions: Actions are dispatched to the store to update the state, using the dispatch function.
        <br />
        3. Reducers handle the action: Reducers are functions that receive the current state and the dispatched action, and return a new state based on the action type and payload.
        <br />
        4. State update: The Redux store updates its state with the new state returned by the reducer.
        <br />
        5. React components re-render: React components that are connected to the Redux store receive the updated state and re-render accordingly.
        <br />
        6. User interacts with the UI: The user interacts with the updated UI, which dispatches another action, starting the process again.
        <br />
        <br />
        React Redux provides several tools and utilities, such as the useSelector and useDispatch hooks, that make it easier to connect React components to the Redux store and manage state updates. This makes it a popular choice for managing the state of React applications.

        <br />
        <br />
        <div className='text-center'>
          MADE BY:  <a href='https://github.com/MohammadAliAbdullah' target="_blank"> Mohammad Ali Abdullah</a>
        </div>
      </div>
    </div >
  );
}

export default App;
