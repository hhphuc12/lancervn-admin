// @flow weak

import request                         from '../promisedHttpRequest';

let API_URI = process.env.REACT_APP_API_URI;

export const listUser = () => {
    const url = `${API_URI}admin/list-user`;
    return request.get(url);
};

export const getDetailUser = id => {
    const url = `${API_URI}admin/user?id=${id}`;
    return request.get(url);
};
