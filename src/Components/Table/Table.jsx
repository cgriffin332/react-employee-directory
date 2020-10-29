import React, { Component } from "react";
import API from "../utils/API";

class Table extends Component {
  render() {
    return (
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
          <tr>
            <td>
              <img alt="employee" src="http://www.fillmurray.com/100/100"></img>
            </td>
            <td>Bill</td>
            <td>Murray</td>
            <td>123-456-7890</td>
            <td>www.billmurray@gmail.com</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;