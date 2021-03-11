import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService, {findTopicsForLesson} from '../services/topic-service'

const TopicPills = (
    {
        topics=[],
        createTopicsForLesson,
        deleteTopic,
        findTopicsForLesson,
        updateTopic
    }
) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return (<div>
        <h2>Topics</h2>
        {/*{JSON.stringify(topics)}*/}
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem
                            active={topic._id === topicId}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            item={topic}/>
                    </li>
                )
            }
            <li>
                <i onClick={() => {
                    createTopicsForLesson(lessonId)
                    findTopicsForLesson(lessonId)
                }}  className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics: topics
            }))
    },
    createTopicsForLesson: (lessonId) => {
        topicService.createTopicsForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic: topic
            }))
    },
    updateTopic: (topic) => {
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic: topic
            }))
    },

    deleteTopic: (item) => {
        topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            }))
    }
})

export default connect(stpm, dtpm)(TopicPills)