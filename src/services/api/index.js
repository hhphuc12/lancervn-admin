// @flow weak
import { listAdmin, postAdmin } from "./admin";
import { listCategory, postAddCategory, detailCategory } from "./category";
import { listSkill, postSkill } from "./skill";
import { listUser, getDetailUser } from "./user";
import { listJob, jobDetail, postBrowseJob } from './job';

import request                         from '../promisedHttpRequest';

let API_URI = process.env.REACT_APP_API_URI;

export const postLogin = (username, password) => {
    const url = `${API_URI}admin/login`;
    return request.post(url, { username, password });
};

export {
    listAdmin,
    postAdmin,
    listCategory,
    postAddCategory,
    detailCategory,
    listSkill,
    postSkill,
    listUser,
    getDetailUser,
    listJob,
    jobDetail,
    postBrowseJob,
};
