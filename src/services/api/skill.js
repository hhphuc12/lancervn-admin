// @flow weak

import request                         from '../promisedHttpRequest';

let API_URI = process.env.REACT_APP_API_URI;

export const listSkill = page => {
    const url = `${API_URI}admin/list-skill?page=${page}`;
    return request.get(url);
};

export const postSkill = skill => {
    const url = `${API_URI}admin/create-skill`;
    return request.post(url, { skill });
};
