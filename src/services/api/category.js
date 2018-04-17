// @flow weak

import request                         from '../promisedHttpRequest';

let API_URI = process.env.REACT_APP_API_URI;

export const listCategory = () => {
    const url = `${API_URI}admin/list-category`;
    return request.get(url);
};

export const postAddCategory = category => {
    const url = `${API_URI}admin/create-category`;
    return request.post(url, { category });
};

export const detailCategory = id => {
    const url = `${API_URI}admin/category?id=${id}`;
    return request.get(url);
};
