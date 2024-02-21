import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { FaEllipsisVertical, FaPlus, FaFilePen, FaRegCircleCheck } from "react-icons/fa6";
import './index.css'

function AssignmentList() {
  const { courseId } = useParams();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item list-group-item-secondary kanbas-module-header-padding">
          <div>
            <b className="h5">Assignments</b>
            <FaEllipsisVertical className="float-end mt-1"/>
            <FaPlus className="float-end mt-1 me-3"/>
            <div className="border border-dark rounded-pill float-end me-3 p-1 kanbas-assignment-total">
              40% of Total
            </div>
          </div>
        </li>

        {courseAssignments.map((assignment) => (
          <li
            key={assignment._id}
            className="list-group-item py-2 kanbas-assignment-border"
          >
            <div>
              <FaEllipsisVertical className="float-end mt-2"/>
              <FaRegCircleCheck className="float-end mt-2 me-3 text-success ps-5"/>
              <h5 className="float-start mt-1 mb-1">
                <FaFilePen className="text-success ms-3 me-4"/>
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="text-decoration-none text-dark">
                  {assignment.title}
                </Link>
              </h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AssignmentList;