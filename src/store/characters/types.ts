export const CLEAN_ERRORS = "CLEAN_ERRORS"

export const FETCH_CHARACTERS = "FETCH_CHARACTERS"
export const FETCH_CHARACTERS_REQUEST = "FETCH_CHARACTERS_REQUEST"
export const FETCH_CHARACTERS_SUCCESS = "SET_CHARACTERS"
export const FETCH_CHARACTERS_FAILURE = "SET_LOADING_CHARACTERS"

export interface FetchCharactersAction {
    type: typeof FETCH_CHARACTERS
}

export interface FetchCharactersRequestAction {
    type: typeof FETCH_CHARACTERS_REQUEST
}


export interface FetchCharactersSuccessAction {
    type: typeof FETCH_CHARACTERS_SUCCESS,
    payload: ApiResponse
}

export interface FetchCharactersFailureAction {
    type: typeof FETCH_CHARACTERS_FAILURE,
    payload: string
}

export interface CleanErrorsAction {
    type: typeof CLEAN_ERRORS,
}

export type CharactersActionTypes = FetchCharactersAction | FetchCharactersRequestAction | FetchCharactersSuccessAction | FetchCharactersFailureAction | CleanErrorsAction