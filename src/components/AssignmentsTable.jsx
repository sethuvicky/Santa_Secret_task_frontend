import React from "react";
import { downloadAsExcel } from "../utils/fileDownloader";

const AssignmentsTable = ({ assignments }) => {
  return (
    <div className="assignments-table">
      <h3>Secret Santa Assignments</h3>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Secret Child Name</th>
            <th>Secret Child Email</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td>{assignment.Employee_Name}</td>
              <td>{assignment.Employee_EmailID}</td>
              <td>{assignment.Secret_Child_Name}</td>
              <td>{assignment.Secret_Child_EmailID}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => downloadAsExcel(assignments)}>
        Download as Excel
      </button>
    </div>
  );
};

export default AssignmentsTable;
