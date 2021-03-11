const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/shuyingz/lessons"
const TOPIC_URL = "https://wbdv-generic-server.herokuapp.com/api/shuyingz/topics"

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSON_URL}/${lessonId}/topics`)
        .then(response => response.json())

export const createTopicsForLesson = (lessonId, topic) =>
    fetch(`${LESSON_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export const updateTopic = (topicId, topic) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

const api = {
    createTopicsForLesson,
    findTopicsForLesson,
    deleteTopic,
    updateTopic
}

export default api