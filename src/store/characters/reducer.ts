import { CharactersActionTypes, FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE, CLEAN_ERRORS } from "./types"

const initialState: CharactersPageState = {
    characters: [],
    charactersLoading: true,
    charactersErrorMessage: "",
    next: false,
    prev: false
}

const reducer = (state = initialState, action: CharactersActionTypes): CharactersPageState => {
    switch (action.type) {

        case FETCH_CHARACTERS:
            return { ...state, characters: [], charactersErrorMessage: "", charactersLoading: true }

        case FETCH_CHARACTERS_SUCCESS:
            return { ...state, charactersLoading: false, charactersErrorMessage: "", characters: action.payload.results, next: !!action.payload.info.next, prev: !!action.payload.info.prev }


        case FETCH_CHARACTERS_FAILURE:
            return { ...state, charactersLoading: false, characters: [], charactersErrorMessage: action.payload }

        case CLEAN_ERRORS:
            return { ...state, charactersLoading: false, charactersErrorMessage: "" }
        default:
            return state
    }
}

export default reducer