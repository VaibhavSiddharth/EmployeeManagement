import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import video from "../src/asset/Cloud.mp4";

class ChangeDetection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      employeeCount: 0,
    };
    setInterval(this.getEmployeeCount, 5000);
  }

  getEmployeeCount = () => {
    fetch("https://localhost:44346/api/employee")
      .then((res) => res.json())
      .then((result) => this.setState({ employeeCount: result.length }));
  };

  componentDidMount() {
    this.getEmployeeCount();
  }

  render() {
    alert("Notification Message");
    return (
      <div>
        <h2>Welcome To Pure Component Demonstration </h2>
        <p>
          <label>
            Number of employees: <b>{this.state.employeeCount}</b>
          </label>
        </p>
      </div>
    );
  }
}

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    fetch("https://localhost:44346/api/employee")
      .then((res) => res.json())
      .then((result) => this.setState({ employees: result }));
  };
  loadEmployees = () => {
    this.getEmployees();
  };

  render() {
    return (
      <div>
        <h2>Employee Information</h2>
        <table style={{ border: "solid red" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((emp) => (
              <tr key={emp.Id}>
                <td>{emp.Id}</td>
                <td>{emp.Name}</td>
                <td>{emp.Location}</td>
                <td>{emp.Salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <button onClick={this.loadEmployees}>Reload</button>
        </p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <ChangeDetection></ChangeDetection>
        <Reports></Reports>
      </React.Fragment>
    );
  }
}

const element = <App></App>;
ReactDOM.render(element, document.getElementById("root"));
// class DisplayEmployee extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Location</th>
//             <th>Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.props.employees.map((emp) => (
//             <tr key={emp.Id}>
//               <td>{emp.Id}</td>
//               <td>{emp.Name}</td>
//               <td>{emp.Location}</td>
//               <td>{emp.Salary}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }

// class EmployeeReports extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://localhost:44346/api/employee")
//       .then((res) => res.json())
//       .then((result) => this.setState({ employees: result }));
//   }

//   render() {
//     return (
//       <div>
//         <h2>Employee Details</h2>
//         {this.props.content(this.state.employees)}
//       </div>
//     );
//   }
// }
// const element = (
//   <EmployeeReports
//     content={(input) => <DisplayEmployee employees={input}></DisplayEmployee>}
//   ></EmployeeReports>
// );
// ReactDOM.render(element, document.getElementById("root"));
// class DisplayList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <ul>
//         {this.props.list.map((d) => (
//           <li>{d}</li>
//         ))}
//       </ul>
//     );
//   }
// }
// class Department extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: ["Dev", "Big Data", "Mobility"],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h2>Department List </h2>
//         {this.props.render(this.state.list)}
//       </div>
//     );
//   }
// }

// class Project extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h2>Project List </h2>
//         {this.props.render(this.props.list)}
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Department
//           render={(data) => <DisplayList list={data}></DisplayList>}
//         ></Department>
//         <Project
//           render={(data) => (
//             <DisplayList list={["Emblem", "Allianz", "Avista"]}></DisplayList>
//           )}
//         ></Project>
//       </React.Fragment>
//     );
//   }
// }

// const element = <App></App>;
// ReactDOM.render(element, document.getElementById("root"));
// class NewAccountReports extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       FromDate: "",
//       ToDate: "",
//     };
//   }

//   handleChange = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Welcome To New Account Page</h2>
//         <p>
//           <label>
//             From Date{" "}
//             <input
//               type="text"
//               value={this.state.FromDate}
//               onChange={this.handleChange}
//             ></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             To Date{" "}
//             <input
//               type="text"
//               value={this.state.ToDate}
//               onChange={this.handleChange}
//             ></input>
//           </label>
//         </p>
//         <input type="submit" value="Generate"></input>
//       </div>
//     );
//   }
// }

// class LoanRepaymentReports extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h2>Welcome To Loan Repayment Report </h2>
//       </div>
//     );
//   }
// }

// class ReportsDashboard extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   callbackFunction = (
//     id,
//     phase,
//     actualDuration,
//     baseDuration,
//     startTime,
//     commitTime,
//     interaction
//   ) => {
//     console.log("Id is " + id + " ," + " phase is " + phase);
//     console.log(
//       "Actual Duration is " +
//         actualDuration +
//         " , " +
//         "Base Duration is " +
//         baseDuration
//     );
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <h2>Welcome To Reports Dashboard</h2>
//         <Profiler id="newAccounts" onRender={this.callbackFunction}>
//           <NewAccountReports></NewAccountReports>
//         </Profiler>
//         <Profiler id="loanRepayment" onRender={this.callbackFunction}>
//           <LoanRepaymentReports></LoanRepaymentReports>
//         </Profiler>
//       </React.Fragment>
//     );
//   }
// }

// const element = <ReportsDashboard></ReportsDashboard>;
// ReactDOM.render(element, document.getElementById("root"));

// class Employee extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees: [],
//       showModal: false,
//     };
//   }

//   editEmployee = () => {
//     this.setState({ showModal: !this.state.showModal });
//   };
//   componentDidMount() {
//     fetch("https://localhost:44346/api/employee")
//       .then((res) => res.json())
//       .then((result) => this.setState({ employees: result }));
//   }

//   render() {
//     return (
//       <div>
//         <h2>Employee Information</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Location</th>
//               <th>Salary</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.employees.map((emp) => (
//               <tr key={emp.Id}>
//                 <td>{emp.Id}</td>
//                 <td>{emp.Name}</td>
//                 <td>{emp.Location}</td>
//                 <td>{emp.Salary}</td>
//                 <td>
//                   <button onClick={this.editEmployee}>Edit</button>
//                   <Modal open={this.state.showModal} close={this.editEmployee}>
//                     <EmployeeModal employee={emp}></EmployeeModal>
//                   </Modal>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return this.props.open
//       ? ReactDOM.createPortal(
//           <div className="modal">
//             <button onClick={this.props.close}>X</button>
//             {this.props.children}
//           </div>,
//           document.body
//         )
//       : null;
//   }
// }

// class EmployeeModal extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h2>Employee Details </h2>
//         <p>
//           <label>
//             Employee ID{" "}
//             <input type="text" value={this.props.employee.Id}></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Name{" "}
//             <input type="text" value={this.props.employee.Name}></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Location{" "}
//             <input type="text" value={this.props.employee.Location}></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Salary{" "}
//             <input type="text" value={this.props.employee.Salary}></input>
//           </label>
//         </p>
//         <input type="submit" value="Save"></input>
//       </div>
//     );
//   }
// }

// const element = <Employee></Employee>;
// ReactDOM.render(element, document.getElementById("root"));
// function reportsHOC(InputComponent, inputData) {
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: [],
//         columns: inputData.columns,
//         header: inputData.header,
//       };
//     }

//     componentDidMount() {
//       fetch(inputData.url)
//         .then((res) => res.json())
//         .then((result) => this.setState({ data: result }));
//     }

//     render() {
//       return <Data data={this.state}></Data>;
//     }
//   };
// }

// class Data extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h2>{this.props.data.header}</h2>
//         <table>
//           <thead>
//             <tr>
//               {this.props.data.columns.map((c) => (
//                 <th>{c}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.data.data.map((r) => (
//               <tr key={r.Id}>
//                 {this.props.data.columns.map((c) => (
//                   <td>{r[c]}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// class Report extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div></div>;
//   }
// }

// const EmployeeReports = reportsHOC(Report, {
//   url: "https://localhost:44346/api/employee",
//   columns: ["Id", "Name", "Location", "Salary"],
//   header: "Employee Record",
// });

// const DepartmentReports = reportsHOC(Report, {
//   url: "https://localhost:44346/api/dept",
//   columns: ["Id", "Name", "Revenue"],
//   header: "Department Record",
// });
// class EmployeeReports extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://localhost:44346/api/Employee")
//       .then((res) => res.json())
//       .then((result) => {
//         this.setState({ employees: result });
//       });
//     console.log(this.state.employees);
//   }

//   render() {
//     return (
//       <div>
//         <h2>Employee Data</h2>
//         <table>
//           <thead>
//             <tr>
//               <td>ID</td>
//               <td>Name</td>
//               <td>Location</td>
//               <td>Salary</td>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.employees.map((emp) => (
//               <tr key={emp.Id}>
//                 <td>{emp.Id}</td>
//                 <td>{emp.Name}</td>
//                 <td>{emp.Location}</td>
//                 <td>{emp.Salary}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// class DepartmentReports extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dept: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://localhost:44346/api/dept")
//       .then((res) => res.json())
//       .then((result) => {
//         this.setState({
//           dept: result,
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Department Data</h2>
//         <table>
//           <thead>
//             <tr>
//               <td>ID</td>
//               <td>Name</td>
//               <td>Revenue</td>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.dept.map((departmnt) => (
//               <tr key={departmnt.Id}>
//                 <td>{departmnt.Id}</td>
//                 <td>{departmnt.Name}</td>
//                 <td>{departmnt.Revenue}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// class AdminDashBoard extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <EmployeeReports></EmployeeReports>
//         <DepartmentReports></DepartmentReports>
//       </React.Fragment>
//     );
//   }
// }

// const element = <AdminDashBoard></AdminDashBoard>;

// ReactDOM.render(element, document.getElementById("root"));
// const DemoComponent = React.forwardRef((props, ref) => {
//   function testClick() {
//     ref.current.focus();
//   }
//   return <button onClick={testClick}>Click</button>;
// });
// class Elevator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.elevatorRef = React.createRef();
//   }

//   render() {
//     return (
//       <div>
//         <h2>Welcome To Elevator Order Screen</h2>
//         <p>
//           <label>
//             Elevator Name <input type="text" ref={this.elevatorRef}></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Elevator Speed <input type="text"></input>
//           </label>
//         </p>
//         <p>
//           Elevator Load <input type="text"></input>
//         </p>
//         <Summary innerRef={this.elevatorRef}></Summary>
//         <DemoComponent ref={this.elevatorRef}></DemoComponent>
//       </div>
//     );
//   }
// }

// class Summary extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   focusInput = () => {
//     this.props.innerRef.current.focus();
//   };
//   render() {
//     return (
//       <div>
//         <h2>Summary Details</h2>
//         <p onClick={this.focusInput}>
//           <label>
//             Elevator Name <b>Elevator -1</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Elevator Speed <b>10m/s</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Elevator Load <b>550 Kg</b>
//           </label>
//         </p>
//       </div>
//     );
//   }
// }

// function testComponent() {
//   let testRef = null;
//   function handleClick() {
//     testRef.focus();
//   }

//   return (
//     <div>
//       <input type="text" ref={(e) => (testRef = e)}></input>
//       <input
//         type="button"
//         value="Focus on the text box"
//         onClick={handleClick}
//       ></input>
//     </div>
//   );
// }

// const element = <Elevator></Elevator>;
// ReactDOM.render(element, document.getElementById("root"));
// class QuantityIncrement extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { quantity: 0 };
//     this.quantityref = React.createRef();
//   }
//   incrementQuantity = () => {
//     this.quantityref.current.value++;
//   };
//   render() {
//     alert("Text message");
//     console.log(this.state.quantity);
//     return (
//       <div>
//         <p>
//           <label>
//             Enter Quantity <input type="text" ref={this.quantityref}></input>
//             <button onClick={this.incrementQuantity}>+</button>
//           </label>
//         </p>
//       </div>
//     );
//   }
// }

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.userNameRef = React.createRef();
//   }

//   componentDidMount() {
//     this.userNameRef.current.focus();
//   }

//   render() {
//     return (
//       <div>
//         <h2>Login Information</h2>
//         <p>
//           <label>
//             User Name <input type="text" ref={this.userNameRef}></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Password <input type="text"></input>
//           </label>
//         </p>
//         <button>Login</button>
//       </div>
//     );
//   }
// }

// class VideoPlayer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.videoRef = React.createRef();
//   }

//   playVideo = () => {
//     this.videoRef.current.play();
//   };

//   pauseVideo = () => {
//     this.videoRef.current.pause();
//   };

//   render() {
//     return (
//       <div>
//         <video ref={this.videoRef} width="300" height="200" controls>
//           <source src={video} type="video/mp4"></source>
//         </video>
//         <div>
//           <button onClick={this.playVideo}>Play</button>
//           <button onClick={this.pauseVideo}>Pause</button>
//         </div>
//       </div>
//     );
//   }
// }

// const element = <VideoPlayer></VideoPlayer>;
// ReactDOM.render(element, document.getElementById("root"));
// class CustomErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: null };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.log(error);
//     console.log(errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <React.Fragment>
//           <div>
//             <h2>We are having issue while loading your preferences</h2>
//           </div>
//           <div>
//             <h2>Wait for some moment or try after some time</h2>
//           </div>
//         </React.Fragment>
//       );
//     } else {
//       return this.props.children;
//     }
//   }
// }
// class OrderComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quantity: "",
//       address: "",
//     };
//   }
//   orderInfoChanged = (value) => {
//     this.setState({ quantity: value });
//   };

//   addressChange = (value) => {
//     this.setState({ address: value });
//   };
//   render() {
//     return (
//       // React Fragment
//       <>
//         <h1>Product Order </h1>
//         <ProductInformationComponent
//           quantity={this.state.quantity}
//           onQuantityChange={this.orderInfoChanged}
//         ></ProductInformationComponent>
//         <AddressInformationComponent
//           address={this.state.address}
//           onAddressChange={this.addressChange}
//         ></AddressInformationComponent>
//         <SummaryComponent
//           quantity={this.state.quantity}
//           address={this.state.address}
//           onQuantityChange={this.orderInfoChanged}
//         ></SummaryComponent>
//       </>
//     );
//   }
// }

// class ProductInformationComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   handleChange = (e) => {
//     this.props.onQuantityChange(e.target.value);
//   };
//   render() {
//     return (
//       <div style={{ border: "3px solid red" }}>
//         <h2>Product Information </h2>
//         <p>
//           <label>
//             Product Name
//             <select>
//               <option value="Nutrilite">Nutrilite</option>
//               <option value="Artistry">Artistry</option>
//               <option value="Persona">Persona</option>
//             </select>
//           </label>
//         </p>
//         <p>
//           <label>
//             Product Quantity{" "}
//             <input
//               type="text"
//               value={this.props.quantity}
//               onChange={this.handleChange}
//             ></input>
//           </label>
//         </p>
//       </div>
//     );
//   }
// }

// class AddressInformationComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   handleChange = (e) => {
//     this.props.onAddressChange(e.target.value);
//   };
//   render() {
//     return (
//       <div style={{ border: "3px solid red" }}>
//         <h2>Address Information</h2>
//         <p>
//           <label>
//             Address{" "}
//             <textarea
//               value={this.props.address}
//               onChange={this.handleChange}
//             ></textarea>
//           </label>
//         </p>
//         <CustomErrorBoundary>
//           <PreferredAddressComponent></PreferredAddressComponent>
//         </CustomErrorBoundary>
//       </div>
//     );
//   }
// }

// class PreferredAddressComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     // throw new Error("Not able to show Preferred Address");
//     return (
//       <div>
//         <h2>Your Existing Address </h2>
//         <p>
//           Office Address <br></br>
//           Bagmane Tech World,Outer Ring Road,Bangalore,Karnataka
//         </p>
//       </div>
//     );
//   }
// }

// class SummaryComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   handleChange = (e) => {
//     this.props.onQuantityChange(e.target.value);
//   };
//   render() {
//     return (
//       <div style={{ border: "3px solid red" }}>
//         <h2>Summary Information</h2>
//         <p>
//           <label>
//             Product Name <b>Nutrilite</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Product Quantity{" "}
//             <input
//               type="text"
//               value={this.props.quantity}
//               onChange={this.handleChange}
//             ></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Address <b>{this.props.address}</b>
//           </label>
//         </p>
//         <button>Place Order</button>
//       </div>
//     );
//   }
// }

// const element = <OrderComponent></OrderComponent>;
// ReactDOM.render(element, document.getElementById("root"));
// const validateEmployee = (empData) => {
//   const errors = {};

//   if (!empData.Name) {
//     errors.Name = "Please enter your name";
//   } else if (empData.Name.length > 20) {
//     errors.Name = "Name cannot exceed more than 20 characters";
//   }

//   if (!empData.Location) {
//     errors.Location = "Location cannot be left blank";
//   }

//   if (!empData.EmailId) {
//     errors.EmailId = "Email Address cannot be left blank";
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)
//   ) {
//     errors.EmailId = "Invalid Email Address";
//   }
//   return errors;
// };

// const EmployeeComponent = () => {
//   // const formik = useFormik({
//   //   initialValues: {
//   //     Id: "",
//   //     Name: "",
//   //     Location: "",
//   //     Salary: "",
//   //     EmailId: "",
//   //   },
//   //   // validate: validateEmployee,
//   //   validationSchema: yup.object({
//   //     Name: yup
//   //       .string()
//   //       .max(20, "Name cannot exceed more than 20 characters")
//   //       .required("Please enter your name"),
//   //     Location: yup.string().required("Please enter your location"),
//   //     EmailId: yup
//   //       .string()
//   //       .email("Invalid Email")
//   //       .required("Please enter your email"),
//   //   }),
//   //   onSubmit: (values) => {
//   //     alert(JSON.stringify(values));
//   //   },
//   // });

//   return (
//     <Formik
//       initialValues={{
//         Id: "",
//         Name: "",
//         Location: "",
//         Salary: "",
//         EmailId: "",
//         Designation: "",
//       }}
//       // validate: validateEmployee,
//       validationSchema={yup.object({
//         Name: yup
//           .string()
//           .max(20, "Name cannot exceed more than 20 characters")
//           .required("Please enter your name"),
//         Location: yup.string().required("Please enter your location"),
//         EmailId: yup
//           .string()
//           .email("Invalid Email")
//           .required("Please enter your email"),
//       })}
//       onSubmit={(values) => {
//         alert(JSON.stringify(values));
//       }}
//     >
//       {(props) => (
//         <div>
//           <h3>New Employee Form</h3>
//           <Form>
//             <p>
//               <label>Employee Id </label>
//               <Field name="Id" type="text"></Field>
//             </p>
//             <p>
//               <label>Employee Name </label>
//               <Field name="Name" type="text"></Field>
//               <ErrorMessage name="Name"></ErrorMessage>
//             </p>
//             <p>
//               <label>Employee Location </label>
//               <Field name="Location" type="text"></Field>
//               <ErrorMessage name="Location"></ErrorMessage>
//             </p>
//             <p>
//               <label>Employee Salary</label>
//               <Field name="Salary" type="text"></Field>
//             </p>
//             <p>
//               <label>Employee Email Address</label>
//               <Field name="EmailId" type="text"></Field>
//               <ErrorMessage name="EmailId"></ErrorMessage>
//             </p>
//             <p>
//               <label>Employee Designation </label>
//               <Field name="Designation" as="select">
//                 <option value="SoftwareEngineer">Software Engineer</option>
//                 <option value="SeniorSoftwareEngineer">
//                   Senior Software Engineer
//                 </option>
//                 <option value="Lead">Lead</option>
//               </Field>
//             </p>
//             <button type="submit" disabled={!props.isValid}>
//               Create
//             </button>
//           </Form>
//         </div>
//       )}
//     </Formik>

//     // <div>
//     //   <h3>New Employee Form</h3>
//     //   <form onSubmit={formik.handleSubmit}>
//     //     <p>
//     //       <label htmlFor="Id">Employee Id </label>
//     //       <input name="Id" {...formik.getFieldProps("Id")}></input>
//     //     </p>
//     //     <p>
//     //       <label htmlFor="Name">Employee Name </label>
//     //       <input name="Name" {...formik.getFieldProps("Name")}></input>
//     //       {formik.touched.Name && formik.errors.Name ? (
//     //         <span style={{ color: "red" }}>{formik.errors.Name}</span>
//     //       ) : null}
//     //     </p>
//     //     <p>
//     //       <label htmlFor="Location">Location </label>
//     //       <input name="Location" {...formik.getFieldProps("Location")}></input>
//     //       {formik.touched.Location && formik.errors.Location ? (
//     //         <span style={{ color: "red" }}>{formik.errors.Location}</span>
//     //       ) : null}
//     //     </p>
//     //     <p>
//     //       <label htmlFor="Salary">Employee Salary </label>
//     //       <input name="Salary" {...formik.getFieldProps("Salary")}></input>
//     //     </p>
//     //     <p>
//     //       <label htmlFor="EmailId">Email Address </label>
//     //       <input name="EmailId" {...formik.getFieldProps("EmailId")}></input>
//     //       {formik.touched.EmailId && formik.errors.EmailId ? (
//     //         <span style={{ color: "red" }}>{formik.errors.EmailId}</span>
//     //       ) : null}
//     //     </p>
//     //     <button type="submit">Create</button>
//     //   </form>
//     // </div>
//   );
// };

// const element = <EmployeeComponent></EmployeeComponent>;
// ReactDOM.render(element, document.getElementById("root"));

// class EmployeeComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       employee: {
//         Id: "",
//         Name: "",
//         Location: "",
//         Salary: "",
//       },
//     };
//   }

//   changeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState({
//       employee: {
//         ...this.state.employee,
//         [name]: value,
//       },
//     });
//   };
//   onCreateEmployee = () => {
//     console.log(this.state.employee);
//   };

//   render() {
//     return (
//       <div>
//         <h3>New Employee Form...</h3>
//         <form>
//           <p>
//             <label>
//               Employee Id{" "}
//               <input
//                 type="text"
//                 name="Id"
//                 value={this.state.employee.Id}
//                 onChange={this.changeHandler}
//               ></input>
//             </label>
//           </p>
//           <p>
//             <label>
//               Employee Name{" "}
//               <input
//                 type="text"
//                 name="Name"
//                 value={this.state.employee.Name}
//                 onChange={this.changeHandler}
//               ></input>
//             </label>
//           </p>
//           <p>
//             <label>
//               Employee Location{" "}
//               <input
//                 type="text"
//                 name="Location"
//                 value={this.state.employee.Location}
//                 onChange={this.changeHandler}
//               ></input>
//             </label>
//           </p>
//           <p>
//             <label>
//               Employee Salary{" "}
//               <input
//                 type="text"
//                 name="Salary"
//                 value={this.state.employee.Salary}
//                 onChange={this.changeHandler}
//               ></input>
//             </label>
//           </p>
//         </form>
//         <button onClick={this.onCreateEmployee}>Create</button>
//       </div>
//     );
//   }
// }

// const element = <EmployeeComponent></EmployeeComponent>;
// ReactDOM.render(element, document.getElementById("root"));
// class EmployeeComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "",
//     };
//   }

//   onCreateEmployee = () => {
//     let employeeInfo = {
//       Id: this.refs.Id.value,
//       Name: this.refs.Name.value,
//       Location: this.refs.Location.value,
//       Salary: this.refs.Salary.value,
//     };
//     console.log(JSON.stringify(employeeInfo));
//     fetch("https://localhost:44346/api/employee", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(employeeInfo),
//     })
//       .then((r) => r.json())
//       .then((result) => {
//         this.setState({ message: "New Employee Entered Successfully" });
//       });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Please enter Employee Details</h2>
//         <p>
//           <label>
//             Employee Id: <input type="text" ref="Id"></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Name: <input type="text" ref="Name"></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Location: <input type="text" ref="Location"></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Salary: <input type="text" ref="Salary"></input>
//           </label>
//         </p>
//         <button onClick={this.onCreateEmployee}>Create Employee</button>
//         <p>{this.state.message}</p>
//       </div>
//     );
//   }
// }

// const element = <EmployeeComponent></EmployeeComponent>;

// ReactDOM.render(element, document.getElementById("root"));
// class EmployeeComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://localhost:44346/api/Employee")
//       .then((res) => res.json())
//       .then((result) => {
//         this.setState({ employees: result });
//       });
//   }
//   render() {
//     return (
//       <div>
//         <h3>Employee Details</h3>
//         <table border="{{style:1px solid}}">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Location</th>
//               <th>Salary</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.employees.map((emp) => (
//               <tr key={emp.Id}>
//                 <td>{emp.Id}</td>
//                 <td>{emp.Name}</td>
//                 <td>{emp.Location}</td>
//                 <td>{emp.Salary}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// const element = <EmployeeComponent></EmployeeComponent>;

// ReactDOM.render(element, document.getElementById("root"));
// function Employee(props) {
//   console.log(props);
//   return (
//     <div style={{ border: "3px solid blue" }}>
//       <p>
//         <label>
//           Employee Id: <b>{props.data.Id}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Name: <b>{props.data.Name}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Location: <b>{props.data.Location}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Salary: <b>{props.data.Salary}</b>
//         </label>
//       </p>
//     </div>
//   );
// }

// function DisplayEmployeeInfo(props) {
//   const empList = props.employeeList;
//   console.log(empList);
//   const listElement = empList.map((emp) => (
//     <Employee data={emp} key={emp.Id}></Employee>
//   ));
//   return <div>{listElement}</div>;
// }

// const Employees = [
//   { Id: 101, Name: "John Levis", Location: "New York", Salary: 65000 },
//   { Id: 102, Name: "Robert", Location: "New Jersey", Salary: 78000 },
//   { Id: 103, Name: "Adam", Location: "Ohio", Salary: 98000 },
// ];

// const element = (
//   <DisplayEmployeeInfo employeeList={Employees}></DisplayEmployeeInfo>
// );

// ReactDOM.render(element, document.getElementById("root"));
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
