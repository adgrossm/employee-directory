import React from "react";
import "./App.css";
import Title from "./components/Title/title";
import employees from "./employee.json";
import Wrapper from "./components/Wrapper/Wrapper";
import Tbody from './components/Tbody'

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
  handleChange =(e)=>{
    console.log(e.target.value)
    const newList = employees.filter(employee=>employee.firstName.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({employeeList: newList})
  }
render() {
  return (
    <>

      <Title>Employee Directory </Title>
      <Wrapper>
        <div><input type="text" onChange={e=>this.handleChange(e)} size="50" placeholder="type to search for the employee's first name"/></div>
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
                <Tbody employees={this.state.employeeList}/>
          </tbody>
        </table>
      </Wrapper>
    </>
  );
};
}

export default Employees