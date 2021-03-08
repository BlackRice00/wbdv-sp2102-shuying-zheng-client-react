import React from "react";
import {Link} from "react-router-dom";
import './course-editor.style.client.css';
import moduleReducer from "../reducers/modules-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../reducers/lesson-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})

// const store = createStore(moduleReducer)
const store = createStore(reducer)

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
    <Provider store={store}>
        <div>
            <h2>
                <Link to="/courses/table">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                Course Editor
                <i onClick={() => history.goBack()}
                   className="fas fa-times float-right"></i>
                {/*<i onClick={() => props.history.goBack()}*/}
                {/*   className="fas fa-times float-right"></i>*/}
            </h2>

            {/*<div className="top-nav">*/}
            {/*    <nav className="navbar sticky-top navbar-dark bg-dark">*/}
            {/*        <Link to="/courses/table">*/}
            {/*            <i className="fas fa-arrow-left fa-2x" style={{color:"white"}}></i>*/}
            {/*        </Link>*/}

            {/*        <h3>CS5610 - WebDev</h3>*/}
            {/*        <div className="nav-item">*/}
            {/*            <a className="nav-link bg-dark text-white" href="#">*/}
            {/*                Build*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="nav-item">*/}
            {/*            <a className="nav-link bg-dark text-white" href="#">*/}
            {/*                Pages*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="nav-item">*/}
            {/*            <a className="nav-link bg-dark text-white" href="#">*/}
            {/*                Theme*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="nav-item">*/}
            {/*            <a className="nav-link bg-dark text-white" href="#">*/}
            {/*                Store*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="nav-item">*/}
            {/*            <a className="nav-link bg-dark text-white" href="#">*/}
            {/*                Apps*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="nav-item">*/}
            {/*            <a className="nav-link bg-dark text-white" href="#">*/}
            {/*                Settings*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="close">*/}
            {/*            <i onClick={() => history.goBack()}*/}
            {/*               className="far fa-window-close fa-2x float-right text-white"></i>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</div>*/}

            {/*<div className="container-fluid">*/}
            {/*    <div className="row bg-dark">*/}
            {/*        <nav className="col-lg-4 d-md-block bg-dark sidebar">*/}
            {/*            <div className="sidebar-sticky">*/}
            {/*                <ul className="nav flex-column">*/}
            {/*                    <div className="container">*/}
            {/*                        <li className="nav-item module-list">*/}
            {/*                            <button type="button" className="btn btn-secondary btn-lg col-md-12">*/}
            {/*                                <div>*/}
            {/*                                    <div className="row">*/}
            {/*                                        <div className="col-md">Module 1 - JQuery</div>*/}
            {/*                                        <i className="fas fa-trash-alt col-md-auto float-right"></i>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </button>*/}
            {/*                        </li>*/}

            {/*                        <li className="nav-item module-list">*/}
            {/*                            <button type="button" className="btn btn-secondary btn-lg col-md-12">*/}
            {/*                                <div>*/}
            {/*                                    <div className="row">*/}
            {/*                                        <div className="col-md">Module 2 - React</div>*/}
            {/*                                        <i className="fas fa-trash-alt col-md-auto"></i>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </button>*/}
            {/*                        </li>*/}

            {/*                        <li className="nav-item module-list">*/}
            {/*                            <button type="button" className="btn btn-secondary btn-lg col-md-12">*/}
            {/*                                <div>*/}
            {/*                                    <div className="row">*/}
            {/*                                        <div className="col-md">Module 3 - Redux</div>*/}
            {/*                                        <i className="fas fa-trash-alt col-md-auto float-right"></i>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </button>*/}
            {/*                        </li>*/}

            {/*                        <li className="nav-item module-list">*/}
            {/*                            <button type="button" className="btn btn-secondary btn-lg col-md-12">*/}
            {/*                                <div>*/}
            {/*                                    <div className="row">*/}
            {/*                                        <div className="col-md">Module 4 - Native</div>*/}
            {/*                                        <i className="fas fa-trash-alt col-md-auto"></i>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </button>*/}
            {/*                        </li>*/}

            {/*                        <li className="nav-item module-list">*/}
            {/*                            <button type="button" className="btn btn-secondary btn-lg col-md-12">*/}
            {/*                                <div>*/}
            {/*                                    <div className="row">*/}
            {/*                                        <div className="col-md">Module 5 - Angular</div>*/}
            {/*                                        <i className="fas fa-trash-alt col-md-auto"></i>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </button>*/}
            {/*                        </li>*/}

            {/*                        <li className="nav-item module-list">*/}
            {/*                            <button type="button" className="btn btn-secondary btn-lg col-md-12">*/}
            {/*                                <div>*/}
            {/*                                    <div className="row">*/}
            {/*                                        <div className="col-md">Module 6 - Node</div>*/}
            {/*                                        <i className="fas fa-trash-alt col-md-auto"></i>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </button>*/}
            {/*                        </li>*/}
            {/*                        <li className="nav-item module-list">*/}
            {/*                            <button type="button" className="btn btn-secondary btn-lg col-md-12">*/}
            {/*                                <div>*/}
            {/*                                    <div className="row">*/}
            {/*                                        <div className="col-md">Module 7 - Mongo</div>*/}
            {/*                                        <i className="fas fa-trash-alt col-md-auto"></i>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </button>*/}
            {/*                        </li>*/}
            {/*                        <a>*/}
            {/*                            <i className="fas fa-plus fa-2x col-md-auto text-white float-right"></i>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </nav>*/}
            {/*        <div className="col-8 bg-white">*/}
            {/*            <div className="topic-list">*/}
            {/*                <ul className="row topic-list-item">*/}
            {/*                    <li className="topic-list-item-btn">*/}
            {/*                        <button type="button" className="btn btn-secondary btn-md">*/}
            {/*                            Topic 1*/}
            {/*                        </button>*/}
            {/*                    </li>*/}
            {/*                    <li className="topic-list-item-btn">*/}
            {/*                        <button type="button" className="btn btn-secondary btn-md">*/}
            {/*                            Topic 2*/}
            {/*                        </button>*/}
            {/*                    </li>*/}
            {/*                    <li className="topic-list-item-btn">*/}
            {/*                        <button type="button" className="btn btn-secondary btn-md">*/}
            {/*                            Topic 3*/}
            {/*                        </button>*/}
            {/*                    </li>*/}
            {/*                    <li className="topic-list-item-btn">*/}
            {/*                        <button type="button" className="btn btn-secondary btn-md">*/}
            {/*                            Topic 4*/}
            {/*                        </button>*/}
            {/*                    </li>*/}
            {/*                    <div className="col-1">*/}
            {/*                        <a className="nav-link bg-white topic-add-btn" href="#">*/}
            {/*                            <i className="fa fa-plus fa-2x"></i>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                </div>
            </div>
        </div>
    </Provider>


export default CourseEditor