import * as request from './HttpRequest';

export const getListProposeIdea = () => {
    try {
        const res = request.get('/proposeIdea/ListProposeIdea')
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const getProposeIdea = (id) => {
    try {
        const res = request.get(`/proposeIdea/proposeideadetail/${id}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}