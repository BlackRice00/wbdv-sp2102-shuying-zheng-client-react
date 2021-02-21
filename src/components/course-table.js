import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <h2>Course Table</h2>
                <table className="table">
                    <tbody>
                    {
                            this.props.courses.map((course, index) =>
                                <CourseRow
                                    deleteCourse={this.props.deleteCourse}
                                    key={index}
                                    course={course}
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