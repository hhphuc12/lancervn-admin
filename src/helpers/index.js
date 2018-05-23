// @flow weak
import $ from 'jquery';

export const getLocationOrigin = () => {
    if (!window.location.origin) {
        window.location.origin = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;
    }
    return window.location.origin;
};

export const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 500) {
        return response;
    } else {
        const error: any = new Error(response.statusText);
        error.response = response;
        // throw error;
        return Promise.reject(error);
    }
};

export const parseJSON = (response) => {
    return response.json();
};

export const getNewRequestNoBody = (url: string, method: string, token = null, headers = {}) => {
    let originHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'admin-access-token': token
    };
    let customHeaders = Object.assign(headers, originHeaders);
    const request = new Request(url, {
        method,
        headers: customHeaders
    });
    return request;
};

export const getNewRequestHasBody = (url: string, method: string, data: any, token = null, headers = {}) => {
    let originHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'admin-access-token': token
    };

    if(data instanceof FormData) {
        delete originHeaders['Content-Type'];
    }

    let customHeaders = Object.assign(headers, originHeaders);
    const request = new Request(url, {
        method,
        headers: customHeaders,
        body: data instanceof FormData ? data : JSON.stringify(data)
    });
    return request;
};

export const dateTimeFormatter = (dateTime: string) => {
    if (dateTime === null || dateTime === undefined) return '---';
    return dateTime.substring(0, 19).replace('T', ' ');
};

export const dateFormatter = (date: string) => {
    if (date === null || date === undefined) return '---';
    const d = new Date(date);
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    const month = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
};

export const str30Format = str => {
    if (!str.length) return '---';
    if (str.length < 30) return str;
    return `${str.substring(0, 30)}...`;
};

export const moneyFormater = money => money ? money.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : '---';

export const changePreview = (image, placeToInsertImagePreview) => {
    $(placeToInsertImagePreview + ' img').remove();
    if (image) {
        let reader = new FileReader();

        reader.onload = function(event) {
            $($.parseHTML('<img class="img-responsive img-thumbnail avatar-preview" alt="">'))
                .attr('src', event.target.result)
                .prependTo(placeToInsertImagePreview);
        }

        reader.readAsDataURL(image);
    }
    else {
        //TODO
    }
}

export function activeRoute(routeName, pathRootName) {
    return pathRootName.endsWith(routeName) ? "active" : "";
}

export function checkUndefined(value) {
    return (value!==undefined) ? value : null;
}

export function truncateText(text, maxLength = 50) {
    if (text===undefined || text === null)
        return null;
    if (text.length > maxLength) {
        text = text.substr(0,maxLength) + '...';
    }
    return text;
}
