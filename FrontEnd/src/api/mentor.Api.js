import * as request from './HttpRequest';

export const getAllFacultiesCodeForUniver = (id) => {
    try {
        const res = request.get(`/faculty/${id}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const getMentor = (id) => {
    try {
        const res = request.get(`/mentor/getmentor/${id}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}