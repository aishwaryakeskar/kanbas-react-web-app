import React,  { useState }  from "react";
import { Link } from "react-router-dom";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {
 
  return (
    <div className="p-4">
      <h1>Dashboard</h1>   
      <div className="mb-2">
        <h5>Course</h5>
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control mb-2"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control mb-2"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />

        <button onClick={addNewCourse} className="btn btn-success mb-2 me-2">
          Add
        </button>

        <button onClick={updateCourse} className="btn btn-primary mb-2 me-2">
          Update
        </button>
      </div>

      <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    <br/>
                    <button 
                    className="btn btn-warning ms-1 me-1 mb-1"
                    onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>

                    <button 
                    className="btn btn-danger ms-1 me-1 mb-1"
                    onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>

                  </Link>
                  <p className="card-text">{course.name}</p>
                  
                  <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;