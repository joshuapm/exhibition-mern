export const CLEAN_ERRORS = "CLEAN_ERRORS"
export const RESET_STATE = "RESET_STATE"
export const SET_USER = "SET_USER"

export const UPDATE_FAVORITE_CHARACTER = "UPDATE_FAVORITE_CHARACTER"
export const UPDATE_FAVORITE_CHARACTER_REQUEST = "UPDATE_FAVORITE_CHARACTER_REQUEST"
export const UPDATE_FAVORITE_CHARACTER_SUCCESS = "UPDATE_FAVORITE_CHARACTER_SUCCESS"
export const UPDATE_FAVORITE_CHARACTER_FAILURE = "UPDATE_FAVORITE_CHARACTER_FAILURE"

export interface CleanErrorsAction {
    type: typeof CLEAN_ERRORS,
}

export interface ResetStateAction {
    type: typeof RESET_STATE,
}

export interface UpdateFavoriteCharacterAction {
    type: typeof UPDATE_FAVORITE_CHARACTER
}

export interface UpdateFavoriteCharacterRequestAction {
    type: typeof UPDATE_FAVORITE_CHARACTER_REQUEST
}

export interface SetUserAction {
    type: typeof SET_USER,
    payload: UserData
}


export interface UpdateFavoriteCharacterSuccessAction {
    type: typeof UPDATE_FAVORITE_CHARACTER_SUCCESS,
    payload: UserData
}

export interface UpdateFavoriteCharacterFailureAction {
    type: typeof UPDATE_FAVORITE_CHARACTER_FAILURE,
    payload: string
}

export type UserTypes = SetUserAction | UpdateFavoriteCharacterAction | UpdateFavoriteCharacterRequestAction | UpdateFavoriteCharacterSuccessAction | UpdateFavoriteCharacterFailureAction | CleanErrorsAction | ResetStateAction
