const ISDARKMODE = 'ISDARKMODE';
const ISVIETNAMESE = 'ISVIETNAMESE';

export let darkModeLocalStorage = {
    get: () => {
        let dataJson = localStorage.getItem(ISDARKMODE);
        return JSON.parse(dataJson);
    },
    set: (data) => {
        let dataJson = JSON.stringify(data);
        localStorage.setItem(ISDARKMODE, dataJson);
    },
    remove: () => {
        localStorage.removeItem(ISDARKMODE);
    },
};

export let vietnameseModeLocalStorage = {
    get: () => {
        let dataJson = localStorage.getItem(ISVIETNAMESE);
        return JSON.parse(dataJson);
    },
    set: (data) => {
        let dataJson = JSON.stringify(data);
        localStorage.setItem(ISVIETNAMESE, dataJson);
    },
    remove: () => {
        localStorage.removeItem(ISVIETNAMESE);
    },
};
