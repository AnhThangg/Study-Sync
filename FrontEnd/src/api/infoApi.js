import * as request from './HttpRequest';

export const getInfo = () => {
    try {
        const res = request.get(`/info`)
        return res
    } catch (error) {
        console.log(e);
    }
}