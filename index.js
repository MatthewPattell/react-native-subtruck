import { Platform } from 'react-native';
import AppsFlyer from 'react-native-appsflyer';
import { IDFA, } from '@ptomasroos/react-native-idfa';
import DeviceInfo from 'react-native-device-info';


export default {

    fetchProduct(project) {
        return request('/product/', {
            project,
        });
    },

    trackViewEvent(project, productId) {
        return request('/view/', {
            project,
            productId,
        });
    },

    trackPurchaseEvent(project, transaction) {
        return request('/transaction/', {
            project,
            transaction,
        });
    },

};


function request(url, params = {}) {
    return getIDs()
        .then((ids) =>
            fetch('https://subtruck.wowmaking.net/api' + url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    platform: Platform.OS,
                    ...ids,
                    ...params,
                }, null, 4),
            })
        )
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .catch(console.warn);
}



function getIDs() {
    return Promise.all([getAppsFlyerUID(), getIDFA(),])
        .then(([appsFlyerUID, idfa]) => ({
            appsFlyerUID,
            idfa,
            deviceCountry: DeviceInfo.getDeviceCountry(),
        }));
}


let _appsFlyerUID = '';

function getAppsFlyerUID() {
    return _appsFlyerUID ?
        Promise.resolve(_appsFlyerUID)
        :
        new Promise((resolve) => {
            AppsFlyer.getAppsFlyerUID((error, appsFlyerUID) => {
                _appsFlyerUID = appsFlyerUID || _appsFlyerUID || '';
                resolve(_appsFlyerUID);
            });
        });
}


let _idfa = '';

function getIDFA() {
    return _idfa ?
        Promise.resolve(_idfa)
        :
        IDFA.getIDFA()
            .then(idfa => {
                _idfa = idfa;
                return idfa;
            })
            .catch(() => '');
}



export const WEEKLY = 'WEEKLY';
export const MONTHLY = 'MONTHLY';
export const YEARLY = 'YEARLY';
