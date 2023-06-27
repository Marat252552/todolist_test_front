import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export type User_T = {
    email: string | undefined
}

type initialState_T = {
    user: User_T,
    isAuthorized: boolean
}

let initialState: initialState_T = {
    user: {
        email: undefined
    },
    isAuthorized: false
}
// Создаем slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<string>) {
            state.user.email = action.payload
        },
        setIsAuthorized(state, action: PayloadAction<boolean>) {
            state.isAuthorized = action.payload
        },
        resetUserState(state) {
            state.user.email = undefined
        }
    }
})

export default userSlice