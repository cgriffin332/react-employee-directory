import React, { Component } from "react";
import axios from "axios";

class Table extends Component {
  state = {
    employeeData: [],
    searchValue: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees() {
    axios
      .get("https://randomuser.me/api/?results=200&nat=us")
      .then((response) => {
        this.setState({ employeeData: response.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p className="text-center" >Search Employees:</p>
            <input
              className="form-control mb-4"
              onChange={(event) => {
                this.setState({ searchValue: event.target.value });
              }}
            ></input>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employeeData
                  .filter((employee) =>
                    employee.name.last
                      .toLowerCase()
                      .startsWith(this.state.searchValue.toLowerCase())
                  )
                  .map((employee, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          alt="employee"
                          src={employee.picture.thumbnail}
                        ></img>
                      </td>
                      <td>{employee.name.first}</td>
                      <td>{employee.name.last}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.email}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Table;
