// @flow weak

import request                         from '../promisedHttpRequest';

let API_URI = process.env.REACT_APP_API_URI;

export const listAdmin = () => {
    const url = `${API_URI}admin/list-admin`;
    return request.get(url);
};

export const postAdmin = admin => {
    const url = `${API_URI}admin/add-admin`;
    return request.post(url, { admin });
};
