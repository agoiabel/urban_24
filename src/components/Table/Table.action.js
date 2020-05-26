import { TABLE } from './Table.constant';


export const get = payload => ({
    type: TABLE.GET,
    payload
});
export const getSuccessful = payload => ({
    type: TABLE.GET_SUCCESSFUL,
    payload
});
export const getUnsuccessful = payload => ({
    type: TABLE.GET_UNSUCCESSFUL,
    payload
});


export const multipleActionExecutor = payload => ({
    type: TABLE.MULTIPLE_ACTION_EXECUTED,
    payload
});
export const multipleActionExecutorSuccessful = payload => ({
    type: TABLE.MULTIPLE_ACTION_EXECUTED_SUCCESSFUL,
    payload
});
export const multipleActionExecutorUnsuccessful = payload => ({
    type: TABLE.MULTIPLE_ACTION_EXECUTED_UNSUCCESSFUL,
    payload
});