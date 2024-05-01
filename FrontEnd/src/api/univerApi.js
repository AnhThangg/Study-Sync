import * as request from './HttpRequest';

export const getAllCodeUniver = () => {
    try {
        const res = request.get(`/univer/getAllUniverCode`)
        return res;
    } catch (e) {
        console.log(e);
    }
}