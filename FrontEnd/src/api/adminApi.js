import * as request from './HttpRequest';

export const getAccount = (role) => {
    try {
        const res = request.get(`/account/${role}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}