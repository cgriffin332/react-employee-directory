import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import "./Table.css";


class Table extends Component {
  state = {
    employeeData: [],
    searchValue: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  // axios call to get all employees and set state
  getEmployees = () => {
    axios
      .get("https://randomuser.me/api/?results=200&nat=us")
      .then((response) => {
        this.setState({
          employeeData: response.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  // sort by birth date oldest
  sortDateO = () => {
    this.setState({
      employeeData: this.state.employeeData.sort(function (a, b) {
        if (a.dob.date < b.dob.date) {
          return -1;
        }
        if (a.dob.date > b.dob.date) {
          return 1;
        }
        return 0;
      }),
    });
  };

  // sort by birth date youngest
  sortDateY = () => {
    this.setState({
      employeeData: this.state.employeeData.sort(function (a, b) {
        if (a.dob.date < b.dob.date) {
          return 1;
        }
        if (a.dob.date > b.dob.date) {
          return -1;
        }
        return 0;
      }),
    });
  };

  // sort by first name a-z
  sortFirstA = () => {
    this.setState({
      employeeData: this.state.employeeData.sort(function (a, b) {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      }),
    });
  };
  //sort by first name z-a
  sortFirstZ = () => {
    this.setState({
      employeeData: this.state.employeeData.sort(function (a, b) {
        if (a.name.first < b.name.first) {
          return 1;
        }
        if (a.name.first > b.name.first) {
          return -1;
        }
        return 0;
      }),
    });
  };
  //sort bl last name a-z
  sortLastA = () => {
    this.setState({
      employeeData: this.state.employeeData.sort(function (a, b) {
        if (a.name.last < b.name.last) {
          return -1;
        }
        if (a.name.last > b.name.last) {
          return 1;
        }
        return 0;
      }),
    });
  };
  //sort by last name z-a
  sortLastZ = () => {
    this.setState({
      employeeData: this.state.employeeData.sort(function (a, b) {
        if (a.name.last < b.name.last) {
          return 1;
        }
        if (a.name.last > b.name.last) {
          return -1;
        }
        return 0;
      }),
    });
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p className="text-center">Search Employee's Last Name:</p>
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
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">
                    First<span onClick={this.sortFirstA}> (↑)</span>
                    <span onClick={this.sortFirstZ}> (↓)</span>
                  </th>
                  <th scope="col">
                    Last<span onClick={this.sortLastA}> (↑)</span>
                    <span onClick={this.sortLastZ}> (↓)</span>
                  </th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">
                    DOB<span onClick={this.sortDateY}> (↑)</span>
                    <span onClick={this.sortDateO}> (↓)</span>
                  </th>
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
                      <td>{moment(employee.dob.date).format("MM/DD/YYYY")}</td>
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
