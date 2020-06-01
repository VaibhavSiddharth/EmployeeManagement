import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Employee(props) {
  console.log(props);
  return (
    <div style={{ border: "3px solid blue" }}>
      <p>
        <label>
          Employee Id: <b>{props.data.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Name: <b>{props.data.Name}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Location: <b>{props.data.Location}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Salary: <b>{props.data.Salary}</b>
        </label>
      </p>
    </div>
  );
}

function DisplayEmployeeInfo(props) {
  const empList = props.employeeList;
  console.log(empList);
  const listElement = empList.map((emp) => (
    <Employee data={emp} key={emp.Id}></Employee>
  ));
  return <div>{listElement}</div>;
}

const Employees = [
  { Id: 101, Name: "John Levis", Location: "New York", Salary: 65000 },
  { Id: 102, Name: "Robert", Location: "New Jersey", Salary: 78000 },
  { Id: 103, Name: "Adam", Location: "Ohio", Salary: 98000 },
];

const element = (
  <DisplayEmployeeInfo employeeList={Employees}></DisplayEmployeeInfo>
);

ReactDOM.render(element, document.getElementById("root"));
// const EmployeeContext = React.createContext({
//   data: "",
//   changeEmployeeInfo: () => {},
// });
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {
//         Id: 1001,
//         Name: "John",
//         Location: "New Jersey",
//         Salary: 95000,
//       },
//       changeEmployeeInfo: this.updateEmployeeInfo,
//     };
//   }

//   updateEmployeeInfo = () => {
//     this.setState({ data: { Id: parseInt(this.state.data.Id) + 1 } });
//   };

//   render() {
//     return (
//       <div>
//         <h3>App Component</h3>
//         <p>
//           <label>
//             Employee Id: <b>{this.state.data.Id}</b>
//           </label>
//         </p>
//         <EmployeeContext.Provider value={this.state}>
//           <Employee></Employee>
//         </EmployeeContext.Provider>
//       </div>
//     );
//   }
// }

// class Employee extends React.Component {
//   static contextType = EmployeeContext;
//   render() {
//     return (
//       <div>
//         <h3>Welcome to Employee Component</h3>
//         <p>
//           <label>
//             Employee Id: <b>{this.context.data.Id}</b>
//           </label>
//         </p>
//         <button onClick={this.context.changeEmployeeInfo}>Update</button>
//       </div>
//     );
//   }
// }

// const element = <App></App>;

// ReactDOM.render(element, document.getElementById("root"));

//Implementing Context to pass data to child component
// const employeeContext = React.createContext();

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Id: 1002,
//       Name: "Mark",
//       Location: "Texas",
//       Salary: 87000,
//     };
//   }

//   changeEmployeeData = () => {
//     this.setState({ Id: parseInt(this.state.Id) + 1 });
//   };
//   render() {
//     return (
//       <div>
//         <h3>Welcome To App Component</h3>
//         <p>
//           <label>
//             Employee Id: <b>{this.state.Id}</b>
//           </label>
//         </p>
//         {console.log(this.state)}
//         <employeeContext.Provider value={this.state}>
//           <Employee />
//         </employeeContext.Provider>
//         <p>
//           <button onClick={this.changeEmployeeData}>Update</button>
//         </p>
//       </div>
//     );
//   }
// }

// class Employee extends React.Component {
//   static contextType = employeeContext;
//   render() {
//     console.log(this.context);
//     return (
//       <div>
//         <h3>Welcome To Employee Component</h3>
//         <p>
//           <label>
//             {console.log(this.context)}
//             Employee Id: <b>{this.context.Id}</b>
//           </label>
//         </p>
//         <Salary></Salary>
//       </div>
//     );
//   }
// }

// class Salary extends React.Component {
//   static contextType = employeeContext;
//   render() {
//     return (
//       <div>
//         <h3>Welcome To Salary Component</h3>
//         <p>
//           <label>
//             Employee ID: <b>{this.context.Id}</b>
//           </label>
//         </p>
//       </div>
//     );
//   }
// }

// const element = <App></App>;
// ReactDOM.render(element, document.getElementById("root"));
// class Employee extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       updatedSalary: null,
//     };
//   }

//   getUpdatedSalary = (salary) => {
//     this.setState({ updatedSalary: salary });
//   };

//   render() {
//     return (
//       <div>
//         <h3>Employee Information</h3>
//         <p>
//           Employee ID: <b>{this.props.ID}</b>{" "}
//         </p>
//         <p>
//           Employee Name: <b>{this.props.Name}</b>
//         </p>
//         <p>
//           Employee Location: <b>{this.props.Location}</b>
//         </p>
//         <p>
//           Employee Salary: <b>{this.props.Salary}</b>
//         </p>
//         <p>
//           <label>
//             Employee Updated Salary: <b>{this.state.updatedSalary}</b>
//           </label>
//         </p>
//         <Salary
//           BasicSalary={this.props.BasicSalary}
//           HRA={this.props.HRA}
//           SpecialAllowance={this.props.SpecialAllowance}
//           onSalaryChange={this.getUpdatedSalary}
//         ></Salary>
//       </div>
//     );
//   }
// }

// class Salary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       basic: this.props.BasicSalary,
//       hra: this.props.HRA,
//       sa: this.props.SpecialAllowance,
//     };
//   }

//   updateSalary = () => {
//     let salary =
//       parseInt(this.refs.basic.value) +
//       parseInt(this.refs.hra.value) +
//       parseInt(this.refs.sa.value);
//     this.props.onSalaryChange(salary);
//   };
//   render() {
//     return (
//       <div>
//         <h3>Salary Details...</h3>
//         <p>
//           <label>
//             Basic Salary:{" "}
//             <input
//               type="text"
//               ref="basic"
//               defaultValue={this.state.basic}
//             ></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             HRA:{" "}
//             <input type="text" ref="hra" defaultValue={this.state.hra}></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Special Allowance:{" "}
//             <input type="text" ref="sa" defaultValue={this.state.sa}></input>
//           </label>
//         </p>
//         <button onClick={this.updateSalary}>Update</button>
//       </div>
//     );
//   }
// }

// const element = (
//   <Employee
//     ID="101A"
//     Name="Hopkins"
//     Location="Ohio,USA"
//     BasicSalary="2500"
//     HRA="300"
//     SpecialAllowance="4800"
//     Salary="7600"
//   ></Employee>
// );

// ReactDOM.render(element, document.getElementById("root"));
//Implementing React State
// class CountCharacters extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Message: "",
//     };
//   }

//   onMessageChange(text) {
//     this.setState({
//       Message: "Message has " + text.length + " number of characters",
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Welcome to Count Characters Component</h2>
//         <p>
//           <label>
//             Enter a message:
//             <input
//               type="text"
//               onChange={(e) => this.onMessageChange(e.target.value)}
//             ></input>
//           </label>
//         </p>
//         <p>
//           <label>{this.state.Message}</label>
//         </p>
//       </div>
//     );
//   }
// }

// const element = <CountCharacters></CountCharacters>;

// ReactDOM.render(element, document.getElementById("root"));

// class Employee extends React.Component {
//   state = { counter: 0 };
//   addEmployee = () => {
//     this.setState({ counter: this.state.counter + 1 });
//     // this.counter = this.counter + 1;
//     // alert("Adding a new Employee");
//     // alert("This button is clicked :" + this.counter + "  times");
//   };
//   render() {
//     return (
//       <div>
//         <h2>Welcome to Employee Component</h2>
//         <p>
//           <button onClick={this.addEmployee}>Click me</button>
//         </p>
//         <p>
//           Add Employee Buttton is clicked <b>{this.state.counter}</b> times.
//         </p>
//       </div>
//     );
//   }
// }
// const element = <Employee></Employee>;

// ReactDOM.render(element, document.getElementById("root"));
// Implementing Component Class in React
// class Employee extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   console.log(this.props);
//   // }
//   // render() {
//   //   return (
//   //     <div>
//   //       <h2>Employee Details....</h2>
//   //       <p>
//   //         <label>
//   //           Employee Id: <b>{this.props.Id}</b>
//   //         </label>
//   //       </p>
//   //       <p>
//   //         <label>
//   //           Employee Name: <b>{this.props.Name}</b>
//   //         </label>
//   //       </p>
//   //       <p>
//   //         <label>
//   //           Employee Salary: <b>{this.props.Salary}</b>
//   //         </label>
//   //       </p>
//   //       <p>
//   //         <label>
//   //           Employee Location: <b>{this.props.Location}</b>
//   //         </label>
//   //       </p>
//   //       <Department
//   //         deptName={this.props.deptName}
//   //         deptHead={this.props.deptHead}
//   //       ></Department>
//   //     </div>
//   //   );
//   // }
// }

// class Department extends React.Component {
//   render() {
//     return (
//       <div>
//         <h3>Department Details</h3>
//         <p>
//           <label>
//             Dept Name: <b>{this.props.deptName}</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Dept Head: <b>{this.props.deptHead}</b>
//           </label>
//         </p>
//       </div>
//     );
//   }
// }

// const element = (
//   <Employee
//     Id="101"
//     Name="John"
//     Location="NewJersey"
//     Salary="3000$"
//     deptName="BFSI"
//     deptHead="Patrick James"
//   ></Employee>
// );

// ReactDOM.render(element, document.getElementById("root"));
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
