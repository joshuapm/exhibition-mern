import { SetUserAction } from "../user/types"

export const REGISTER = "REGISTER"
export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const LOGIN = "LOGIN"
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const CLEAN_ERRORS = "CLEAN_ERRORS"
export const LOGOUT = "LOGOUT"

export interface RegisterAction {
    type: typeof REGISTER,
}

export interface RegisterRequestAction {
    type: typeof REGISTER_REQUEST
}

export interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS
}

export interface RegisterFailureAction {
    type: typeof REGISTER_FAILURE,
    payload: string
}


export interface LoginAction {
    type: typeof LOGIN,
}

export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS,
    payload: UserData
}

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE,
    payload: string
}

export interface CleanErrorsAction {
    type: typeof CLEAN_ERRORS,
}

export interface LogoutAction {
    type: typeof LOGOUT,
}

export type LoginPageActionTypes = SetUserAction | RegisterRequestAction | RegisterAction | RegisterSuccessAction | RegisterFailureAction | LoginRequestAction | LoginAction | LoginSuccessAction | LoginFailureAction | LogoutAction | CleanErrorsAction
