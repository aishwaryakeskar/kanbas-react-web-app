import { useState } from "react";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFilter, FaCog, FaSignInAlt, FaSignOutAlt, FaAngleDown } from 'react-icons/fa';

import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const [studentSearch, setStudentSearch] = useState("");
  const [assignmentSearch, setAssignmentSearch] = useState("");
  const [tempStudentSearch, setTempStudentSearch] = useState("");
  const [tempAssignmentSearch, setTempAssignmentSearch] = useState("");

  const handleFilter = () => {
    setStudentSearch(tempStudentSearch);
    setAssignmentSearch(tempAssignmentSearch);
  };

  const filteredAssignments = assignments.filter(
    (assignment) =>
      assignment.course === courseId &&
      assignment.title.toLowerCase().includes(assignmentSearch.toLowerCase())
  );

  const filteredEnrollments = enrollments.filter(
    (enrollment) =>
      enrollment.course === courseId &&
      users.find((user) => user._id === enrollment.user)?.firstName
        .toLowerCase()
        .includes(studentSearch.toLowerCase())
  );

  return (
    <div className="m-3">
      <div className="row mb-5">
        <div className="col">
          <h1>Grades</h1>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center">
    
        <div>
        <a href={window.location.href}>
          <button type="button" className="btn btn-light float-end">
            <FaCog className="mb-1"/>
          </button>
        </a>
        <a href={window.location.href}>
          <button type="button" className="btn btn-light float-end me-1">
            <FaSignOutAlt className="mb-1 me-1"/>
            Export
            <FaAngleDown className="mb-1"/>
          </button>
        </a>
        <a href={window.location.href}>
          <button type="button" className="btn btn-light float-end me-1">
            <FaSignInAlt className="mb-1 me-1"/>
            Import
          </button>
        </a>
      </div>

        </div>
      </div>
      <div className="row search-container">

      <div className="col-sm-6 mb-3">
          <label htmlFor="studentSearch" className="form-label mb-0">Student Names</label>
          <div className="top-search">
            <table>
              <tbody>
                <tr>

                  <td width="100%">
                    <input
                      id="studentSearch"
                      type="text"
                      className="form-control no-border"
                      placeholder="Search Student Names"
                      value={tempStudentSearch}
                      onChange={(e) => setTempStudentSearch(e.target.value)}
                    />
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <label htmlFor="assignmentSearch" className="form-label mb-0">Assignment Names</label>
          <div className="top-search">
            <table>
              <tbody>
                <tr>

                  <td width="100%">
                    <input
                      id="assignmentSearch"
                      type="text"
                      className="form-control no-border"
                      placeholder="Search Assignments"
                      value={tempAssignmentSearch}
                      onChange={(e) => setTempAssignmentSearch(e.target.value)}
                    />
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="filter-button-container">
          <button className="btn btn-light filter-button" onClick={handleFilter}>
            <FaFilter className="me-2"/> Apply Filters
          </button>
        </div>
        </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>
              {/* Render filtered assignments */}
              {filteredAssignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEnrollments.map((enrollment, index) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment._id} className={index % 2 === 0 ? "even" : "odd"}>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {filteredAssignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td key={assignment._id}>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;