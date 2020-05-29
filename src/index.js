import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var DisplayEmployeeInfo = (employee) => {
  return (
    <div>
      <h1>Employee Details</h1>
      <p>
        <label>
          Employee Id: <b>{employee.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Name: <b>{employee.Name}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Salary: <b>{employee.Salary}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Location: <b>{employee.Location}</b>
        </label>
      </p>
    </div>
  );
};

const element = (
  <DisplayEmployeeInfo
    Id="101"
    Name="John"
    Location="New Jersey"
    Salary="82000"
  ></DisplayEmployeeInfo>
);
ReactDOM.render(element, document.getElementById("root"));
// const element = React.createElement("h1", null, "Welcome To React Programming");
// ReactDOM.render(element, document.getElementById("root"));

// const element = React.createElement(
//   "div",
//   { className: "testClass" },
//   React.createElement("h1", null, "Welcome To React Programming"),
//   React.createElement("h1", null, "Understanding the React Element")
// );
// ReactDOM.render(element, document.getElementById("root"));

// Jsx implementation which will get compiled to plain javascript which is not recommended in React Development Environment
// const element = <h1 className="testClass">Welcome To React Programming !!!</h1>;

// ReactDOM.render(element, document.getElementById("root"));

// const newelement = (
//   <h1 className="testClass">Understanding the React Elements</h1>
// );
// ReactDOM.render(newelement, document.getElementById("app"));

// const element = (
//   <div className="testClass">
//     <h1>Welcome To React Programming</h1>
//     <h1>Understanding the React Elements</h1>
//   </div>
// );

// ReactDOM.render(element, document.getElementById("root"));
