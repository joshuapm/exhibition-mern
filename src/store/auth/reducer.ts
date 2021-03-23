import { LoginPageActionTypes, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, CLEAN_ERRORS } from "./types"

const initialState: authState = {
    loginLoading: false,
    loginErrorMessage: "",
    authorized: !!localStorage.getItem("user"),
    registerLoading: false,
    registerErrorMessage: "",
    updateFavoriteCharacterLoading: false,
    updateFavoriteCharacterErrorMessage: "",
}

const reducer = (state = initialState, action: LoginPageActionTypes): authState => {
    switch (action.type) {

        case LOGIN_REQUEST:
            return { ...state, authorized: false, loginErrorMessage: "", loginLoading: true }

        case LOGIN_SUCCESS:
            return { ...state, loginLoading: false, authorized: true, loginErrorMessage: "" }

        case LOGIN_FAILURE:
            return { ...state, loginLoading: false, authorized: false, loginErrorMessage: action.payload }


        case REGISTER_REQUEST:
            return { ...state, loginErrorMessage: "", registerLoading: true }

        case REGISTER_SUCCESS:
            return { ...state, registerLoading: false, loginErrorMessage: "" }

        case REGISTER_FAILURE:
            return { ...state, registerLoading: false, registerErrorMessage: action.payload }


        case CLEAN_ERRORS:
            return { ...state, registerErrorMessage: "", loginErrorMessage: "" }

        case LOGOUT:
            return { ...initialState, authorized: false }

        default:
            return state
    }
}

export default reducer