
declare interface LoginFormValues {
    username: string;
    password: string;
}

declare interface RegisterFormValues extends LoginFormValues {
    email: string;
}

declare interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
}

declare interface UserData {
    accessToken: string;
    email: string;
    favoriteCharacters: string[]
    id: string;
    username: string;
}

declare interface UserState {
    readonly user: UserData
    readonly updateFavoriteCharacterLoading: boolean,
    readonly updateFavoriteCharacterErrorMessage: string,
}

declare interface Info {
    next: string
    prev: string
}

declare type ApiResponse = { info: Info, results: Character[] }


declare interface CharactersPageState {
    readonly characters: Character[]
    readonly charactersLoading: boolean
    readonly charactersErrorMessage: string
    readonly prev: boolean
    readonly next: boolean
}

declare interface authState {
    readonly authorized: boolean
    readonly loginLoading: boolean
    readonly loginErrorMessage: string
    readonly registerLoading: boolean
    readonly registerErrorMessage: string
    readonly updateFavoriteCharacterLoading: boolean,
    readonly updateFavoriteCharacterErrorMessage: string,
}