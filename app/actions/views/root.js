// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {NavigationTypes} from 'app/constants';
import Routes from 'app/navigation/routes';

import Client from 'service/client';
import {loadMe} from 'service/actions/users';

export function goToSelectServer() {
    return async (dispatch, getState) => {
        dispatch({
            type: NavigationTypes.NAVIGATION_RESET,
            routes: [Routes.SelectServer],
            index: 0
        }, getState);
    };
}

export function setStoreFromLocalData(data) {
    return async (dispatch, getState) => {
        Client.setToken(data.token);
        Client.setUrl(data.url);

        return loadMe()(dispatch, getState);
    };
}

export default {
    goToSelectServer,
    setStoreFromLocalData
};
