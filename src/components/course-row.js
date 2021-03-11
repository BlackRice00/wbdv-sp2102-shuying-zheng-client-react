import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {updateCourse} from "../services/course-service";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        title,
        owner,
        lastModified
    }) => {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <tr>
            <td className="d-md-table-cell">
                <i className="fas fa-file-alt col-md-auto text-primary"></i>
                {
                    !editing &&
                    <Link to={`/courses/table/editor/${course._id}`}>
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td scope="col-2" className="d-none d-md-table-cell">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td>
                {!editing && <i onClick={() => setEditing(true)}
                                className="fas fa-edit float-right"></i>}
                {editing && <i onClick={() => (deleteCourse(course), setEditing(false))}
                   className="fas fa-trash float-right"></i>}
                {editing && <i onClick={() => saveTitle()}
                               className="fas fa-check float-right"></i>}
        </td>
        </tr>)
}

export default CourseRow