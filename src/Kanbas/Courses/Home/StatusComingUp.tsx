import "./index.css";
import { FaRegCalendarAlt } from "react-icons/fa";

function StatusComingUp() {
  const items = [
    {
      title: "Rocket Science Basics",
      course: "RS101 - Spring 2024",
      time: "Feb 21 at 2:30am",
    },
    {
      title: "Advanced Aerodynamics Lecture",
      course: "RS102 - Spring 2024",
      time: "Feb 23 at 4pm",
    },
    {
      title: "Spacecraft Design Guest Talk",
      course: "RS103 - Spring 2024",
      time: "Feb 23 at 6pm",
    },
  ];

  return (
    <div>
      <div>
        <div className="float-start">Coming Up</div>
        <div className="float-end">
          <FaRegCalendarAlt className="float-start mt-1 me-1"/>
          <a
            href={window.location.href}
            className="kanbas-hyperlink float-start"
          >
            View Calendar
          </a>
        </div>
      </div>

      <br />
      <hr />

      {items.map((event, index) => (
        <div key={index} className="float-left mb-3">
          <FaRegCalendarAlt className="float-start mt-1 me-1"/>
          <a href={window.location.href} className="kanbas-hyperlink ps-1">
            {event.title}
          </a>
          <div className="ps-4">{event.course}</div>
          <div className="ps-4">{event.time}</div>
        </div>
      ))}
    </div>
  );
}
export default StatusComingUp;