import * as request from './HttpRequest';

export const createTopic = (info) => {
    try {
        const res = request.post(`/topic`, info)
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const downloadFile = async (fileName) => {
    try {
        const res = request.get(`/topic/downloadfile/${fileName}`)
        console.log(res);
        return res;
    } catch (e) {
        console.log(e);
    }
}