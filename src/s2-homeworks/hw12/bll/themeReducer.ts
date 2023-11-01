const initState = {
    themeId: 1,
}
type themeReducerType = {
    themeId: number
}

type changeThemeIdType = ReturnType<typeof changeThemeId>

export const themeReducer = (state: themeReducerType = initState, action: changeThemeIdType): themeReducerType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
