import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h2>Employee Details....</h2>
        <p>
          <label>
            Employee Id: <b>{this.props.Id}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Name: <b>{this.props.Name}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Salary: <b>{this.props.Salary}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Location: <b>{this.props.Location}</b>
          </label>
        </p>
        <Department
          deptName={this.props.deptName}
          deptHead={this.props.deptHead}
        ></Department>
      </div>
    );
  }
}

class Department extends React.Component {
  render() {
    return (
      <div>
        <h3>Department Details</h3>
        <p>
          <label>
            Dept Name: <b>{this.props.deptName}</b>
          </label>
        </p>
        <p>
          <label>
            Dept Head: <b>{this.props.deptHead}</b>
          </label>
        </p>
      </div>
    );
  }
}

const element = (
  <Employee
    Id="101"
    Name="John"
    Location="NewJersey"
    Salary="3000$"
    deptName="BFSI"
    deptHead="Patrick James"
  ></Employee>
);

ReactDOM.render(element, document.getElementById("root"));
//Functional Component
// var DisplayEmployeeInfo = (employee) => {
//   return (
//     <div>
//       <h1>Employee Details</h1>
//       <p>
//         <label>
//           Employee Id: <b>{employee.Id}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Name: <b>{employee.Name}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Salary: <b>{employee.Salary}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Location: <b>{employee.Location}</b>
//         </label>
//       </p>
//       <Department
//         deptName={employee.deptName}
//         headName={employee.headName}
//       ></Department>
//     </div>
//   );
// };

// const Department = (deptInfo) => {
//   return (
//     <div>
//       <p>
//         Department Name :<b>{deptInfo.deptName}</b>
//       </p>
//       <p>
//         Department Head Name: <b>{deptInfo.headName}</b>
//       </p>
//     </div>
//   );
// };
// const element = (
//   <DisplayEmployeeInfo
//     Id="101"
//     Name="John F"
//     Location="New Jersey"
//     Salary="82000"
//     deptName="HR"
//     headName="Richard"
//   ></DisplayEmployeeInfo>
// );
// ReactDOM.render(element, document.getElementById("root"));
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
