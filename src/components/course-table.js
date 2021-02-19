import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {
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
    render() {
        return(
            <div>
                <h2>Course Table</h2>
                <button onClick={() => this.addCourse()}>Add Course</button>
                <table className="table">
                    <tbody>

                        {/*<CourseRow title="CS5002" owner="Bobby" lastModified="01/02/2021"/>*/}
                        {/*<CourseRow title="CS5003" owner="Chris" lastModified="01/03/2021"/>*/}
                        {/*<CourseRow title="CS5004" owner="Denny" lastModified="01/04/2021"/>*/}
                        {
                            this.state.courses.map((course, index) =>
                                <CourseRow
                                    key={index}
                                    title={course.title}
                                    owner={course.owner}
                                    lastModified={course.lastModified}
                                />)
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}