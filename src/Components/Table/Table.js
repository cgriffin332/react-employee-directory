import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  alt="employee"
                  src="http://www.fillmurray.com/200/200"
                ></img>
              </td>
              <td>Bill</td>
              <td>Murray</td>
              <td>123-456-7890</td>
              <td>www.billmurray@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
