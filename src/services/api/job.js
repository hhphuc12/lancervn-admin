// @flow weak

import request                         from '../promisedHttpRequest';

let API_URI = process.env.REACT_APP_API_URI;

export const listJob = (page, token) => {
    const url = `${API_URI}admin/list-job?page=${page}`;
    return request.get(url, token);
};

export const jobDetail = (id, token) => {
    const url = `${API_URI}admin/job-detail?id=${id}`;
    return request.get(url, token);
};

export const postBrowseJob = (id, token) => {
    const url = `${API_URI}admin/browse-job`;
    return request.post(url, { id }, token);
};
