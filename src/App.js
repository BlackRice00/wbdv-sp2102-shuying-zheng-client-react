import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import CourseTable from "./components/course-table";

function App() {
  return (
    <div className="container-fluid">
      <CourseManager/>
    </div>
  );
}

export default App;
