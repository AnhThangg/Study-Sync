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

export const approveTopicForFaculty = (id) => {
    try {
        const res = request.patch(`/faculty/approveTopicForFaculty/${id}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const getAllMentor = () =>{
    try {
        const res = request.get(`/faculty/getAllMentor`)
        return res;
    } catch (e) {
        console.log(e);
    }
}


export const getAllStudents = () =>{
    try {
        const res = request.get('/faculty/getAllStudents')
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const getDetailMetor = (id) =>{
    try {
        const res = request.get('/faculty/getDetailMetor/:id')
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const getDetailStudent = (id) =>{
    try {
        const res = request.get('/faculty/getDetailStudent/:id')
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const getAllTopic = () =>{
    try {
        const res = request.get('/faculty/getAllTopic')
        return res;
    } catch (e) {
        console.log(e);
    }
}


