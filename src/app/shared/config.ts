export const IS_LOCAL = true;
let api = 'http://dok.ndu-systems.net/api';
let web = 'http://dok.ndu-systems.net';
if (IS_LOCAL) {
    api = 'http://localhost:8080/dok-io-api';
    web = 'http://localhost:4200';
}

export const   API_URL = api;
export const WEB_HOST = web;
export const LAST_INSERT_ID = "LAST_INSERT_ID";
export const CURRENT_USER = "CURRENT_USER";
export function getCurrentUser(){
    return localStorage.getItem(CURRENT_USER);
}