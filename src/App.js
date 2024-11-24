import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import AssignmentsTable from "./components/AssignmentsTable";

const App = () => {
  const [assignments, setAssignments] = useState([]);

  return (
    <div className="app">
      <h1>Secret Santa Generator</h1>
      <FileUpload onAssignmentsGenerated={setAssignments} />
      {assignments.length > 0 && <AssignmentsTable assignments={assignments} />}
    </div>
  );
};

export default App;
