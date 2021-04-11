import React from 'react';
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home"
import CourseEditor from "./components/editor/course-editor";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path={["/courses", "/courses/:layout"]} exact={true}>
                    <CourseManager/>
                </Route>
                <Route path="/courses/:courseId/quizzes" exact={true}>
                    <QuizzesList/>
                </Route>
                <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                    <Quiz/>
                </Route>
                <Route path={["/courses/:layout/editor/:courseId",
                    "/courses/:layout/editor/:courseId/modules/:moduleId",
                    "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/:widgets/widgetId"]}
                       exact={true} render={(props) =>
                    <CourseEditor {...props}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
