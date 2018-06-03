// @flow weak

import request                         from '../promisedHttpRequest';

let API_URI = process.env.REACT_APP_API_URI;

export const listUser = (page, search) => {
    const url = `${API_URI}admin/list-user?page=${page}&search=${search}`;
    return request.get(url);
};

export const postChangeBlockStateUser = (id, token) => {
    const url = `${API_URI}admin/change-block-state-user`;
    return request.post(url, { id }, token);
};
