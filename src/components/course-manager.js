import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

class CourseManager extends React.Component {

    state = {
        courses: [
            {title: "CS5001", owner: "Alice", lastModified: "01/01/2021"},
            {title: "CS5002", owner: "Bobby", lastModified: "01/02/2021"}
        ]
    }

    addCourse = () => {
        const newCourse = {
            title: "new course",
            owner: "new owner",
            lastModified: "Never"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
            //console.log(course)
        const newCourses = this.state.courses.filter(course => course !== courseToDelete)
        this.setState({
            courses: newCourses
        })
    }

    render()
    {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={() => this.addCourse()}>Add Course</button>
                <CourseTable
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
                <CourseGrid
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
                <CourseEditor/>
            </div>
        )
    }
}


export default CourseManager