import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager extends React.Component {

    state = {
        courses: []
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map((c) =>
                    c._id === course._id ? course : c
                )
            })))
    }

    componentDidMount = () =>
        // findAllCourses()
        //     .then(actualCourses => this.setState({
        //         courses: actualCourses
        //     }))
        findAllCourses()
            .then(courses => this.setState({courses}))


    addCourse = () => {
        const newCourse = {
            title: "new course",
            owner: "new owner",
            lastModified: "Never"
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
        // this.state.courses.push(newCourse)
        // this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // const newCourses = this.state.courses
                //     .filter(course => course !== courseToDelete)
                // this.setState({
                //     courses: newCourses
                // })

                // this.setState((prevState) => {
                //     // let nextState = {...prevState}
                //     // nextState.courses =
                //     //     prevState
                //     //         .courses
                //     //         .filter(course => course !== courseToDelete)
                //     // return nextState
                //
                //     let nextState = {
                //         ...prevState,
                //         courses: prevState
                //             .courses
                //             .filter(course => course !== courseToDelete)
                //     }
                //     return nextState
                // })
                this.setState((prevState) => ({
                        ...prevState,
                        courses: prevState.courses.filter(course => course !== courseToDelete)
                }))
            })
    }

    render()
    {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={() => this.addCourse()}>Add Course</button>
                <Route path="/courses/table">
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/editor">*/}
                {/*    <CourseEditor/>*/}
                {/*</Route>*/}
                {/*<Route path="/courses/editor"*/}
                {/*       render={(props) => <CourseEditor props={props}/>}>*/}
                {/*</Route>*/}
                <Route path="/courses/editor"
                       render={(props) =>
                           <CourseEditor {...props}/>}>
                </Route>
            </div>
        )
    }
}


export default CourseManager