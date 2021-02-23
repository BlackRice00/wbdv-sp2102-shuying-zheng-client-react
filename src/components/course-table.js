import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/course-service";


export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }


    render() {
        return(
            <div>
                {/*<h2>Course Table</h2>*/}

                {/*<Link to="/courses/grid">*/}
                {/*    <i className="fas fa-2x fa-th float-right"></i>*/}
                {/*</Link>*/}
                <table className="table table-hover" style={{padding: 0, margin: 0}}>
                    <thead>
                    <tr>
                        <th scope="col"
                            className="font-weight-bold d-sm-table-cell">
                            Title
                        </th>
                        <th scope="col"
                            className="font-weight-bold d-none d-md-table-cell" style={{font:'15px'}}>
                            Owned By
                        </th>
                        <th scope="col"
                            className="font-weight-bold d-none d-lg-table-cell" style={{width:'15%'}}>
                            Last modified
                        </th>
                        <th scope="col">
                            <a href="#">
                                <Link to="/courses/grid">
                                    <i className="fas fa-2x fa-th float-right"></i>
                                </Link>
                            </a>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.courses.map((course, index) =>
                                <CourseRow
                                    updateCourse={this.props.updateCourse}
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