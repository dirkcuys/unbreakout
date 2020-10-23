import {sendSocketMessage} from './index.js'

export const CONNECTING = 'CONNECTING';
export const connecting = (payload) => ({type: CONNECTING, payload});
export const OPEN = 'OPEN';
export const open = (payload) => ({type: OPEN, payload});
export const CLOSING = 'CLOSING';
export const closing = (payload) => ({type: CLOSING, payload});
export const CLOSED = 'CLOSED';
export const closed = (payload) => ({type: CLOSED, payload});
export const ERROR = 'ERROR';
export const error = (payload) => ({type: ERROR, payload});
