import { getStorage } from './storage';
const url = 'https://urban24.herokuapp.com/api/';

export const post = async (form_data, end_point) => {
    const token = await getStorage('URBAN24_TOKEN');

    return fetch(url + end_point, {
        method: 'POST',
        headers: {
            'URBAN24_TOKEN': token,
            'Content-Type': 'application/json',
            "AuthorizationHeader": "Bearer HFH_2020",
        },
        body: JSON.stringify(form_data)
    });
}

export const get = async end_point => {
    const token = await getStorage('URBAN24_TOKEN');

    return fetch(url + end_point, {
        method: 'GET',
        headers: {
            'URBAN24_TOKEN': token,
            'Content-Type': 'application/json',
            "AuthorizationHeader": "Bearer HFH_2020",
        },
    });
}