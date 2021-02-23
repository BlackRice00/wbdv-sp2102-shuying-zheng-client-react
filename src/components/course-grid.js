import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-list fa-2x float-right"></i>
        </Link>
        {/*<h2>Course Grid</h2>*/}
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 d-none d-md-block">
                <h4>Recent Documents</h4>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 d-none d-md-block">
                <h4>Owned by me
                    <i className="fas fa-angle-down"></i>
                </h4>

            </div>
        </div>
        <div className="row">

            {
                courses.map((course, index) =>
                    <CourseCard
                        key={index}
                        course={course}
                        updateCourse={updateCourse}
                        deleteCourse={deleteCourse}
                    />
                )
            }
        </div>
    </div>


export default CourseGrid