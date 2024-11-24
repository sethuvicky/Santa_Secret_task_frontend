import React, { useState } from "react";
import axios from "../api/api";
import "../styles/styles.css";

const FileUpload = ({ onAssignmentsGenerated }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (files.length !== 2) {
      setMessage(
        "Please upload exactly two files: one for the employee list and one for the previous year's Secret Santa list."
      );
      return;
    }

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));

    try {
      await axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const response = await axios.get("/generate");
      onAssignmentsGenerated(response.data);
      setMessage(
        "This year's Secret Santa list has been generated successfully!"
      );
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload Employee List and Previous Year's Secret Santa List</h2>
      <p>Please upload exactly two files:</p>
      <ul>
        <li>
          <strong>Employee List</strong> - The current list of employees.
        </li>
        <li>
          <strong>Previous Year's Secret Santa List</strong> - The Secret Santa
          assignments from the previous year.
        </li>
      </ul>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Generating..." : "Generate This Year's Secret Santa List"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
