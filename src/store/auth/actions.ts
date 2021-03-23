import { ThunkAction } from 'redux-thunk'
import auth from '../../services/authService'
import { RootState } from '..'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LoginPageActionTypes, LoginRequestAction, LoginSuccessAction, LoginFailureAction, LogoutAction, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, RegisterRequestAction, RegisterSuccessAction, RegisterFailureAction, CLEAN_ERRORS, CleanErrorsAction } from './types'
import { setUser } from '../user/actions'

export const register = (username: string, email: string, password: string
): ThunkAction<void, RootState, unknown, LoginPageActionTypes> => async dispatch => {

    dispatch(registerRequest())

    try {
        const response = await auth.register(username, email, password)
        if (response.status === 201) {
            dispatch(registerSuccess())
        }
    }
    catch (error) {
        dispatch(registerFailure(`${error.message}: ${error.response?.data?.message}`))
    }
}


export const login = (username: string, password: string
): ThunkAction<void, RootState, unknown, LoginPageActionTypes> => async dispatch => {

    dispatch(loginRequest())

    try {
        const result = await auth.login(username, password)
        if (result && result.accessToken) {
            dispatch(loginSuccess(result))
            dispatch(setUser(result))
        }
    }
    catch (error) {
        dispatch(loginFailure(`${error.message}: ${error.response?.data?.message}`))
    }
}


function registerRequest(): RegisterRequestAction {
    return {
        type: REGISTER_REQUEST,
    }
}

function registerSuccess(): RegisterSuccessAction {
    return {
        type: REGISTER_SUCCESS
    }
}

function registerFailure(errorMessage: string): RegisterFailureAction {
    return {
        type: REGISTER_FAILURE,
        payload: errorMessage
    }
}


function loginRequest(): LoginRequestAction {
    return {
        type: LOGIN_REQUEST,
    }
}

function loginSuccess(user: UserData): LoginSuccessAction {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

function loginFailure(errorMessage: string): LoginFailureAction {
    return {
        type: LOGIN_FAILURE,
        payload: errorMessage
    }
}

export function clear(): CleanErrorsAction {
    return {
        type: CLEAN_ERRORS,
    }
}

export function logout(): LogoutAction {
    auth.logout()
    return {
        type: LOGOUT,
    }
}