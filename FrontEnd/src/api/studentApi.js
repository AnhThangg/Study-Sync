import * as request from './HttpRequest';

export const getStudent = (id) => {
    try {
        const res = request.get(`/student/${id}`)
        return res
    } catch (e) {
        console.log(e);
    }
}