
import { createStore, combineReducers, Action, applyMiddleware } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import characters from './characters/reducer'
import auth from './auth/reducer'
import user from './user/reducer'

const rootReducer = combineReducers({ characters, auth, user })

const composeEnhancers = composeWithDevTools({});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>