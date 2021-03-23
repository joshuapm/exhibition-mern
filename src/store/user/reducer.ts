import { CLEAN_ERRORS, UPDATE_FAVORITE_CHARACTER_REQUEST, UPDATE_FAVORITE_CHARACTER_SUCCESS, UPDATE_FAVORITE_CHARACTER_FAILURE, UserTypes, RESET_STATE, SET_USER } from "./types"

const noUser: UserData = {
    accessToken: "",
    email: "",
    favoriteCharacters: [],
    id: "",
    username: ""
}

const initialState: UserState = {
    user: JSON.parse(localStorage.getItem("user") || JSON.stringify(noUser)),
    updateFavoriteCharacterLoading: false,
    updateFavoriteCharacterErrorMessage: "",
}

const reducer = (state = initialState, action: UserTypes): UserState => {
    switch (action.type) {

        case SET_USER:
            return { ...state, user: action.payload }

        case RESET_STATE:
            return { ...initialState, user: noUser }

        case CLEAN_ERRORS:
            return { ...state, updateFavoriteCharacterErrorMessage: "" }

        case UPDATE_FAVORITE_CHARACTER_REQUEST:
            return { ...state, updateFavoriteCharacterErrorMessage: "", updateFavoriteCharacterLoading: true }

        case UPDATE_FAVORITE_CHARACTER_SUCCESS:
            return { ...state, updateFavoriteCharacterLoading: false, updateFavoriteCharacterErrorMessage: "", user: action.payload }

        case UPDATE_FAVORITE_CHARACTER_FAILURE:
            return { ...state, updateFavoriteCharacterLoading: false, updateFavoriteCharacterErrorMessage: action.payload }

        default:
            return state
    }
}

export default reducer