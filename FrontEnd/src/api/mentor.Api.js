import * as request from './HttpRequest';

export const getAllFacultiesCodeForUniver = (id) => {
    try {
        const res = request.get(`/facultyAllCodeForUniver/${id}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}