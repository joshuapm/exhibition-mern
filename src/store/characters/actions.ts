import { CharactersActionTypes, FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE, FetchCharactersSuccessAction, FetchCharactersFailureAction, FetchCharactersRequestAction, CLEAN_ERRORS } from './types'
import { RootState } from '../'
import { ThunkAction } from 'redux-thunk'
import { getCharactersList } from '../../services/charactersService'


export function clear() {
    return {
        type: CLEAN_ERRORS,
    }
}

function fetchCharactersRequest(): FetchCharactersRequestAction {
    return {
        type: FETCH_CHARACTERS_REQUEST,
    }
}

function fetchCharactersSuccess(apiResponse: ApiResponse): FetchCharactersSuccessAction {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: apiResponse
    }
}

function fetchCharactersFailure(errorMessage: string): FetchCharactersFailureAction {
    return {
        type: FETCH_CHARACTERS_FAILURE,
        payload: errorMessage
    }
}

export const fetchCharacters = (page: number): ThunkAction<void, RootState, unknown, CharactersActionTypes> => async dispatch => {

    dispatch(fetchCharactersRequest())

    try {

        const response: ApiResponse = await getCharactersList(page)
        dispatch(fetchCharactersSuccess(response))
    }

    catch (error) {
        dispatch(fetchCharactersFailure(error.message))
    }
}



