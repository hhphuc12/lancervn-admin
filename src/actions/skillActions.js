// @flow weak
import moment from 'moment';
import { listSkill, postSkill } from '../services/api';
import {
    REQUEST_LIST_SKILL,
    RECEIVED_LIST_SKILL,
    ERROR_LIST_SKILL,
    REQUEST_ADD_SKILL,
    RECEIVED_ADD_SKILL,
    ERROR_ADD_SKILL,
} from "../constants/skillType";
import { errorBadRequest } from './errorActions';

function requestListSkills(time = moment().format()) {
    return {
        type:       REQUEST_LIST_SKILL,
        isFetching: true,
        time
    };
}
function receivedListSkills(skills, pages, time = moment().format()) {
    return {
        type:       RECEIVED_LIST_SKILL,
        isFetching: false,
        skills,
        pages,
        time
    };
}
function errorListSkills(time = moment().format()) {
    return {
        type:       ERROR_LIST_SKILL,
        isFetching: false,
        time
    };
}

export function getSkillsIfNeed(page): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldGetSkills(getState())) {
            return dispatch(getSkills(page));
        }
        return Promise.resolve('already fetching skills...');
    }
}

function shouldGetSkills(
    state: any
): boolean {
    const isFetching = state.skill.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function getSkills(page) {
    return dispatch => {
        dispatch(requestListSkills());
        listSkill(page)
            .then(res => {
                if (res.status !== 200)
                    return dispatch(errorBadRequest(res.status));
                dispatch(receivedListSkills(res.data.docs, res.data.pages));
            })
            .catch(error => {
                dispatch(errorListSkills(error));
                dispatch(errorBadRequest(400));
            });
    };
};

function requestAddSkill(time = moment().format()) {
    return {
        type:       REQUEST_ADD_SKILL,
        isFetching: true,
        time
    };
}
function receivedAddSkill(time = moment().format()) {
    return {
        type:       RECEIVED_ADD_SKILL,
        isFetching: false,
        time
    };
}
function errorAddSkill(msg, time = moment().format()) {
    return {
        type:       ERROR_ADD_SKILL,
        isFetching: false,
        msg,
        time
    };
}

export function addSkillIfNeed(skill): (...any) => Promise<any> {
    return (
        dispatch: (any) => any,
        getState: () => boolean,
    ): any => {
        if(shouldAddSkill(getState())) {
            return dispatch(addSkill(skill));
        }
        return Promise.resolve('already fetching skill...');
    }
}

function shouldAddSkill(
    state: any
): boolean {
    const isFetching = state.skill.isFetching;
    if (isFetching) {
        return false;
    }
    return true;
}

function addSkill(skill) {
    return dispatch => {
        dispatch(requestAddSkill());
        postSkill(skill)
            .then(res => {
                if (res.status !== 201)
                    throw res;
                dispatch(receivedAddSkill());
            })
            .catch(res => {
                dispatch(errorAddSkill(res.error.message));
                dispatch(errorBadRequest(400));
            });
    };
};
