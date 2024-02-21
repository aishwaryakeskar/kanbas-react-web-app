import "./index.css";
import {
    FaBan,
    FaBell,
    FaBullhorn,
    FaCircleCheck,
    FaCloudArrowUp,
    FaCrosshairs,
    FaSquarePollVertical,
  } from 'react-icons/fa6';
  
  const CourseStatus = () => {
    return (
      <div className="mb-3">
        <h5>Course Status</h5>
  

        <button className="btn btn-light my-2">
          <FaBan className="m-1"></FaBan>Unpublish
        </button>
        <button className="btn" style={{ background: 'green', color: "white" }}>
          <FaCircleCheck style={{
              color: 'white',
              borderRadius: '50%',
              marginRight: '3px',
            }}></FaCircleCheck>
          Published
        </button>

        <button type="submit" className="btn btn-light kanbas-item-width-250 mb-1">
            <div className="ms-2 float-start">
            <FaCloudArrowUp style={{ marginRight: '8px' }} />
                Import from Commons</div>
        </button>
        <br/>
        <button type="submit" className="btn btn-light kanbas-item-width-250 mb-1">
        <div className="ms-2 float-start">
            <FaCrosshairs style={{ marginRight: '8px' }} />
            Choose Home Page
        </div>
        </button>
        <br/>
        <button type="submit" className="btn btn-light kanbas-item-width-250 mb-1">
        <div className="ms-2 float-start">
            <FaSquarePollVertical style={{ marginRight: '8px' }} />
            View Course Stream</div>
        </button>
        <br/>
        <button type="submit" className="btn btn-light kanbas-item-width-250 mb-1">
        <div className="ms-2 float-start">
            <FaBullhorn style={{ marginRight: '8px' }} />
            New Announcement</div>
        </button>
        <br/>
        <button type="submit" className="btn btn-light kanbas-item-width-250 mb-1">
        <div className="ms-2 float-start">
            <FaSquarePollVertical style={{ marginRight: '8px' }} />
            New Analytics</div>
        </button>
        <br/>
        <button type="submit" className="btn btn-light kanbas-item-width-250 mb-1">
        <div className="ms-2 float-start">
            <FaBell style={{ marginRight: '8px' }} />
            View Course Notifications</div>
        </button>
        <br/>
      </div>
    );
  };

export default CourseStatus;