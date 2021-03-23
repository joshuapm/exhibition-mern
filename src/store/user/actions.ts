import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { UserTypes, UpdateFavoriteCharacterRequestAction, UpdateFavoriteCharacterFailureAction, UpdateFavoriteCharacterSuccessAction, UPDATE_FAVORITE_CHARACTER_FAILURE, UPDATE_FAVORITE_CHARACTER_REQUEST, UPDATE_FAVORITE_CHARACTER_SUCCESS, CleanErrorsAction, CLEAN_ERRORS, ResetStateAction, RESET_STATE, SetUserAction, SET_USER, } from './types'
import { patchFavoriteCharacter } from '../../services/userService'

export function clearData(): ResetStateAction {
    return {
        type: RESET_STATE,
    }
}

export function clear(): CleanErrorsAction {
    return {
        type: CLEAN_ERRORS,
    }
}

export function setUser(user: UserData): SetUserAction {
    return {
        type: SET_USER,
        payload: user
    }
}

function updateFavoriteCharacterRequest(): UpdateFavoriteCharacterRequestAction {
    return {
        type: UPDATE_FAVORITE_CHARACTER_REQUEST,
    }
}

function updateFavoriteCharacterSuccess(apiResponse: UserData): UpdateFavoriteCharacterSuccessAction {
    return {
        type: UPDATE_FAVORITE_CHARACTER_SUCCESS,
        payload: apiResponse
    }
}

function updateFavoriteCharacterFailure(errorMessage: string): UpdateFavoriteCharacterFailureAction {
    return {
        type: UPDATE_FAVORITE_CHARACTER_FAILURE,
        payload: errorMessage
    }
}


export const updateFavoriteCharacter = (characterId: number): ThunkAction<void, RootState, unknown, UserTypes> => async dispatch => {

    dispatch(updateFavoriteCharacterRequest())

    try {

        const data = await patchFavoriteCharacter(characterId.toString())
        dispatch(updateFavoriteCharacterSuccess(data))
    }

    catch (error) {
        dispatch(updateFavoriteCharacterFailure(error.message))
    }
}