import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager extends React.Component {

    state = {
        courses: [],
        newCourse: {
            title: "New Course",
            owner: "me",
            lastModified:"11:01"
        }
    }

    onCourseChange = (event) => {
        this.setState({
            newCourse: {
                title: event.target.value,
                owner: "me",
                lastModified: new Date().toLocaleDateString()
            }
        })
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


    addCourse = (event) => {
        // const newCourse = this.state.newCourse
        let newCourse = this.state.newCourse
        if (this.state.newCourse.title.trim() === "") {
            newCourse={
                title: "New Course",
                owner: "me",
                lastModified: new Date().toLocaleDateString()
            }
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        course,
                        ...prevState.courses
                    ]
                })))
        // this.state.courses.push(newCourse)
        // this.setState(this.state)
        this.setState({newCourse: {title: "New Course", owner: "me",
                lastModified: new Date().toLocaleDateString()}})
        event.preventDefault()
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
                {/*<h1>Course Manager</h1>*/}
                {/*<button onClick={() => this.addCourse()}>Add Course</button>*/}
                <body className="bg-light">
                <nav className="navbar row bg-primary sticky-top">
                    <div className="col-1">
                        <a href="/">
                            <i className="col fas fa-bars fa-2x " style={{color: 'white'}}></i>
                        </a>
                    </div>
                    <h3 className="d-none d-md-block text-white">Course Manager</h3>
                    <div className="col" style={{marginLeft:'5%'}}>
                        <input className="form-control font-italic"
                               type="text"
                               placeholder="New Course Title"
                               onChange={this.onCourseChange}
                               value={this.state.newCourse.title}
                        />
                    </div>
                    <div className="col">
                        <i onClick={this.addCourse}
                           className="fas fa-plus fa-2x col-md-auto text-white float-right">
                        </i>
                    </div>

                </nav>
                </body>
                <Route path="/courses/table">
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        updateCourse={this.updateCourse}
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
                <div className="fixed-bottom">
                    <i onClick={this.addCourse}
                       className="fas fa-plus fa-3x float-right text-primary" style={{margin: '2%'}}></i>
                </div>

            </div>
        )
    }
}


export default CourseManager