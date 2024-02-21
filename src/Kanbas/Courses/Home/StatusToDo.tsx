import "./index.css";
import { FaCircleExclamation } from "react-icons/fa6";


function StatusToDo() {
  const todolist = [
    {
      title: "Grade A1",
      points: "100 points",
      dueDate: "Feb 18 at 11:59pm",
    },
    {
      title: "Grade A2",
      points: "100 points",
      dueDate: "Mar 03 at 10:00pm",
    },
    {
      title: "Grade A3",
      points: "100 points",
      dueDate: "Mar 14 at 10:00pm",
    },
  ];

  return (
    <div>
      <div>To-Do</div>
      <hr />
      {todolist.map((todoitem, index) => (
        <div className="kanbas-red float-left mb-3" key={index}>
          <FaCircleExclamation className="mt-1 me-1" />
          <a href={window.location.href} className="kanbas-hyperlink ps-1">
            {todoitem.title}
          </a>
          <div className="ps-4">{todoitem.points}</div>
          <div className="ps-4">{todoitem.dueDate}</div>
        </div>
      ))}
    </div>
  );
}
export default StatusToDo;