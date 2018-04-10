// @flow weak
import { listAdmin, postAdmin } from "./admin";

import request                         from '../promisedHttpRequest';

let API_URI = process.env.REACT_APP_API_URI;

export const postLogin = (username, password) => {
    const url = `${API_URI}admin/login`;
    return request.post(url, { username, password });
};

export {
    listAdmin,
    postAdmin,
};
