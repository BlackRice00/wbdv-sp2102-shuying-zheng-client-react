import React from 'react';
import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home"
import CourseEditor from "./components/course-editor";

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
                <Route path={["/courses/:layout/editor/:courseId",
                    "/courses/:layout/editor/:courseId/modules/:moduleId",
                    "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",]}
                       exact={true} render={(props) =>
                    <CourseEditor {...props}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
