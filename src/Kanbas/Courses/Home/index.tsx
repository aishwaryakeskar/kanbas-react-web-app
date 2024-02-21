import ModuleList from "../Modules/List";
import CourseStatus from "./CourseStatus";

const Home = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-9">
            <ModuleList />
            </div>
            <div className="col-md-3">
            <CourseStatus />
            </div>
        </div>
    </div>
  );
};

export default Home;
