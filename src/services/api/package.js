// @flow weak

import request                         from '../promisedHttpRequest';

let API_URI = process.env.REACT_APP_API_URI;

export const listPackage = (page, token) => {
    const url = `${API_URI}admin/list-package?page=${page}`;
    return request.get(url, token);
};

export const packageDetail = (id, token) => {
    const url = `${API_URI}admin/package-detail?id=${id}`;
    return request.get(url, token);
};

export const postBrowsePackage = (id, token) => {
    const url = `${API_URI}admin/browse-package`;
    return request.post(url, { id }, token);
};
