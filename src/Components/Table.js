
import React, {useState} from "react";
import "./From.css";
import Delete from "./Practice"
function Table({ tableData, Delete }) {
  

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Role</th>
          <th>Email Address</th>
          <th> Mobile</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index} >
              
              <td>{ data.fullName }</td>
              <td>{ data.Role }</td>
              <td>{ data.emailAddress }</td>
              <td>{ data.Mobile }</td>

              <td>
                <button id="Edit">Edit</button>
              </td>
              <td>
                <button id="delit" onClick={Delete}>
              
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
