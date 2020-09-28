import React from "react";
import "./App.css";
import Title from "./components/Title/title";
import employees from "./employee.json";
// import Wrapper from "./components/Wrapper";

// need to create the movies.json file like Max did with id, title, year

class Employees extends React.Component {
  state = {
    employeeList: employees,
    sortOrder: ''
  }
     handleSort = () => {
      console.log("test")
   let newSort
   if (this.state.sortOrder !== "des"){
   newSort = this.state.employeeList.sort((a, b) => {
      return a.departmentId - b.departmentId; 
     } 
   );
}
else {
  newSort = this.state.employeeList.sort((a, b) => {
    return b.departmentId - a.departmentId; 
   } 
 );
}
console.log(newSort);
const newSortOrder = this.state.sortOrder === "des"? "asc": "des"
this.setState({employeeList: newSort, sortOrder: newSortOrder})
}
  render() {
    return (
      <>
     <Title>Employee Directory </Title>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col" onClick={()=> this.handleSort()}>Employee ID#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              {/* <th scope="col">Department</th> */}
              <th scope="col" onClick={()=> this.handleSort()}>Department ID</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employeeList.map(employees => (
              <tr>
                <th scope="row">{employees.id}</th>
                <td>{employees.firstName}</td>
                <td>{employees.lastName}</td>
                <td>{employees.departmentId}</td>
              </tr>
            ))}
          </tbody>
        </table> 
      </> 
    );
  };
}

export default Employees