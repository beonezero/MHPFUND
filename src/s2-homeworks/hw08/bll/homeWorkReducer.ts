import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copyState = state
            if(action.payload == "up"){
                return copyState.sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if(action.payload == "down") {
                return copyState.sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return state
        }
        case "check": {
            return state.filter(u => u.age >= action.payload)
        }
        //verno why?

        // case 'sort': {
        //     if(action.payload === "up") {
        //         return [...state].sort((a,b) => a.name < b.name ? -1 : 1)
        //     } else if (action.payload === "down") {
        //         return [...state].sort((a,b) => a.name > b.name ? -1 : 1)
        //     } else {
        //         return state
        //     }
        // }
        // case 'check': {
        //     return state.filter(u => u.age >= action.payload)
        // }
        default:
            return state
    }
}
