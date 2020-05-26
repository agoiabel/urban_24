
export const setStorage = (key, value) => {
    return window.localStorage.setItem(key, JSON.stringify(value));
}

export const getStorage = key => {
    let parsedData;
    try {
        parsedData = JSON.parse(window.localStorage.getItem(key));
    } catch(e) {
        parsedData = '';
    }
    return parsedData;
}

export const removeStorage = key => {
    return window.localStorage.removeItem(key);
}