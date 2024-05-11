import * as request from './HttpRequest';

export const countTopicsUnconfirmForFaculty = () => {
    try {
        const res = request.get(`/faculty/CountTopicsUnconfirmForFaculty`)
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const getUnconfirmedTopicsForFaculty = () => {
    try {
        const res = request.get(`/faculty/UnconfirmedTopicsForFaculty`)
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const getUnconfirmedTopicDetailForFaculty = (id) => {
    try {
        const res = request.get(`/faculty/unconfirmedTopicDetailForFaculty/${id}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}
