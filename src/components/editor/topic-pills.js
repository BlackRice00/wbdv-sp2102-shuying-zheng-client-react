import React from 'react'
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom';

const TopicPills = () => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    return (
        <ul className="nav-pills">
            <li className="nav-item">
                <Link to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/topic123`} className="nav-link">Topic 1</Link>
                <Link to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/topic124`} className="nav-link">Topic 2</Link>
            </li>
        </ul>
    )
}

export default TopicPills
