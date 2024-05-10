import * as request from './HttpRequest';

export const getStudent = (id) => {
    try {
        const res = request.get(`/student/${id}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const getTopicApprovedForStudent = () => {
    try {
        const res = request.get(`/student/TopicApprovedForStudent`)
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const getTopicApprovedDetailForStudent = (id) => {
    try {
        const res = request.get(`/student/TopicApprovedDetailForStudent/${id}`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const updateTopic = (id, infoUpdate) => {
    try {
        const res = request.patch(`/student/updateTopic/${id}`,infoUpdate);
        return res;
    } catch (e) {
        console.log(e);
    }
}