import React from "react";
import "./App.css";
import employees from "./employee.json";
// import Wrapper from "./components/Wrapper";

// need to create the movies.json file like Max did with id, title, year

class Employees extends React.Component {
  state = {
    employeeList: employees,
    sortOrder: ''
  }
  //    handleSort =() => {
  //     console.log(test);
  //     let newSort 
  //     if (this.state.employeeList !== "des"){

  //    newSort = this.state.employeeList.sort(function(a, b){
  //     return a.year - b.year; this.setState({employeeList: newSort})
  //    } 

  render() {
    return (
      <>
      {/* <Wrapper> */}
        <table className="table table-dark mt-15">
          <thead>
            <tr className="mt-10">
              <th scope="col">Employee ID#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Department</th>
              {/* <th scope="col" onClick={()=> this.handleSort()}>Department</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.employeeList.map(employees => (
              <tr>
                <th scope="row">{employees.id}</th>
                <td>{employees.firstName}</td>
                <td>{employees.lastName}</td>
                <td>{employees.department}</td>
              </tr>
            ))}
          </tbody>
        </table>


        {/* </Wrapper> */}
      </>
      
    );
  }
}

export default Employees