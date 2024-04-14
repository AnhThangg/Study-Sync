import * as request from './HttpRequest';

export const getAllCodeUniver = () => {
    try {
        const res = request.get(`/univerAllCode`)
        return res;
    } catch (e) {
        console.log(e);
    }
}
