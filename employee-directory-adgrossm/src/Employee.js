import React from "react";
import "./App.css";
import Title from "./components/Title/title";
import employees from "./employee.json";
import Wrapper from "./components/Wrapper/Wrapper";


class Employees extends React.Component {
  state = {
    employeeList: employees,
    sortOrder: ''
  }
  handleSort = (whatToSort) => {
    console.log("test")
    const newSort = this.state.employeeList.sort((a, b) => {
      if (this.state.sortOrder !== "des") {
        return a[whatToSort] - b[whatToSort];
      } else {
        return b[whatToSort] - a[whatToSort];
      }
    }
    );
    console.log(newSort);
    const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des"
    this.setState({ employeeList: newSort, sortOrder: newSortOrder })
  }

  handleNameSort = (nameToSort) => {
    const newSort = this.state.employeeList.sort((a, b) => {
      var nameA = a[nameToSort].toUpperCase();
      var nameB = b[nameToSort].toUpperCase();
      if (this.state.sortOrder !== "des") {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      } else {
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      }
    }
    );
    console.log(newSort);
    const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des"
    this.setState({ employeeList: newSort, sortOrder: newSortOrder })
  };

render() {
  return (
    <>

      <Title>Employee Directory </Title>
      <Wrapper>
        {/* <div><input type="text" /><button>Search</button></div> */}
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col" onClick={() => this.handleSort("id")}>Employee ID#</th>
              <th scope="col" onClick={()=> this.handleNameSort("firstName")}>First Name</th>
              <th scope="col" onClick={()=> this.handleNameSort("lastName")}>Last Name</th>
              <th scope="col" onClick={()=> this.handleNameSort("department")}>Department</th>
              <th scope="col" onClick={() => this.handleSort("departmentId")}>Department ID</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employeeList.map(employees => (
              <tr>
                <th scope="row">{employees.id}</th>
                <td>{employees.firstName}</td>
                <td>{employees.lastName}</td>
                <td>{employees.department}</td>
                <td>{employees.departmentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
    </>
  );
};
}

export default Employees