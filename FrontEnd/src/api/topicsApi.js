import * as request from './HttpRequest';

export const createTopic = () => {
    try {
        const res = request.post(`/topic`)
        return res;
    } catch (e) {
        console.log(e);
    }
}