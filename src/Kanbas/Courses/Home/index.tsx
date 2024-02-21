import ModuleList from "../Modules/List";
import CourseStatus from "./CourseStatus";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <div className="float-start kanbas-edit-column me-4"><ModuleList/></div>
            <div className="float-start col-lg-3"><CourseStatus/></div>
        </div>
    );
}

export default Home;
