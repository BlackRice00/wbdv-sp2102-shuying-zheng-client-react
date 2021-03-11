import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service';

const LessonTabs = (
    {
        lessons=[
            // {_id: "123", title: "Lesson A"},
            // {_id: "124", title: "Lesson B"},
            // {_id: "125", title: "Lesson C"}
        ],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson,
        updateLesson
    }
) =>{
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return (<div>
        <h2>Lessons</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem
                            active={lesson._id === lessonId}
                            updateItem={updateLesson}
                            deleteItem={deleteLesson}
                            to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            item={lesson}/>
                    </li>
                )
            }
            <li>
                <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)
}


const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons: lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        console.log("CREATE LESSON" + moduleId)
        lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson: lesson
            }))
    },
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson: lesson
            })),
    // Lesson Tabs
    deleteLesson: (item) => {
        lessonService.deleteLesson(item._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: item
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)