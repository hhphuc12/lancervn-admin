// @flow weak

import request                         from '../promisedHttpRequest';

let API_URI = process.env.REACT_APP_API_URI;

export const listJob = (page, token) => {
    const url = `${API_URI}admin/list-job?page=${page}`;
    return request.get(url, token);
};

// export const postAdmin = admin => {
//     const url = `${API_URI}admin/add-admin`;
//     return request.post(url, { admin });
// };
