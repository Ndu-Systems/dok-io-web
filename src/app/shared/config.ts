export const IS_LOCAL = true;
let api = 'http://dokio.ndu-systems.net/api';
let web = 'http://dokio.ndu-systems.net';
if (IS_LOCAL) {
    api = 'http://localhost:8080/dok-io-api/';
    web = 'http://localhost:4200';
}

export const   API_URL = api;
export const WEB_HOST = web;